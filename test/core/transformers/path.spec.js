import test from 'ava';

import { addNameSuffix, buildNameFromPath } from '../../../src/core/transformers/path.js';

test('addNameSuffix should create a function that adds the suffix to the given string', (t) => {
    t.is(addNameSuffix('_SUFFIX')('name'), 'name_SUFFIX');
});

test('buildNameFromPath should create a name from a folder path', (t) => {
    t.is(buildNameFromPath('./src/peeter/path/index.js'), 'SrcPeeterPath');
});
