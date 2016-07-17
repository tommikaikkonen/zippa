import pipe from 'ramda/src/pipe';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { ArrayZipper, zip } from '../index';

chai.use(sinonChai);
const { expect } = chai;

describe('ArrayZipper', () => {
    const simpleArr = [1, 2, 3, 4];
    const nested = [
        [1, 2],
        [3, 4],
    ];

    it('gets correct values', () => {
        const z = ArrayZipper.from(simpleArr);

        expect(pipe(zip.down, zip.right, zip.value)(z)).to.equal(2);
        expect(z.down().value()).to.equal(1);
        expect(z.down().right().value()).to.equal(2);
        expect(z.down().right().right().value()).to.equal(3);
    });

    it('gets correct values from nested list', () => {
        const z = ArrayZipper.from(nested);

        expect(z.down().value()).to.equal(nested[0]);
        expect(z.down().right().value()).to.equal(nested[1]);

        expect(z.down().down().value()).to.equal(1);
        expect(z
            .down()
            .down()
            .up()
            .value()
        ).to.equal(nested[0]);
    });

    it('successfully replaces elements', () => {
        const z = ArrayZipper.from(simpleArr);
        expect(
            z.down().right().replace(10).root().value()
        ).to.deep.equal([1, 10, 3, 4]);
    });

    it('edits elements', () => {
        const z = ArrayZipper.from(simpleArr);
        const inc = x => x + 1;
        expect(
            z.down().edit(inc)
             .right().edit(inc)
             .right().edit(inc)
             .right().edit(inc)
             .root().value()
        ).to.deep.equal([2, 3, 4, 5]);
    });

    it('successfully replaces elements in nested list', () => {
        const z = ArrayZipper.from(nested);

        expect(
            z.down().right().replace([3, 4, 5, 6]).root().value()
        ).to.deep.equal([
            [1, 2],
            [3, 4, 5, 6],
        ]);
    });

    it('insert elements to the right', () => {
        const z = ArrayZipper.from([[1, 2], [5, 6]]);
        expect(
            z.down().insertRight([3, 4]).root().value()
        ).to.deep.equal([[1, 2], [3, 4], [5, 6]]);
    });

    it('insert elements to the left', () => {
        const z = ArrayZipper.from([[1, 2], [5, 6]]);
        expect(
            z.down().rightmost().insertLeft([3, 4]).root().value()
        ).to.deep.equal([[1, 2], [3, 4], [5, 6]]);
    });

    it('appends child', () => {
        const z = ArrayZipper.from(simpleArr);
        expect(
            z.appendChild(5).appendChild(6).value()
        ).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('removes node', () => {
        const z = ArrayZipper.from(nested);

        expect(
            z.down().right().down().remove().root().value()
        ).to.deep.equal([[1, 2], [4]]);
    });

    it('iterates through array with next', () => {
        let z = ArrayZipper.from(nested);

        const expected = [
            [1, 2],
            1,
            2,
            [3, 4],
            3,
            4,
        ];

        expected.forEach(result => {
            z = z.next();
            expect(z.value()).to.deep.equal(result);
        });

        const end = z.next();
        expect(end).to.equal(end.next());
    });

    it('iterates through array with prev', () => {
        let z = ArrayZipper.from(nested);
        z = z.down().rightmost().down().rightmost();

        expect(z.value()).to.deep.equal(4);

        const expected = [
            3,
            [3, 4],
            2,
            1,
            [1, 2],
            [[1, 2], [3, 4]],
        ];

        expected.forEach(result => {
            z = z.prev();
            expect(z.value()).to.deep.equal(result);
        });

        expect(z.isTop()).to.be.true;
    });

    it('isEnd', () => {
        let z = ArrayZipper.from(simpleArr);

        let iterations = 4;

        while (iterations--) {
            z = z.next();
            expect(z.isEnd()).to.be.false;
        }
        expect(z.next().isEnd()).to.be.true;
    });
});
