'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNameSuffix = exports.buildNameFromPath = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('./path.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildNameFromPath = exports.buildNameFromPath = function buildNameFromPath(path) {
  return (0, _path.splitPathToFolders)(path).map(_lodash2.default.upperFirst).join('');
};
var addNameSuffix = exports.addNameSuffix = function addNameSuffix(suffix) {
  return function (name) {
    return name + suffix;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3RyYW5zZm9ybWVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVPLElBQU0sZ0RBQW9CLFNBQXBCLGlCQUFvQixDQUFDLElBQUQ7QUFBQSxTQUFVLDhCQUFtQixJQUFuQixFQUF5QixHQUF6QixDQUE2QixpQkFBTyxVQUFwQyxFQUFnRCxJQUFoRCxDQUFxRCxFQUFyRCxDQUFWO0FBQUEsQ0FBMUI7QUFDQSxJQUFNLHdDQUFnQixTQUFoQixhQUFnQixDQUFDLE1BQUQ7QUFBQSxTQUFZLFVBQUMsSUFBRDtBQUFBLFdBQVUsT0FBTyxNQUFqQjtBQUFBLEdBQVo7QUFBQSxDQUF0QiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHNwbGl0UGF0aFRvRm9sZGVycyB9IGZyb20gJy4vcGF0aC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGROYW1lRnJvbVBhdGggPSAocGF0aCkgPT4gc3BsaXRQYXRoVG9Gb2xkZXJzKHBhdGgpLm1hcChsb2Rhc2gudXBwZXJGaXJzdCkuam9pbignJyk7XHJcbmV4cG9ydCBjb25zdCBhZGROYW1lU3VmZml4ID0gKHN1ZmZpeCkgPT4gKG5hbWUpID0+IG5hbWUgKyBzdWZmaXg7XHJcbiJdfQ==