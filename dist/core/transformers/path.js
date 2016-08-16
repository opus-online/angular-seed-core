'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNameSuffix = exports.buildNameFromPath = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('./../util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildNameFromPath = exports.buildNameFromPath = function buildNameFromPath(path) {
  return (0, _util.splitPathToFolders)(path).map(_lodash2.default.upperFirst).join('');
};
var addNameSuffix = exports.addNameSuffix = function addNameSuffix(suffix) {
  return function (name) {
    return name + suffix;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3RyYW5zZm9ybWVycy9wYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRU8sSUFBTSxnREFBb0IsU0FBcEIsaUJBQW9CLENBQUMsSUFBRDtBQUFBLFNBQVUsOEJBQW1CLElBQW5CLEVBQXlCLEdBQXpCLENBQTZCLGlCQUFPLFVBQXBDLEVBQWdELElBQWhELENBQXFELEVBQXJELENBQVY7QUFBQSxDQUExQjtBQUNBLElBQU0sd0NBQWdCLFNBQWhCLGFBQWdCLENBQUMsTUFBRDtBQUFBLFNBQVksVUFBQyxJQUFEO0FBQUEsV0FBVSxPQUFPLE1BQWpCO0FBQUEsR0FBWjtBQUFBLENBQXRCIiwiZmlsZSI6InBhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHNwbGl0UGF0aFRvRm9sZGVycyB9IGZyb20gJy4vLi4vdXRpbC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGROYW1lRnJvbVBhdGggPSAocGF0aCkgPT4gc3BsaXRQYXRoVG9Gb2xkZXJzKHBhdGgpLm1hcChsb2Rhc2gudXBwZXJGaXJzdCkuam9pbignJyk7XHJcbmV4cG9ydCBjb25zdCBhZGROYW1lU3VmZml4ID0gKHN1ZmZpeCkgPT4gKG5hbWUpID0+IG5hbWUgKyBzdWZmaXg7XHJcbiJdfQ==