import chai from 'chai';
import sinonChai from 'sinon-chai';
import { visit, onPre, onPost, PRE } from '../index';
import { Node, TreeZipper } from './tree_zipper';
import { collect } from './utils';

chai.use(sinonChai);
const { expect } = chai;

const log = (node) => {
    console.log('LOG NODE:', node.data);
    return node;
};


function recordVisitStats(visitorFn) {
    const initialState = {
        itemCount: 0,
        replacedCount: 0,
        replaced: [],
        stopped: false,
        cut: false,
        cutCount: 0,
        stoppedAt: null,
        cutAt: [],
    };
    return function (_item, _state) {
        const res = visitorFn(_item, _state);
        const {
            item,
            state,
            stop,
            cut,
        } = res || {};
        const __state = state || _state || {};

        if (!__state.hasOwnProperty('stats')) {
            __state.stats = Object.assign({}, initialState);
        }

        const stats = __state.stats;

        stats.itemCount++;


        if (item) {
            stats.replacedCount++;
            stats.replaced.push(item);
        }

        const __item = res.hasOwnProperty('item') ? item : _item;

        if (stop) {
            stats.stopped = true;
            stats.stoppedAt = __item;
        }

        if (cut) {
            stats.cut = true;
            stats.cutCount++;
            stats.cutAt.push(__item);
        }

        const returnObject = {};
        if ((res || {}).hasOwnProperty('item')) returnObject.item = item;
        return {
            ...returnObject,
            state: __state,
            stop,
            cut,
        };
    };
}

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
        const z = TreeZipper.from(getTree());

        let preEvents = 0;
        let postEvents = 0;

        visit(
            [
                onPre(() => { preEvents++; }),
                onPost(() => { postEvents++; }),
            ],
            null,
            z
        );

        expect(preEvents).to.equal(5);
        expect(postEvents).to.equal(5);
    });

    it('stop', () => {
        const z = TreeZipper.from(getTree());

        function visitor(item, _) {
            if (item.data === 4) {
                return { stop: true };
            }
            return {};
        }

        const {
            state,
        } = visit(
            [onPre(recordVisitStats(visitor))],
            {},
            z
        );

        const stats = state.stats;

        expect(stats.stopped).to.be.true;
        expect(stats.itemCount).to.equal(3);
    });

    it('cut', () => {
        const z = TreeZipper.from(getTree());

        function visitor(item, _) {
            if (item.data === 2) {
                return { cut: true };
            }
            return {};
        }

        const {
            state,
        } = visit(
            [onPre(recordVisitStats(visitor))],
            {},
            z
        );

        const stats = state.stats;

        expect(stats.cut).to.be.true;
        expect(stats.cutAt).to.have.lengthOf(1);
        expect(stats.cutAt[0]).to.equal(z.value().children[0]);
        expect(stats.itemCount).to.equal(3);
    });

    it('replace nodes', () => {
        const z = TreeZipper.from(getTree());

        function visitor(item, _) {
            if (item.data === 2 || item.data === 4) {
                return {
                    item: new Node(item.data + 1, item.children),
                };
            }
            return {};
        }

        const {
            state,
            item,
        } = visit(
            [onPost(recordVisitStats(visitor))],
            {},
            z
        );

        const stats = state.stats;

        expect(stats.replacedCount).to.equal(2);
        expect(stats.itemCount).to.equal(5);
        expect(stats.replaced[0].data).to.equal(5);
        expect(stats.replaced[1].data).to.equal(3);

        expect(item.children[0]).to.equal(stats.replaced[1]);
        expect(item.children[0].children[0]).to.equal(stats.replaced[0]);
    });
});
