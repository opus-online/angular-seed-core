'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.componentConfigurationValidator = exports.stateConfigurationValidator = exports.layoutConfigurationValidator = exports.indexFileValidator = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('./path.js');

var _decorators = require('./decorators.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the file is named index.js
 */
var indexFileValidator = exports.indexFileValidator = function indexFileValidator(_ref, _ref2) {
    var path = _ref.path;
    var warn = _ref2.warn;

    if ((0, _path.resolveFileName)(path) !== 'index') {
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

    if (value.controller !== undefined) {
        warn('Layout \'' + name + '\' has a controller attribute. This is probably an error.');
    }
    if (value.controllerAs !== undefined) {
        warn('Layout \'' + name + '\' has a controllerAs attribute. This is probably an error.');
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3ZhbGlkYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFFQTs7O0FBR08sSUFBTSxrREFBcUIsU0FBckIsa0JBQXFCLGNBQXdCO0FBQUEsUUFBckIsSUFBcUIsUUFBckIsSUFBcUI7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUN0RCxRQUFJLDJCQUFnQixJQUFoQixNQUEwQixPQUE5QixFQUF1QztBQUNuQyxhQUFRLElBQVI7QUFDSDtBQUNKLENBSk07O0FBTVA7Ozs7OztBQU1PLElBQU0sc0VBQStCLFNBQS9CLDRCQUErQixlQUErQjtBQUFBLFFBQTVCLElBQTRCLFNBQTVCLElBQTRCO0FBQUEsUUFBdEIsS0FBc0IsU0FBdEIsS0FBc0I7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUN2RSxRQUFJLE1BQU0sVUFBTixLQUFxQixTQUF6QixFQUFvQztBQUNoQywyQkFBZ0IsSUFBaEI7QUFDSDtBQUNELFFBQUksTUFBTSxZQUFOLEtBQXVCLFNBQTNCLEVBQXNDO0FBQ2xDLDJCQUFnQixJQUFoQjtBQUNIO0FBQ0QsUUFBSSxNQUFNLFFBQU4sS0FBbUIsU0FBdkIsRUFBa0M7QUFDOUIsMkJBQWdCLElBQWhCO0FBQ0g7QUFDRCxRQUFJLE1BQU0sR0FBTixLQUFjLFNBQWxCLEVBQTZCO0FBQ3pCLDJCQUFnQixJQUFoQjtBQUNIO0FBQ0QsUUFBSSxNQUFNLFFBQU4sS0FBbUIsU0FBdkIsRUFBa0M7QUFDOUIsMkJBQWdCLElBQWhCO0FBQ0g7QUFDSixDQWhCTTs7QUFrQlA7Ozs7OztBQU1PLElBQU0sb0VBQThCLFNBQTlCLDJCQUE4QixlQUErQjtBQUFBLFFBQTVCLElBQTRCLFNBQTVCLElBQTRCO0FBQUEsUUFBdEIsS0FBc0IsU0FBdEIsS0FBc0I7QUFBQSxRQUFYLElBQVcsU0FBWCxJQUFXOztBQUN0RSxRQUFNLFFBQVEsS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFkOztBQUVBLFFBQUksTUFBTSxNQUFOLEtBQWlCLFNBQWpCLElBQThCLE1BQU0sTUFBTixHQUFlLENBQWpELEVBQW9EO0FBQ2hELFlBQU0sU0FBUyxNQUFNLE1BQU0sTUFBTixHQUFlLENBQXJCLENBQWY7QUFDQSwwQkFBZSxJQUFmLCtFQUEyRixNQUEzRjtBQUNIO0FBQ0QsUUFBSSxNQUFNLFFBQU4sS0FBbUIsU0FBdkIsRUFBa0M7QUFDOUIsMEJBQWUsSUFBZjtBQUNIO0FBQ0osQ0FWTTs7QUFZQSxJQUFNLDRFQUFrQyxTQUFsQywrQkFBa0MsZUFBK0I7QUFBQSxRQUE1QixJQUE0QixTQUE1QixJQUE0QjtBQUFBLFFBQXRCLEtBQXNCLFNBQXRCLEtBQXNCO0FBQUEsUUFBWCxJQUFXLFNBQVgsSUFBVzs7QUFDMUUsUUFBTSxTQUFTLDRDQUEyQixLQUEzQixFQUFrQyxrQkFBTSxTQUF4QyxDQUFmO0FBQ0EsUUFBTSxhQUFhLGlCQUFPLFNBQVAsQ0FBaUIsSUFBakIsQ0FBbkI7O0FBRUEsUUFBSSxPQUFPLFVBQVAsS0FBc0IsU0FBMUIsRUFBcUM7QUFDakMsOEJBQW1CLFVBQW5CO0FBQ0g7QUFDRCxRQUFJLE9BQU8sWUFBUCxLQUF3QixTQUE1QixFQUF1QztBQUNuQyw4QkFBbUIsVUFBbkI7QUFDSDtBQUNELFFBQUksT0FBTyxRQUFQLEtBQW9CLFNBQXhCLEVBQW1DO0FBQy9CLDhCQUFtQixVQUFuQjtBQUNIO0FBQ0osQ0FiTSIsImZpbGUiOiJ2YWxpZGF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgcmVzb2x2ZUZpbGVOYW1lIH0gZnJvbSAnLi9wYXRoLmpzJztcclxuaW1wb3J0IHsgZ2V0UHJvdG90eXBlRGVjb3JhdG9yVmFsdWUsIEVOVU1TIH0gZnJvbSAnLi9kZWNvcmF0b3JzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIGZpbGUgaXMgbmFtZWQgaW5kZXguanNcclxuICovXHJcbmV4cG9ydCBjb25zdCBpbmRleEZpbGVWYWxpZGF0b3IgPSAoeyBwYXRoIH0sIHsgd2FybiB9KSA9PiB7XHJcbiAgICBpZiAocmVzb2x2ZUZpbGVOYW1lKHBhdGgpICE9PSAnaW5kZXgnKSB7XHJcbiAgICAgICAgd2FybihgJHtwYXRofSBzaG91bGQgYmUgaW4gYSBmaWxlIGluZGV4LmpzIGJ5IGNvbnZlbnRpb24uYCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogTGF5b3V0IHNwZWNpZmljIHZhbGlkYXRvclxyXG4gKiBAcGFyYW0gbmFtZVxyXG4gKiBAcGFyYW0gdmFsdWVcclxuICogQHBhcmFtIHdhcm5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsYXlvdXRDb25maWd1cmF0aW9uVmFsaWRhdG9yID0gKHsgbmFtZSwgdmFsdWUgfSwgeyB3YXJuIH0pID0+IHtcclxuICAgIGlmICh2YWx1ZS5jb250cm9sbGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YXJuKGBMYXlvdXQgJyR7bmFtZX0nIGhhcyBhIGNvbnRyb2xsZXIgYXR0cmlidXRlLiBUaGlzIGlzIHByb2JhYmx5IGFuIGVycm9yLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmNvbnRyb2xsZXJBcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgTGF5b3V0ICcke25hbWV9JyBoYXMgYSBjb250cm9sbGVyQXMgYXR0cmlidXRlLiBUaGlzIGlzIHByb2JhYmx5IGFuIGVycm9yLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmFic3RyYWN0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YXJuKGBMYXlvdXQgJyR7bmFtZX0nIHdpbGwgYmUgZm9yY2VkIHRvIGFic3RyYWN0LmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnVybCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgTGF5b3V0ICcke25hbWV9JyBoYXMgYW4gdXJsIHByb3BlcnR5LiBUaGlzIGlzIHByb2JhYmx5IGFuIGVycm9yLmApO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLnRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YXJuKGBMYXlvdXQgJyR7bmFtZX0nIGRvZXMgbm90IGhhdmUgYSB0ZW1wbGF0ZSBwcm9wZXJ0eS4gVGhpcyBpcyBwcm9iYWJseSBhbiBlcnJvci5gKTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBTdGF0ZSBzcGVjaWZpYyB2YWxpZGF0b3IuXHJcbiAqIEBwYXJhbSBuYW1lXHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcGFyYW0gd2FyblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0YXRlQ29uZmlndXJhdGlvblZhbGlkYXRvciA9ICh7IG5hbWUsIHZhbHVlIH0sIHsgd2FybiB9KSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IG5hbWUuc3BsaXQoJy4nKTtcclxuXHJcbiAgICBpZiAodmFsdWUucGFyZW50ICE9PSB1bmRlZmluZWQgJiYgc3RhdGUubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHN0YXRlW3N0YXRlLmxlbmd0aCAtIDJdO1xyXG4gICAgICAgIHdhcm4oYFN0YXRlICcke25hbWV9JyBoYXMgYSBwYXJlbnQgcHJvcGVydHkgd2hpbGUgYWxyZWFkeSBiZWxvbmdpbmcgdG8gdGhlIHBhcmVudCBzdGF0ZSAnJHtwYXJlbnR9Jy4gVGhpcyBpcyBwcm9iYWJseSBhbiBlcnJvci5gKTtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS50ZW1wbGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgd2FybihgU3RhdGUgJyR7bmFtZX0nIGRvZXMgbm90IGhhdmUgYSB0ZW1wbGF0ZS4gVGhpcyBpcyBwcm9iYWJseSBhbiBlcnJvci5gKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb21wb25lbnRDb25maWd1cmF0aW9uVmFsaWRhdG9yID0gKHsgbmFtZSwgdmFsdWUgfSwgeyB3YXJuIH0pID0+IHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IGdldFByb3RvdHlwZURlY29yYXRvclZhbHVlKHZhbHVlLCBFTlVNUy5DT01QT05FTlQpO1xyXG4gICAgY29uc3QgcHJldHR5TmFtZSA9IGxvZGFzaC5rZWJhYkNhc2UobmFtZSk7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5jb250cm9sbGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YXJuKGBDb21wb25lbnQgJyR7cHJldHR5TmFtZX0nIGhhcyBhIGNvbnRyb2xsZXIgcHJvcGVydHkuIFRoaXMgd2lsbCBiZSBvdmVyd3JpdHRlbi5gKTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuY29udHJvbGxlckFzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YXJuKGBDb21wb25lbnQgJyR7cHJldHR5TmFtZX0nIGhhcyBhIGNvbnRyb2xsZXJBcyBwcm9wZXJ0eS4gVGhpcyB3aWxsIGJlIG92ZXJ3cml0dGVuIHRvICd2bScuYCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLnRlbXBsYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3YXJuKGBDb21wb25lbnQgJyR7cHJldHR5TmFtZX0nIGRvZXMgbm90IGhhdmUgYSB0ZW1wbGF0ZSBwcm9wZXJ0eS4gVGhpcyBpcyBwcm9iYWJseSBhbiBlcnJvci5gKTtcclxuICAgIH1cclxufTtcclxuIl19