'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildComponentConfig = exports.createFolderNameRegistry = undefined;

var _decorators = require('./decorators.js');

/**
 * Creates a registry that builds the name from folders
 * @param prettyTypeName - The pretty type name, only used for debugging purposes
 * @param pathTransformers Functions that take the path and transform it into a name
 * @param valueValidators Functions that check the values against best practices
 * @param registration Callback that will be invoked with the application, the transformed name and the value of the file
 * @returns {Function}
 */
var createFolderNameRegistry = exports.createFolderNameRegistry = function createFolderNameRegistry(prettyTypeName) {
    var pathTransformers = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var valueValidators = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var registration = arguments[3];

    return function (context, _ref) {
        var application = _ref.application;
        var warn = _ref.warn;
        var debug = _ref.debug;
        var info = _ref.info;
        var error = _ref.error;

        context.keys().forEach(function (path) {
            var transformedName = pathTransformers.reduce(function (original, transformer) {
                return transformer(original);
            }, path);
            var value = context(path).default;

            valueValidators.forEach(function (validator) {
                return validator({ path: path, name: transformedName, value: value }, { warn: warn, debug: debug, info: info, error: error });
            });

            debug('Registering \'' + prettyTypeName + '\' from \'' + path + '\' with transformed name \'' + transformedName + '\'');
            registration(application, transformedName, value);
        });
    };
};

/**
 * Builds a component config object from the component
 * @param component
 * @returns {Object}
 */
