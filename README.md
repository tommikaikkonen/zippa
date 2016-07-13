zippa
==============

**Generic [zipper](https://en.wikipedia.org/wiki/Zipper_(data_structure)) library for JavaScript. Comes with a concrete ArrayZipper.**

Similar to [Neith](https://github.com/mattbierner/neith), but with JS Arrays instead infinite streams and a chainable API in addition to a plain function API.

## Example Usage with ListZipper

```javascript
import makeZipper, { ListZipper } from 'zippa';

let z = ListZipper.from([1, 2, 3, 4]);

z = z.down();
z.value()
// 1
z = z.right();
z.value()
// 2
z = z.rightmost();
z.value()
// 4
z = z.remove();

z.root().value()
// [1, 2, 3]
```

## Example: Making a Tree Zipper

Zippers are very useful for functional modification of trees. Making a Zipper for a k-ary tree is simple.

First we define the tree node:

```javascript
class Node {
    constructor(value, children) {
        this.value = value;
        this.children = children;
    }
}
```

Then write the three functions required by `makeZipper` to make a concrete Zipper class:

```javascript
function isBranch(node) {
    return node.children && !!node.children.length;
}

function getChildren(node) {
    return node.children;
}

function makeNode(oldParent, children) {
    return new Node(oldParent.value, children);
}
```

Import `zippa`, make a `TreeZipper`, and zip away.

```javascript
import makeZipper from 'zippa';

const TreeZipper = makeZipper(isBranch, getChildren, makeNode);

const tree = new Node(
    1,
    [
        new Node(2),
        new Node(3)
    ]
);

const z = TreeZipper.from(tree);

z.value().value
// 1

z.down().right().value().value
// 3
```

## API

### makeZipper<T>

Takes three parameters in this order:

- `isBranch: (item: T) => boolean`: should return whether the item can have children.
- `getChildren: (item: T) => Array<T>`: should the children of `item` as an Array.
- `makeItem: (item: T, children: Array<T>) => T`: given an old item `item`, and new children `children`, should return a new `item` with the supplied children.

Returns a `Zipper` class using the implementation provided by the three functions. The Zipper class provides both a plain function API and a chainable API, which are described below.

### Zipper<T>

#### Construction

Use the static method `from` to construct instances suitable for the chainable API:

```javascript
const zipper = ListZipper.from([1, 2, 3])
zipper.down().right() // etc
```

Use `loc` to construct Location 2-tuples for the plain function API:

```javascript
const {
    down,
    right,
    loc,
    value,
} = ListZipper.
const l = loc([1, 2, 3]);

value(right(down(l)))
// 2
```


#### Instance methods

For each instance method in the chainable API, there's an identically named static method on the class.

**Queries and Movement**

- `value(): ?T`: returns the item at the current location
- `down(): Zipper` moves location to the leftmost child.
- `left(): Zipper`: moves location to the left sibling
- `leftmost(): Zipper`: moves location to the leftmost sibling
- `right(): Zipper`: moves location to the right sibling
- `rightmost(): Zipper`: moves location to the rightmost sibling
- `root(): Zipper` moves location to the root, applying any changes made
- `next(): Zipper`: moves location to the next element in depth-first order
- `prev(): Zipper`: moves location to the previous element in depth-first order.
- `isEnd(): boolean`: returns true if zipper has been exhausted by calls to `next()`, otherwise false

**Modification**

- `remove(): Zipper`: removes item at current location.
- `replace(item: T): Zipper`: replaces item at current location with `item`
- `edit(fn: (item: T) => T): Zipper`: replaces item at current location with the return value of calling `fn` with the current item. 
- `insertChild(item: T): Zipper`: inserts an item as the first child. Number of children gros by one
- `appendChild(item: T): Zipper`: inserts an item as the last child. Number of children gros by one
- `insertLeft(item: T): Zipper`: inserts `item` as the left sibling
- `insertRight(item: T): Zipper`: inserts `item` as the right sibling

**Side-effects**

- `do(fn: (item: T, path: PathType) => any): Zipper`: calls `fn` with the current item and path, and returns the current zipper. Useful for debugging with `console.log`.

#### Static Methods

For each instance method in the chainable API above, there's an identically named static method on the class which accept location values returned by `Zipper.loc`. The location value is always the last parameter.

### ArrayZipper

Concrete Zipper class to manipulate and traverse Arrays.

```javascript
import { ListZipper } from 'zippa';
```

## License

MIT. See `LICENSE`
