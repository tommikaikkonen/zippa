import chai from 'chai';
import sinonChai from 'sinon-chai';
import { makeTreeZipper } from '../index';
import { visit, onPre, onPost } from '../index';
import { Node, TreeZipper } from './tree_zipper';
import { collect } from './utils';

chai.use(sinonChai);
const { expect } = chai;

const log = (node) => {
    console.log('LOG NODE:', node.data);
    return node;
};

describe('visit', () => {
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

    it('correct number of pre and post visit events', () => {
        let z = TreeZipper.from(getTree());

        let preEvents = 0;
        let postEvents = 0;

        visit(
            [
                onPre(() => { preEvents++ }),
                onPost(() => { postEvents++ }),
            ],
            null,
            z
        );

        expect(preEvents).to.equal(5);
        expect(postEvents).to.equal(5);
    });
});
