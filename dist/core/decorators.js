'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPrototypeDecoratorValue = exports.createPrototypeDecorator = exports.ENUMS = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENUMS = exports.ENUMS = {
    COMPONENT: 'Core.Component'
};
var createPrototypeDecorator = exports.createPrototypeDecorator = function createPrototypeDecorator(key) {
    return function (options) {
        return function (target) {
            _lodash2.default.set(target.prototype, key, options);
        };
    };
};
var getPrototypeDecoratorValue = exports.getPrototypeDecoratorValue = function getPrototypeDecoratorValue(target, key) {
    return _lodash2.default.extend({}, _lodash2.default.get(target.prototype, key));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLHdCQUFRO0FBQ2pCLGVBQVc7QUFETSxDQUFkO0FBR0EsSUFBTSw4REFBMkIsU0FBM0Isd0JBQTJCLENBQUMsR0FBRDtBQUFBLFdBQVMsVUFBQyxPQUFEO0FBQUEsZUFBYSxVQUFDLE1BQUQsRUFBWTtBQUN0RSw2QkFBTyxHQUFQLENBQVcsT0FBTyxTQUFsQixFQUE2QixHQUE3QixFQUFrQyxPQUFsQztBQUNILFNBRmdEO0FBQUEsS0FBVDtBQUFBLENBQWpDO0FBR0EsSUFBTSxrRUFBNkIsU0FBN0IsMEJBQTZCLENBQUMsTUFBRCxFQUFTLEdBQVQ7QUFBQSxXQUFpQixpQkFBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixpQkFBTyxHQUFQLENBQVcsT0FBTyxTQUFsQixFQUE2QixHQUE3QixDQUFsQixDQUFqQjtBQUFBLENBQW5DIiwiZmlsZSI6ImRlY29yYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY29uc3QgRU5VTVMgPSB7XHJcbiAgICBDT01QT05FTlQ6ICdDb3JlLkNvbXBvbmVudCdcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb3RvdHlwZURlY29yYXRvciA9IChrZXkpID0+IChvcHRpb25zKSA9PiAodGFyZ2V0KSA9PiB7XHJcbiAgICBsb2Rhc2guc2V0KHRhcmdldC5wcm90b3R5cGUsIGtleSwgb3B0aW9ucyk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRQcm90b3R5cGVEZWNvcmF0b3JWYWx1ZSA9ICh0YXJnZXQsIGtleSkgPT4gbG9kYXNoLmV4dGVuZCh7fSwgbG9kYXNoLmdldCh0YXJnZXQucHJvdG90eXBlLCBrZXkpKTtcclxuIl19