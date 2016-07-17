zippa
==============

**Generic [zipper](https://en.wikipedia.org/wiki/Zipper_(data_structure)) library for JavaScript. Comes with a concrete ArrayZipper.**

Similar to [Neith](https://github.com/mattbierner/neith), but with JS Arrays instead infinite streams and a chainable API in addition to a plain function API.

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

## API

For API reference, see [DOCUMENTATION.md](DOCUMENTATION.md)

## License

MIT. See `LICENSE`
