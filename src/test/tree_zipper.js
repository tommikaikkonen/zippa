import { makeZipper } from '../index';

export class Node {
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

export const TreeZipper = makeZipper(isBranch, getChildren, makeNode);

export default TreeZipper;
