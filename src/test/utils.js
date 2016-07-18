import { onPre, visit } from '../index';

const reduceVisitor = fn => (item, state) => fn(state, item);

export const reduce = (fn, initialAcc, zipper) =>
    visit(
        [onPre(reduceVisitor(fn))],
        initialAcc,
        zipper
    ).state;


export const collect = (fn, zipper) => reduce((acc, item) => {
    acc.push(fn(item));
    return acc;
}, [], zipper);
