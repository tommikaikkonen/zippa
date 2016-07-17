import * as zip from './zipper';
import walk from './walk';
import ArrayZipper from './array_zipper';


export const makeZipper = zip.makeZipper;
export { zip, walk, ArrayZipper };

const mainExport = {
    ...zip,
    ArrayZipper,
    walk,
    makeZipper,
};

export default mainExport;
