import lodash from 'lodash';
import { splitPathToFolders } from './../util.js';

export const buildNameFromPath = (path) => splitPathToFolders(path).map(lodash.upperFirst).join('');
export const addNameSuffix = (suffix) => (name) => name + suffix;
