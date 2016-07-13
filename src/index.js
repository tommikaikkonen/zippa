// @flow
import assoc from 'ramda/src/assoc';
import head from 'ramda/src/head';
import init from 'ramda/src/init';
import last from 'ramda/src/last';
import tail from 'ramda/src/tail';
import pipe from 'ramda/src/pipe';
import merge from 'ramda/src/merge';

const TOP = null;
const END = '@@zipper/END';

type TopType = null;
type EndType = typeof END;

function isEmpty(arr: Array<any>): boolean {
    return !arr.length;
}

function whilst(predicate: (x: any) => boolean, fn: (x: any) => any, value: any): any {
    let curr = value;
    while (predicate(curr)) {
        curr = fn(curr);
    }
    return curr;
}


export function makeZipper<T>(
    _isBranch: (x: T) => boolean,
    _getChildren: (x: T) => Array<T>,
    makeItem: (x: T, children: Array<T>) => T
): Function {
    type PathType = {
        left: Array<T>,
        right: Array<T>,
        parentItems: Array<T> | TopType,
        parentPath: PathType | TopType,
        changed: boolean,
    };


    type LocationType = [T, PathType | EndType];

    const getItem: (loc: LocationType) => T = head;
    const getPath: (loc: LocationType) => PathType = last;

    const isBranch: (loc: LocationType) => boolean =
        pipe(getItem, _isBranch);

    function isLeaf(loc: LocationType): boolean {
        return !isBranch(loc);
    }

    function isEnd(loc: LocationType): boolean {
        return getPath(loc) === END;
    }

    function getParentItems(loc: LocationType): ?Array<T> {
        return getPath(loc).parentItems;
    }

    function isTop(loc: LocationType): boolean {
        return getParentItems(loc) === TOP;
    }

    function isNotTop(loc: LocationType): boolean {
        return !isTop(loc);
    }

    function getChildren(item: T): Array<T> {
        if (!_isBranch(item)) {
            throw new Error('Tried getting children of a leaf');
        }
        return _getChildren(item);
    }


    function getLefts(loc: LocationType): Array<T> {
        return getPath(loc).left;
    }

    function getRights(loc: LocationType): Array<T> {
        return getPath(loc).right;
    }

    function hasChanged(loc: LocationType): ?boolean {
        return getPath(loc).changed;
    }

    function location(item: T, path?: ?(PathType | EndType)): LocationType {
        return [
            item,
            path || {
                left: [],
                right: [],
                parentItems: TOP,
                parentPath: TOP,
                changed: false,
            },
        ];
    }

    function canGoLeft(loc: LocationType): boolean {
        return !isEmpty(getLefts(loc));
    }

    function goLeft(loc: LocationType): LocationType {
        if (isEnd(loc)) return loc;

        const item = getItem(loc);
        const path = getPath(loc);

        const leftSibling = last(path.left);
        const newLeft = init(path.left);
        const newRight = [item].concat(path.right);
        return location(
            leftSibling,
            merge(path, {
                left: newLeft,
                right: newRight,
            }),
        );
    }

    function goLeftmost(loc: LocationType): LocationType {
        const path = getPath(loc);

        const hasLeft = Boolean(path.left.length);
        if (!hasLeft) return loc;

        const item = getItem(loc);
        const leftMost = head(path.left);
        const newLeft = [];
        const newRight = tail(path.left).concat([item], path.right);
        return location(
            leftMost,
            merge(path, {
                left: newLeft,
                right: newRight,
            })
        );
    }

    function canGoRight(loc: LocationType): boolean {
        return !isEmpty(getRights(loc));
    }

    function goRight(loc: LocationType): LocationType {
        const item = getItem(loc);
        const path = getPath(loc);

        const rightSibling = head(path.right);
        const newLeft = path.left.concat([item]);
        const newRight = tail(path.right);

        return location(
            rightSibling,
            merge(path, {
                left: newLeft,
                right: newRight,
            }),
        );
    }

    function goRightmost(loc: LocationType): LocationType {
        const path = getPath(loc);

        const rights = getRights(loc);

        if (isEmpty(rights)) return loc;

        const lefts = getLefts(loc);
        const item = getItem(loc);
        const rightMost = last(rights);
        const newLeft = lefts.concat([item], init(rights));
        const newRight = [];
        return location(
            rightMost,
            merge(path, {
                left: newLeft,
                right: newRight,
            })
        );
    }


    function canGoDown(loc: LocationType): boolean {
        return isBranch(loc) && !isEmpty(getChildren(getItem(loc)));
    }

    function goDown(loc: LocationType): ?LocationType {
        if (!isBranch(loc)) return null;

        const item = getItem(loc);
        const path = getPath(loc);


        const children = getChildren(item);
        const newLeft = [];
        const newRight = tail(children);
        const newLoc = location(
            head(children),
            merge(path, {
                left: newLeft,
                right: newRight,
                parentItems: (path.parentItems || []).concat([item]),
                parentPath: path,
            })
        );
        return newLoc;
    }

    function canGoUp(loc: LocationType): boolean {
        return !isTop(loc);
    }

    function goUp(loc: LocationType): ?LocationType {
        if (isTop(loc)) return null;

        const path = getPath(loc);
        const parent = last(path.parentItems);
        if (!hasChanged(loc)) {
            return location(parent, path.parentPath);
        }

        const parentPath = path.parentPath;
        const item = getItem(loc);
        return location(
            makeItem(parent, path.left.concat([item], path.right)),
            assoc('changed', true, parentPath)
        );
    }

    function _canGoUpRight(loc: LocationType): boolean {
        if (!canGoUp(loc)) return false;
        const parent = goUp(loc);
        return parent ? canGoRight(parent) : false;
    }

    function next(loc: LocationType): LocationType {
        if (isEnd(loc)) return loc;

        // $FlowIgnore: goDown(loc) cannot be null if canGoDown returns true.
        if (canGoDown(loc)) return goDown(loc);
        if (canGoRight(loc)) return goRight(loc);

        function isNotTopAndCantGoUpAndRight(currLoc: LocationType): boolean {
            return !isTop(currLoc) && !_canGoUpRight(currLoc);
        }

        const currLoc = whilst(isNotTopAndCantGoUpAndRight, goUp, loc);

        if (isTop(currLoc)) return location(getItem(currLoc), END);

        // The above predicate isNotTopAndCantGoUpAndRight makes sure
        // we can do this without returning null.
        // $FlowIgnore
        return goRight(goUp(currLoc));
    }

    function _goToRightmostChild(loc: LocationType): LocationType {
        // $FlowIgnore: this will not return null (should be checked before).
        return goRightmost(goDown(loc));
    }

    function prev(loc: LocationType): ?LocationType {
        if (canGoLeft(loc)) {
            return whilst(isBranch, _goToRightmostChild, goLeft(loc));
        }
        return isTop(loc)
            ? null
            : goUp(loc);
    }

    function root(loc: LocationType): LocationType {
        if (isEnd(loc)) return loc;
        return whilst(isNotTop, goUp, loc);
    }

    function insertLeft(insertItem: T, loc: LocationType): LocationType {
        if (isTop(loc)) {
            throw new Error('Tried inserting left of top');
        }

        const item = getItem(loc);
        const path = getPath(loc);
        return location(
            item,
            {
                left: path.left.concat([insertItem]),
                right: path.right,
                parentItems: path.parentItems,
                parentPath: path.parentPath,
                changed: true,
            }
        );
    }

    function insertRight(insertItem: T, loc: LocationType): LocationType {
        if (isTop(loc)) {
            throw new Error('Tried inserting left of top');
        }

        const item = getItem(loc);
        const path = getPath(loc);

        return location(
            item,
            {
                left: path.left,
                right: [insertItem].concat(path.right),
                parentItems: path.parentItems,
                parentPath: path.parentPath,
                changed: true,
            }
        );
    }

    function remove(loc: LocationType): LocationType {
        const path = getPath(loc);

        if (isTop(loc)) {
            throw new Error('Can\'t remove top.');
        }


        if (path.left.length) {
            const leftSibling = location(
                last(path.left),
                merge(path, {
                    left: init(path.left),
                    changed: true,
                })
            );
            return whilst(isBranch, _goToRightmostChild, leftSibling);
        } else {
            return location(
                makeItem(last(path.parentItems), path.right),
                isTop(loc)
                    ? path.parentPath
                    : assoc('changed', true, path.parentPath)
            );
        }
    }

    function replace(replaceWith: T, loc: LocationType): LocationType {
        const path = getPath(loc);
        return location(
            replaceWith,
            assoc('changed', true, path)
        );
    }

    function edit(fn: (n: T) => T, loc: LocationType): LocationType {
        return replace(fn(getItem(loc)), loc);
    }


    function insertChild(item: T, loc: LocationType): LocationType {
        const newChildren = [item].concat(getChildren(getItem(loc)));
        return replace(makeItem(item, newChildren), loc);
    }

    function appendChild(item: T, loc: LocationType): LocationType {
        const newChildren = getChildren(getItem(loc)).concat([item]);
        return replace(makeItem(item, newChildren), loc);
    }


    /**
     * A Zipper class using the implementation functions
     * provided in `makeZipper`.
     *
     * Don't use the constructor directly. Use `Zipper.from(item)`
     * for the chainable API or `Zipper.loc(item)` for the functional
     * API.
     */
    class Zipper {
        _value: ?LocationType;

        /**
         * Returns a Zipper instance from item.
         */
        static from(item: T): Zipper {
            return new Zipper(location(item));
        }

        /**
         * Returns a location object from item.
         * Use the returned value if using
         * the non-chained, plain function API.
         *
         * ```javascript
         * const {
         *   down,
         *   right,
         *   loc,
         *   value,
         * } = ListZipper;
         *
         * const z = loc([1, 2, 3])
         * value(right(down(z)))
         * // 2
         * ```
         */
        static loc(item: T): LocationType {
            return location(item);
        }

        static up = goUp;
        static down = goDown;
        static left = goLeft;
        static leftmost = goLeftmost;
        static right = goRight;
        static rightmost = goRightmost;
        static root = root;
        static value = getItem;
        static next = next;
        static prev = prev;
        static edit = edit;
        static replace = replace;
        static insertChild = insertChild;
        static insertLeft = insertLeft;
        static insertRight = insertRight;
        static appendChild = appendChild;
        static remove = remove;
        static isEnd = isEnd;

        constructor(loc: ?LocationType) {
            this._value = loc;
        }

        map(fn: (x: LocationType) => ?LocationType): Zipper {
            const value = this._value;
            if (!value) return this;
            return new Zipper(fn(value));
        }

        /**
         * Calls `fn` with two arguments: the current item
         * and the current path, and returns itself.
         * @instance
         */
        do(fn: (x: T, y: PathType) => any): Zipper {
            const val = this._value;
            if (!val) return this;

            fn(getItem(val), getPath(val));
            return this;
        }

        /**
         * Returns the item at this location.
         */
        value(): ?T {
            if (!this._value) return null;
            return getItem(this._value);
        }

        path(): ?PathType {
            return this._value
                ? getPath(this._value)
                : null;
        }

        /**
         * Moves location to the left sibling.
         */
        left(): Zipper {
            return this.map(goLeft);
        }

        /**
         * Moves location to the leftmost sibling.
         */
        leftmost(): Zipper {
            return this.map(goLeftmost);
        }

        /**
         * Moves location to the right sibling.
         */
        right(): Zipper {
            return this.map(goRight);
        }

        /**
         * Moves location to the rightmost sibling.
         */
        rightmost(): Zipper {
            return this.map(goRightmost);
        }

        /**
         * Moves location to the parent.
         */
        up(): Zipper {
            return this.map(goUp);
        }

        /**
         * Moves location to the leftmost child.
         */
        down(): Zipper {
            return this.map(goDown);
        }

        /**
         * Moves location to the root, applying
         * any changes.
         */
        root(): Zipper {
            return this.map(root);
        }

        /**
         * Moves location to the next element
         * in depth-first order..
         */
        next(): Zipper {
            if (!this._value) return this;

            const newVal = next(this._value);
            if (newVal === this._value) {
                return this;
            }
            return new Zipper(newVal);
        }

        /**
         * Moves location to the previous element
         * in depth-first order.
         */
        prev(): Zipper {
            if (!this._value) return this;

            const newVal = prev(this._value);
            if (newVal === this._value) {
                return this;
            }
            return new Zipper(newVal);
        }

        /**
         * Returns true if zipper is exhausted
         * by calls to `next`.
         */
        isEnd(): ?boolean {
            if (!this._value) return null;
            return isEnd(this._value);
        }

        /**
         * Inserts an item as the first child.
         * Number of children grows by one.
         */
        insertChild(item: T): Zipper {
            return this.map(insertChild.bind(null, item));
        }

        /**
         * Inserts item as a new left sibling.
         */
        insertLeft(item: T): Zipper {
            return this.map(insertLeft.bind(null, item));
        }

        /**
         * Inserts an item as a new right sibling.
         */
        insertRight(item: T): Zipper {
            return this.map(insertRight.bind(null, item));
        }

        /**
         * Inserts an item as the last child.
         * Number of children grows by one.
         */
        appendChild(item: T): Zipper {
            return this.map(appendChild.bind(null, item));
        }

        /**
         * Removes item at current location.
         */
        remove(): Zipper {
            return this.map(remove);
        }

        /**
         * Replaces item at current location.
         */
        replace(item: T): Zipper {
            return this.map(replace.bind(null, item));
        }

        /**
         * Replaces item at current location with the return
         * value of calling `fn` with the current item.
         */
        edit(fn: (n: T) => T): Zipper {
            return this.map(edit.bind(null, fn));
        }
    }

    return Zipper;
}

const ArrayZipper = makeZipper(
    (arr: Array<any>): boolean => !!arr.length,
    (arr: Array<any>): Array<any> => arr,
    (_: any, children: Array<any>): Array<any> => children,
);

export { ArrayZipper };

export default makeZipper;