var buildComponentConfig = exports.buildComponentConfig = function buildComponentConfig(component) {
    var config = (0, _decorators.getPrototypeDecoratorValue)(component, _decorators.ENUMS.COMPONENT);
    config.controller = component;
    config.controllerAs = 'vm';
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3JlZ2lzdHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7QUFRTyxJQUFNLDhEQUEyQixTQUEzQix3QkFBMkIsQ0FBQyxjQUFELEVBQStFO0FBQUEsUUFBOUQsZ0JBQThELHlEQUEzQyxFQUEyQztBQUFBLFFBQXZDLGVBQXVDLHlEQUFyQixFQUFxQjtBQUFBLFFBQWpCLFlBQWlCOztBQUNuSCxXQUFPLFVBQUMsT0FBRCxRQUF3RDtBQUFBLFlBQTVDLFdBQTRDLFFBQTVDLFdBQTRDO0FBQUEsWUFBL0IsSUFBK0IsUUFBL0IsSUFBK0I7QUFBQSxZQUF6QixLQUF5QixRQUF6QixLQUF5QjtBQUFBLFlBQWxCLElBQWtCLFFBQWxCLElBQWtCO0FBQUEsWUFBWixLQUFZLFFBQVosS0FBWTs7QUFDM0QsZ0JBQ0ssSUFETCxHQUVLLE9BRkwsQ0FFYSxVQUFDLElBQUQsRUFBVTtBQUNmLGdCQUFNLGtCQUFrQixpQkFBaUIsTUFBakIsQ0FBd0IsVUFBQyxRQUFELEVBQVcsV0FBWDtBQUFBLHVCQUEyQixZQUFZLFFBQVosQ0FBM0I7QUFBQSxhQUF4QixFQUEwRSxJQUExRSxDQUF4QjtBQUNBLGdCQUFNLFFBQVEsUUFBUSxJQUFSLEVBQWMsT0FBNUI7O0FBRUEsNEJBQWdCLE9BQWhCLENBQXdCLFVBQUMsU0FBRDtBQUFBLHVCQUFlLFVBQVUsRUFBRSxVQUFGLEVBQVEsTUFBTSxlQUFkLEVBQStCLFlBQS9CLEVBQVYsRUFBa0QsRUFBRSxVQUFGLEVBQVEsWUFBUixFQUFlLFVBQWYsRUFBcUIsWUFBckIsRUFBbEQsQ0FBZjtBQUFBLGFBQXhCOztBQUVBLHFDQUFzQixjQUF0QixrQkFBK0MsSUFBL0MsbUNBQStFLGVBQS9FO0FBQ0EseUJBQWEsV0FBYixFQUEwQixlQUExQixFQUEyQyxLQUEzQztBQUNILFNBVkw7QUFXSCxLQVpEO0FBYUgsQ0FkTTs7QUFnQlA7Ozs7O0FBS08sSUFBTSxzREFBdUIsU0FBdkIsb0JBQXVCLENBQUMsU0FBRCxFQUFlO0FBQy9DLFFBQU0sU0FBUyw0Q0FBMkIsU0FBM0IsRUFBc0Msa0JBQU0sU0FBNUMsQ0FBZjtBQUNBLFdBQU8sVUFBUCxHQUFvQixTQUFwQjtBQUNBLFdBQU8sWUFBUCxHQUFzQixJQUF0QjtBQUNBLFdBQU8sTUFBUDtBQUNILENBTE0iLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm90b3R5cGVEZWNvcmF0b3JWYWx1ZSwgRU5VTVMgfSBmcm9tICcuL2RlY29yYXRvcnMuanMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSByZWdpc3RyeSB0aGF0IGJ1aWxkcyB0aGUgbmFtZSBmcm9tIGZvbGRlcnNcclxuICogQHBhcmFtIHByZXR0eVR5cGVOYW1lIC0gVGhlIHByZXR0eSB0eXBlIG5hbWUsIG9ubHkgdXNlZCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXHJcbiAqIEBwYXJhbSBwYXRoVHJhbnNmb3JtZXJzIEZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIHBhdGggYW5kIHRyYW5zZm9ybSBpdCBpbnRvIGEgbmFtZVxyXG4gKiBAcGFyYW0gdmFsdWVWYWxpZGF0b3JzIEZ1bmN0aW9ucyB0aGF0IGNoZWNrIHRoZSB2YWx1ZXMgYWdhaW5zdCBiZXN0IHByYWN0aWNlc1xyXG4gKiBAcGFyYW0gcmVnaXN0cmF0aW9uIENhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIGFwcGxpY2F0aW9uLCB0aGUgdHJhbnNmb3JtZWQgbmFtZSBhbmQgdGhlIHZhbHVlIG9mIHRoZSBmaWxlXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXJOYW1lUmVnaXN0cnkgPSAocHJldHR5VHlwZU5hbWUsIHBhdGhUcmFuc2Zvcm1lcnMgPSBbXSwgdmFsdWVWYWxpZGF0b3JzID0gW10sIHJlZ2lzdHJhdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIChjb250ZXh0LCB7IGFwcGxpY2F0aW9uLCB3YXJuLCBkZWJ1ZywgaW5mbywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgLmtleXMoKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWROYW1lID0gcGF0aFRyYW5zZm9ybWVycy5yZWR1Y2UoKG9yaWdpbmFsLCB0cmFuc2Zvcm1lcikgPT4gdHJhbnNmb3JtZXIob3JpZ2luYWwpLCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dChwYXRoKS5kZWZhdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlVmFsaWRhdG9ycy5mb3JFYWNoKCh2YWxpZGF0b3IpID0+IHZhbGlkYXRvcih7IHBhdGgsIG5hbWU6IHRyYW5zZm9ybWVkTmFtZSwgdmFsdWUgfSwgeyB3YXJuLCBkZWJ1ZywgaW5mbywgZXJyb3IgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlYnVnKGBSZWdpc3RlcmluZyAnJHtwcmV0dHlUeXBlTmFtZX0nIGZyb20gJyR7cGF0aH0nIHdpdGggdHJhbnNmb3JtZWQgbmFtZSAnJHt0cmFuc2Zvcm1lZE5hbWV9J2ApO1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uKGFwcGxpY2F0aW9uLCB0cmFuc2Zvcm1lZE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEJ1aWxkcyBhIGNvbXBvbmVudCBjb25maWcgb2JqZWN0IGZyb20gdGhlIGNvbXBvbmVudFxyXG4gKiBAcGFyYW0gY29tcG9uZW50XHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYnVpbGRDb21wb25lbnRDb25maWcgPSAoY29tcG9uZW50KSA9PiB7XHJcbiAgICBjb25zdCBjb25maWcgPSBnZXRQcm90b3R5cGVEZWNvcmF0b3JWYWx1ZShjb21wb25lbnQsIEVOVU1TLkNPTVBPTkVOVCk7XHJcbiAgICBjb25maWcuY29udHJvbGxlciA9IGNvbXBvbmVudDtcclxuICAgIGNvbmZpZy5jb250cm9sbGVyQXMgPSAndm0nO1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxufTtcclxuIl19