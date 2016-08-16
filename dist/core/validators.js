'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentConfigurationValidator = exports.stateConfigurationValidator = exports.layoutConfigurationValidator = exports.indexFileValidator = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require('./util.js');

var _decorators = require('./decorators.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the file is named index.js
 */
var indexFileValidator = exports.indexFileValidator = function indexFileValidator(_ref, _ref2) {
    var path = _ref.path;
    var warn = _ref2.warn;

    if ((0, _util.resolveFileName)(path) !== 'index') {
        warn(path + ' should be in a file index.js by convention.');
    }
};

/**
 * Layout specific validator
 * @param name
 * @param value
 * @param warn
 */
var layoutConfigurationValidator = exports.layoutConfigurationValidator = function layoutConfigurationValidator(_ref3, _ref4) {
    var name = _ref3.name;
    var value = _ref3.value;
    var warn = _ref4.warn;

    if (value.abstract !== undefined) {
        warn('Layout \'' + name + '\' will be forced to abstract.');
    }
    if (value.url !== undefined) {
        warn('Layout \'' + name + '\' has an url property. This is probably an error.');
    }
    if (value.template === undefined) {
        warn('Layout \'' + name + '\' does not have a template property. This is probably an error.');
    }
};

/**
 * State specific validator.
 * @param name
 * @param value
 * @param warn
 */
var stateConfigurationValidator = exports.stateConfigurationValidator = function stateConfigurationValidator(_ref5, _ref6) {
    var name = _ref5.name;
    var value = _ref5.value;
    var warn = _ref6.warn;

    var state = name.split('.');

    if (value.parent !== undefined && state.length > 1) {
        var parent = state[state.length - 2];
        warn('State \'' + name + '\' has a parent property while already belonging to the parent state \'' + parent + '\'. This is probably an error.');
    }
    if (value.template === undefined) {
        warn('State \'' + name + '\' does not have a template. This is probably an error.');
    }
};

var componentConfigurationValidator = exports.componentConfigurationValidator = function componentConfigurationValidator(_ref7, _ref8) {
    var name = _ref7.name;
    var value = _ref7.value;
    var warn = _ref8.warn;

    var config = (0, _decorators.getPrototypeDecoratorValue)(value, _decorators.ENUMS.COMPONENT);
    var prettyName = _lodash2.default.kebabCase(name);

    if (config.controller !== undefined) {
        warn('Component \'' + prettyName + '\' has a controller property. This will be overwritten.');
    }
    if (config.controllerAs !== undefined) {
        warn('Component \'' + prettyName + '\' has a controllerAs property. This will be overwritten to \'vm\'.');
    }
    if (config.template === undefined) {
        warn('Component \'' + prettyName + '\' does not have a template property. This is probably an error.');
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3ZhbGlkYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFFQTs7O0FBR08sSUFBTSxrREFBcUIsU0FBckIsa0JBQXFCLGNBQXdCO0FBQUEsUUFBckIsSUFBcUIsUUFBckIsSUFBcUI7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUN0RCxRQUFJLDJCQUFnQixJQUFoQixNQUEwQixPQUE5QixFQUF1QztBQUNuQyxhQUFRLElBQVI7QUFDSDtBQUNKLENBSk07O0FBTVA7Ozs7OztBQU1PLElBQU0sc0VBQStCLFNBQS9CLDRCQUErQixlQUErQjtBQUFBLFFBQTVCLElBQTRCLFNBQTVCLElBQTRCO0FBQUEsUUFBdEIsS0FBc0IsU0FBdEIsS0FBc0I7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUN2RSxRQUFJLE1BQU0sUUFBTixLQUFtQixTQUF2QixFQUFrQztBQUM5QiwyQkFBZ0IsSUFBaEI7QUFDSDtBQUNELFFBQUksTUFBTSxHQUFOLEtBQWMsU0FBbEIsRUFBNkI7QUFDekIsMkJBQWdCLElBQWhCO0FBQ0g7QUFDRCxRQUFJLE1BQU0sUUFBTixLQUFtQixTQUF2QixFQUFrQztBQUM5QiwyQkFBZ0IsSUFBaEI7QUFDSDtBQUNKLENBVk07O0FBWVA7Ozs7OztBQU1PLElBQU0sb0VBQThCLFNBQTlCLDJCQUE4QixlQUErQjtBQUFBLFFBQTVCLElBQTRCLFNBQTVCLElBQTRCO0FBQUEsUUFBdEIsS0FBc0IsU0FBdEIsS0FBc0I7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUN0RSxRQUFNLFFBQVEsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFkOztBQUVBLFFBQUksTUFBTSxNQUFOLEtBQWlCLFNBQWpCLElBQThCLE1BQU0sTUFBTixHQUFlLENBQWpELEVBQW9EO0FBQ2hELFlBQU0sU0FBUyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQXJCLENBQWY7QUFDQSwwQkFBZSxJQUFmLCtFQUEyRixNQUEzRjtBQUNIO0FBQ0QsUUFBSSxNQUFNLFFBQU4sS0FBbUIsU0FBdkIsRUFBa0M7QUFDOUIsMEJBQWUsSUFBZjtBQUNIO0FBQ0osQ0FWTTs7QUFZQSxJQUFNLDRFQUFrQyxTQUFsQywrQkFBa0MsZUFBK0I7QUFBQSxRQUE1QixJQUE0QixTQUE1QixJQUE0QjtBQUFBLFFBQXRCLEtBQXNCLFNBQXRCLEtBQXNCO0FBQUEsUUFBWCxJQUFXLFNBQVgsSUFBVzs7QUFDMUUsUUFBTSxTQUFTLDRDQUEyQixLQUEzQixFQUFrQyxrQkFBTSxTQUF4QyxDQUFmO0FBQ0EsUUFBTSxhQUFhLGlCQUFPLFNBQVAsQ0FBaUIsSUFBakIsQ0FBbkI7O0FBRUEsUUFBSSxPQUFPLFVBQVAsS0FBc0IsU0FBMUIsRUFBcUM7QUFDakMsOEJBQW1CLFVBQW5CO0FBQ0g7QUFDRCxRQUFJLE9BQU8sWUFBUCxLQUF3QixTQUE1QixFQUF1QztBQUNuQyw4QkFBbUIsVUFBbkI7QUFDSDtBQUNELFFBQUksT0FBTyxRQUFQLEtBQW9CLFNBQXhCLEVBQW1DO0FBQy9CLDhCQUFtQixVQUFuQjtBQUNIO0FBQ0osQ0FiTSIsImZpbGUiOiJ2YWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgcmVzb2x2ZUZpbGVOYW1lIH0gZnJvbSAnLi91dGlsLmpzJztcclxuaW1wb3J0IHsgZ2V0UHJvdG90eXBlRGVjb3JhdG9yVmFsdWUsIEVOVU1TIH0gZnJvbSAnLi9kZWNvcmF0b3JzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIGZpbGUgaXMgbmFtZWQgaW5kZXguanNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbmRleEZpbGVWYWxpZGF0b3IgPSAoeyBwYXRoIH0sIHsgd2FybiB9KSA9PiB7XHJcbiAgICBpZiAocmVzb2x2ZUZpbGVOYW1lKHBhdGgpICE9PSAnaW5kZXgnKSB7XHJcbiAgICAgICAgd2FybihgJHtwYXRofSBzaG91bGQgYmUgaW4gYSBmaWxlIGluZGV4LmpzIGJ5IGNvbnZlbnRpb24uYCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogTGF5b3V0IHNwZWNpZmljIHZhbGlkYXRvclxyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHdhcm5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRDb25maWd1cmF0aW9uVmFsaWRhdG9yID0gKHsgbmFtZSwgdmFsdWUgfSwgeyB3YXJuIH0pID0+IHtcclxuICAgIGlmICh2YWx1ZS5hYnN0cmFjdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgTGF5b3V0ICcke25hbWV9JyB3aWxsIGJlIGZvcmNlZCB0byBhYnN0cmFjdC5gKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS51cmwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHdhcm4oYExheW91dCAnJHtuYW1lfScgaGFzIGFuIHVybCBwcm9wZXJ0eS4gVGhpcyBpcyBwcm9iYWJseSBhbiBlcnJvci5gKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS50ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgTGF5b3V0ICcke25hbWV9JyBkb2VzIG5vdCBoYXZlIGEgdGVtcGxhdGUgcHJvcGVydHkuIFRoaXMgaXMgcHJvYmFibHkgYW4gZXJyb3IuYCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogU3RhdGUgc3BlY2lmaWMgdmFsaWRhdG9yLlxyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHdhcm5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzdGF0ZUNvbmZpZ3VyYXRpb25WYWxpZGF0b3IgPSAoeyBuYW1lLCB2YWx1ZSB9LCB7IHdhcm4gfSkgPT4ge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBuYW1lLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgaWYgKHZhbHVlLnBhcmVudCAhPT0gdW5kZWZpbmVkICYmIHN0YXRlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSBzdGF0ZVtzdGF0ZS5sZW5ndGggLSAyXTtcclxuICAgICAgICB3YXJuKGBTdGF0ZSAnJHtuYW1lfScgaGFzIGEgcGFyZW50IHByb3BlcnR5IHdoaWxlIGFscmVhZHkgYmVsb25naW5nIHRvIHRoZSBwYXJlbnQgc3RhdGUgJyR7cGFyZW50fScuIFRoaXMgaXMgcHJvYmFibHkgYW4gZXJyb3IuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUudGVtcGxhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHdhcm4oYFN0YXRlICcke25hbWV9JyBkb2VzIG5vdCBoYXZlIGEgdGVtcGxhdGUuIFRoaXMgaXMgcHJvYmFibHkgYW4gZXJyb3IuYCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29tcG9uZW50Q29uZmlndXJhdGlvblZhbGlkYXRvciA9ICh7IG5hbWUsIHZhbHVlIH0sIHsgd2FybiB9KSA9PiB7XHJcbiAgICBjb25zdCBjb25maWcgPSBnZXRQcm90b3R5cGVEZWNvcmF0b3JWYWx1ZSh2YWx1ZSwgRU5VTVMuQ09NUE9ORU5UKTtcclxuICAgIGNvbnN0IHByZXR0eU5hbWUgPSBsb2Rhc2gua2ViYWJDYXNlKG5hbWUpO1xyXG5cclxuICAgIGlmIChjb25maWcuY29udHJvbGxlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgQ29tcG9uZW50ICcke3ByZXR0eU5hbWV9JyBoYXMgYSBjb250cm9sbGVyIHByb3BlcnR5LiBUaGlzIHdpbGwgYmUgb3ZlcndyaXR0ZW4uYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmNvbnRyb2xsZXJBcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgQ29tcG9uZW50ICcke3ByZXR0eU5hbWV9JyBoYXMgYSBjb250cm9sbGVyQXMgcHJvcGVydHkuIFRoaXMgd2lsbCBiZSBvdmVyd3JpdHRlbiB0byAndm0nLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy50ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgQ29tcG9uZW50ICcke3ByZXR0eU5hbWV9JyBkb2VzIG5vdCBoYXZlIGEgdGVtcGxhdGUgcHJvcGVydHkuIFRoaXMgaXMgcHJvYmFibHkgYW4gZXJyb3IuYCk7XHJcbiAgICB9XHJcbn07XHJcbiJdfQ==