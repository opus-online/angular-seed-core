import test from 'ava';
import { splitPathToFolders, resolveFileName } from '../../src/core/util.js';

test('resolveFileName should return the file name of a path', (t) => {
    t.is(resolveFileName('.//.///peeter.js'), 'peeter');
});
test('splitPathToFolders should return an array of folder names', (t) => {
    t.deepEqual(splitPathToFolders('./peeter/opus/angular'), ['peeter', 'opus']);
});
