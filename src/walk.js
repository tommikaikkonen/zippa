// @flow
import pipe from 'ramda/src/pipe';
import { whilst, canGoRight, right, up, down, edit, isLeaf } from './zipper';

function identity(x) {
    return x;
}

function forEachChild(fn, z) {
    if (isLeaf(z)) return z;
    let _z = z;
    _z = whilst(canGoRight, pipe(fn, right), down(_z));
    return up(fn(_z));
}

/**
 * @namespace walk
 */

/**
 * Walks the data structure in depth-first order,
 * applying inner and outer functions before and after (respectively) each
 * item's subtree is walked.
 *
 * Returns a new data structure from modified items, or the original
 * zipper if the structure wasn't modified.
 *
 * @alias walk.walk
 * @memberof walk
 * @param  {Function} inner - function applied to each item before it's subtree is walked
 * @param  {Function} outer  function applied to each item after it's subtree was walked
 * @param  {Zipper} zipper - A Zipper value to walk
 * @return {Zipper}
 */
export function walk(inner, outer, zipper) {
    function innerWalk(z) {
        return edit(outer, forEachChild(innerWalk, edit(inner, z)));
    }
    return innerWalk(zipper);
}

/**
 * Walks the data structure in depth-first order, applying
 * the function after the item's subtree has been walked.
 *
 * Returns a new data structure of modified items, or the original
 * zipper if the structure wasn't modified.
 *
 * @alias walk.postWalk
 * @memberof walk
 * @param  {Function} fn - function applied to each item after it's subtree was walked
 * @param  {Zipper} zipper - A Zipper value to walk
 * @return {Zipper}
 */
export function postWalk(fn, zipper) {
    return walk(identity, fn, zipper);
}

/**
 * Walks the data structure in depth-first order, applying
 * the function before the item's subtree has been walked.
 *
 * Returns a new data structure of modified items, or the original
 * zipper if the structure wasn't modified.
 *
 * @alias walk.preWalk
 * @memberof walk
 * @param  {Function} fn - function applied to each item before it's subtree is walked
 * @param  {Zipper} zipper - A Zipper value to walk
 * @return {Zipper}
 */
export function preWalk(fn, zipper) {
    return walk(fn, identity, zipper);
}

export default {
    walk,
    postWalk,
    preWalk,
};
