import chai from 'chai';
import sinonChai from 'sinon-chai';
import { makeZipper } from '../index';
import { postWalk, preWalk } from '../walk';

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
    console.log('LOG NODE:', node.data);
    return node;
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

    function incrementNode(node) {
        return new Node(node.data + 1, node.children);
    }

    it('postwalk works', () => {
        let z = Zipper.from(getTree());

        function gatherNumbers(listRef, node) {
            listRef.push(node.data);
            return node;
        }

        // Assert initial is correct
        const initialNumbers = [];
        preWalk(gatherNumbers.bind(null, initialNumbers), z);
        expect(initialNumbers)
            .to.deep.equal([1, 2, 4, 5, 3]);

        // Do the incrementation.
        z = postWalk(incrementNode, z);

        // Check result.
        const afterNumbers = [];
        preWalk(gatherNumbers.bind(null, afterNumbers), z);
        expect(afterNumbers)
            .to.deep.equal([2, 3, 5, 6, 4]);
    });
});
