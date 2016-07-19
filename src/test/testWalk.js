import chai from 'chai';
import sinonChai from 'sinon-chai';
import { postWalk, preWalk } from '../index';
import { Node, TreeZipper } from './tree_zipper';
import { collect } from './utils';

chai.use(sinonChai);
const { expect } = chai;

const log = (node) => {
    console.log('LOG NODE:', node.data);
    return node;
};

describe('TreeZipper walk', () => {
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


    function incrementNode(node) {
        return new Node(node.data + 1, node.children);
    }

    it('postwalk works', () => {
        let z = TreeZipper.from(getTree());

        const initialNumbers = collect(node => node.data, z);

        expect(initialNumbers)
            .to.deep.equal([1, 2, 4, 5, 3]);

        // Do the incrementation.
        z = postWalk(incrementNode, z);

        // Check result.
        const afterNumbers = collect(node => node.data, z);
        expect(afterNumbers)
            .to.deep.equal([2, 3, 5, 6, 4]);
    });

    it('prewalk is in correct order', () => {
        let z = TreeZipper.from(getTree());

        function _gatherNumbers(listRef, node) {
            listRef.push(node.data);
            return node;
        }
        const treeNumbers = [];
        const gatherNumbers = _gatherNumbers.bind(null, treeNumbers);
        z = preWalk(gatherNumbers, z);

        expect(treeNumbers).to.deep.equal([1, 2, 4, 5, 3]);
    });
});
