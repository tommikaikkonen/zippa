import chai from 'chai';
import sinonChai from 'sinon-chai';
import { makeZipper } from '../index';
import { Node, TreeZipper } from './tree_zipper';

chai.use(sinonChai);
const { expect } = chai;

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
        let z = TreeZipper.from(getTree());

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
        const z = TreeZipper.from(getTree());
        const changedZipper = z.down().rightmost().remove().root();

        const dfsorder = dfswalk(changedZipper);
        expect(dfsorder).to.deep.equal([
            1, 2, 4, 5,
        ]);
    });
});
