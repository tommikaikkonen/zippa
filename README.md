zippa
==============

**Generic [zipper](https://en.wikipedia.org/wiki/Zipper_(data_structure)) library for JavaScript with functional visitor utilities.**

The Zipper core is similar to [Neith](https://github.com/mattbierner/neith), but with JS Arrays instead infinite streams and a chainable API in addition to a plain function API.

Functional visiting is implemented in the powerful `visit(visitors, initialState, zipper)` function, which visits the structure in depth-first order without recursion, maintaining a visit state, allowing breaking out of the visit, skipping subtrees, and handling pre and post visits separately for each element. `walk`, `preWalk` and `postWalk` are implemented using `visit`.

## Example Usage with ArrayZipper

Instantiation
```javascript
import { zip, ArrayZipper } from 'zippa';

let z = ArrayZipper.from([1, 2, 3, 4]);
```

The functional API is simple. You can import the functions straight from `zippa` with `import { up, down, right, left } from 'zippa'`, or get them under a namespace with `import { zip } from 'zippa';` All functions are curried.

```javascript
import pipe from 'ramda/src/pipe'; // reverse compose
import until from 'ramda/src/until';

const thirdChild = pipe(zip.down, zip.right, zip.right, zip.value);
thirdChild(z);
// 3

const increment = zip.edit(x => x + 1);
const incrementChildren = pipe(
    z.down,
    until(zip.isRightmost, pipe(increment, zip.right))
    increment,
    zip.root,
    zip.value
);

incrementChildren(ArrayZipper.from([1, 2, 3, 4]));
// [2, 3, 4, 5]
```

The chainable API works with the identically named methods on the zipper value. You can exchange between between both styles. Methods are not curried.

```javascript
let z = ArrayZipper.from([1, 2, 3, 4]);
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
import { makeZipper } from 'zippa';

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

## Example: Implementing reduce for TreeZipper with `visit`

For reduce, we want to visit each node in the tree, keep a reference to an `acc` value, and call `reducerFn(acc, node)` on each node. You could do it without `zippa.visit`, but this is a good demonstration of `visit` usage.

`reduce`'s function signature looks like this:

```javascript
declare function reduce<T>(fn: (acc: T, item: any) => T, initialAcc: any, zipper: Zipper): T;
```

The function passed to reduce takes `acc` first and the current item second, while a `zippa` visitor function takes an event type first (`zippa.PRE` or `zippa.POST`), item second and state third. To change the state of a visit, the visitor needs to return an object describing the changes. We want to update the state, so we have to return an object with the `state` key, whose value is the new state.

To make a visitor function out of a reducer function, we make a higher order function that returns a function conforming to the visitor interface. We also utilize `zippa.onPre`:

```javascript
import { onPre } from 'zippa';
const makeReduceVisitor = fn => onPre((item, state) => ({ state: fn(state, item) }));
```

`onPre(g)` returns a function that calls `g` with `item` and `state` only on the `PRE` event, so we don't need to deal with the event identifiers ourselves.

Now that we have a way to transform a reducer function to a visitor function, we'll need to pass the visitor function to `zippa.visit`. `zippa.visit` takes a list of visitor functions, an initial state, and a zipper value as arguments.

```javascript
import { visit } from 'zippa';

export const reduce = (fn, initialAcc, zipper) => {
    const {
        state,
        item,
        zipper
    } = visit(
        [makeReduceVisitor(fn)],
        initialAcc,
        zipper
    );

    return state;
}
```

Using the reduce function, we can gather all the data in our tree:

```javascript
const tree = new Node(
    1,
    [
        new Node(2),
        new Node(3)
    ]
);

const z = TreeZipper.from(tree);
const numbers = reduce((acc, node) => acc.concat(node.value), [], z);
// [1, 2, 3]
```

## API

[See API reference here](http://tommikaikkonen.github.io/zippa/).

## License

MIT. See `LICENSE`
