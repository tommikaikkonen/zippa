import chai from 'chai';
import sinonChai from 'sinon-chai';
import makeZipper from '../index';

chai.use(sinonChai);
const { expect } = chai;

class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }
}

function getChildren(node) {
    return node.children;
}

function makeNode(node, children) {
    return new Node(node.data, children);
}

function isBranch(node) {
    return !!getChildren(node).length;
}

const log = (node) => {
    console.log(node.data);
};

describe('TreeZipper', () => {
    function getTree() {
        return new Node(
            1,
            [
                new Node(
                    2,
                    [
                        new Node(4),
                        new Node(5),
                    ]
                ),
                new Node(3),
            ]
        );
    }

    const Zipper = makeZipper(isBranch, getChildren, makeNode);

    function dfswalk(z) {
        let _z = z;
        const result = [];
        while (!_z.isEnd()) {
            result.push(_z.value().data);
            _z = _z.next();
        }
        return result;
    }

    it('DFS iteration works', () => {
        let z = Zipper.from(getTree());

        const iterationOrder = [];
        while (!z.isEnd()) {
            iterationOrder.push(z.value().data);
            z = z.next();
        }

        const expected = [
            1, 2, 4, 5, 3,
        ];

        expect(iterationOrder).to.deep.equal(expected);
    });

    it('replacing works', () => {
        const z = Zipper.from(getTree());
        const changedZipper = z.down().rightmost().remove().root();

        const dfsorder = dfswalk(changedZipper);
        expect(dfsorder).to.deep.equal([
            1, 2, 4, 5,
        ]);
    });
});
