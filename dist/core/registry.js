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
 * @param valueTransformers Functions that will take the value and transform it (e.g. build a component from what we have or default some configuration values)
 * @param registration Callback that will be invoked with the application, the transformed name and the value of the file
 * @returns {Function}
 */
var createFolderNameRegistry = exports.createFolderNameRegistry = function createFolderNameRegistry(prettyTypeName) {
    var pathTransformers = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var valueValidators = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
    var valueTransformers = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
    var registration = arguments[4];

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
            value = valueTransformers.reduce(function (original, transformer) {
                return transformer(original);
            }, value);

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
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3JlZ2lzdHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7Ozs7O0FBU08sSUFBTSw4REFBMkIsU0FBM0Isd0JBQTJCLENBQUMsY0FBRCxFQUF1RztBQUFBLFFBQXRGLGdCQUFzRix5REFBbkUsRUFBbUU7QUFBQSxRQUEvRCxlQUErRCx5REFBN0MsRUFBNkM7QUFBQSxRQUF6QyxpQkFBeUMseURBQXJCLEVBQXFCO0FBQUEsUUFBakIsWUFBaUI7O0FBQzNJLFdBQU8sVUFBQyxPQUFELFFBQXdEO0FBQUEsWUFBNUMsV0FBNEMsUUFBNUMsV0FBNEM7QUFBQSxZQUEvQixJQUErQixRQUEvQixJQUErQjtBQUFBLFlBQXpCLEtBQXlCLFFBQXpCLEtBQXlCO0FBQUEsWUFBbEIsSUFBa0IsUUFBbEIsSUFBa0I7QUFBQSxZQUFaLEtBQVksUUFBWixLQUFZOztBQUMzRCxnQkFDSyxJQURMLEdBRUssT0FGTCxDQUVhLFVBQUMsSUFBRCxFQUFVO0FBQ2YsZ0JBQU0sa0JBQWtCLGlCQUFpQixNQUFqQixDQUF3QixVQUFDLFFBQUQsRUFBVyxXQUFYO0FBQUEsdUJBQTJCLFlBQVksUUFBWixDQUEzQjtBQUFBLGFBQXhCLEVBQTBFLElBQTFFLENBQXhCO0FBQ0EsZ0JBQUksUUFBUSxRQUFRLElBQVIsRUFBYyxPQUExQjs7QUFFQSw0QkFBZ0IsT0FBaEIsQ0FBd0IsVUFBQyxTQUFEO0FBQUEsdUJBQWUsVUFBVSxFQUFFLFVBQUYsRUFBUSxNQUFNLGVBQWQsRUFBK0IsWUFBL0IsRUFBVixFQUFrRCxFQUFFLFVBQUYsRUFBUSxZQUFSLEVBQWUsVUFBZixFQUFxQixZQUFyQixFQUFsRCxDQUFmO0FBQUEsYUFBeEI7QUFDQSxvQkFBUSxrQkFBa0IsTUFBbEIsQ0FBeUIsVUFBQyxRQUFELEVBQVcsV0FBWDtBQUFBLHVCQUEyQixZQUFZLFFBQVosQ0FBM0I7QUFBQSxhQUF6QixFQUEyRSxLQUEzRSxDQUFSOztBQUVBLHFDQUFzQixjQUF0QixrQkFBK0MsSUFBL0MsbUNBQStFLGVBQS9FO0FBQ0EseUJBQWEsV0FBYixFQUEwQixlQUExQixFQUEyQyxLQUEzQztBQUNILFNBWEw7QUFZSCxLQWJEO0FBY0gsQ0FmTTs7QUFpQlA7Ozs7O0FBS08sSUFBTSxzREFBdUIsU0FBdkIsb0JBQXVCLENBQUMsU0FBRCxFQUFlO0FBQy9DLFFBQU0sU0FBUyw0Q0FBMkIsU0FBM0IsRUFBc0Msa0JBQU0sU0FBNUMsQ0FBZjtBQUNBLFdBQU8sVUFBUCxHQUFvQixTQUFwQjtBQUNBLFdBQU8sTUFBUDtBQUNILENBSk0iLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm90b3R5cGVEZWNvcmF0b3JWYWx1ZSwgRU5VTVMgfSBmcm9tICcuL2RlY29yYXRvcnMuanMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSByZWdpc3RyeSB0aGF0IGJ1aWxkcyB0aGUgbmFtZSBmcm9tIGZvbGRlcnNcclxuICogQHBhcmFtIHByZXR0eVR5cGVOYW1lIC0gVGhlIHByZXR0eSB0eXBlIG5hbWUsIG9ubHkgdXNlZCBmb3IgZGVidWdnaW5nIHB1cnBvc2VzXHJcbiAqIEBwYXJhbSBwYXRoVHJhbnNmb3JtZXJzIEZ1bmN0aW9ucyB0aGF0IHRha2UgdGhlIHBhdGggYW5kIHRyYW5zZm9ybSBpdCBpbnRvIGEgbmFtZVxyXG4gKiBAcGFyYW0gdmFsdWVWYWxpZGF0b3JzIEZ1bmN0aW9ucyB0aGF0IGNoZWNrIHRoZSB2YWx1ZXMgYWdhaW5zdCBiZXN0IHByYWN0aWNlc1xyXG4gKiBAcGFyYW0gdmFsdWVUcmFuc2Zvcm1lcnMgRnVuY3Rpb25zIHRoYXQgd2lsbCB0YWtlIHRoZSB2YWx1ZSBhbmQgdHJhbnNmb3JtIGl0IChlLmcuIGJ1aWxkIGEgY29tcG9uZW50IGZyb20gd2hhdCB3ZSBoYXZlIG9yIGRlZmF1bHQgc29tZSBjb25maWd1cmF0aW9uIHZhbHVlcylcclxuICogQHBhcmFtIHJlZ2lzdHJhdGlvbiBDYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBhcHBsaWNhdGlvbiwgdGhlIHRyYW5zZm9ybWVkIG5hbWUgYW5kIHRoZSB2YWx1ZSBvZiB0aGUgZmlsZVxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlRm9sZGVyTmFtZVJlZ2lzdHJ5ID0gKHByZXR0eVR5cGVOYW1lLCBwYXRoVHJhbnNmb3JtZXJzID0gW10sIHZhbHVlVmFsaWRhdG9ycyA9IFtdLCB2YWx1ZVRyYW5zZm9ybWVycyA9IFtdLCByZWdpc3RyYXRpb24pID0+IHtcclxuICAgIHJldHVybiAoY29udGV4dCwgeyBhcHBsaWNhdGlvbiwgd2FybiwgZGVidWcsIGluZm8sIGVycm9yIH0pID0+IHtcclxuICAgICAgICBjb250ZXh0XHJcbiAgICAgICAgICAgIC5rZXlzKClcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkTmFtZSA9IHBhdGhUcmFuc2Zvcm1lcnMucmVkdWNlKChvcmlnaW5hbCwgdHJhbnNmb3JtZXIpID0+IHRyYW5zZm9ybWVyKG9yaWdpbmFsKSwgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBjb250ZXh0KHBhdGgpLmRlZmF1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFsdWVWYWxpZGF0b3JzLmZvckVhY2goKHZhbGlkYXRvcikgPT4gdmFsaWRhdG9yKHsgcGF0aCwgbmFtZTogdHJhbnNmb3JtZWROYW1lLCB2YWx1ZSB9LCB7IHdhcm4sIGRlYnVnLCBpbmZvLCBlcnJvciB9KSk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXJzLnJlZHVjZSgob3JpZ2luYWwsIHRyYW5zZm9ybWVyKSA9PiB0cmFuc2Zvcm1lcihvcmlnaW5hbCksIHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWJ1ZyhgUmVnaXN0ZXJpbmcgJyR7cHJldHR5VHlwZU5hbWV9JyBmcm9tICcke3BhdGh9JyB3aXRoIHRyYW5zZm9ybWVkIG5hbWUgJyR7dHJhbnNmb3JtZWROYW1lfSdgKTtcclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbihhcHBsaWNhdGlvbiwgdHJhbnNmb3JtZWROYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZHMgYSBjb21wb25lbnQgY29uZmlnIG9iamVjdCBmcm9tIHRoZSBjb21wb25lbnRcclxuICogQHBhcmFtIGNvbXBvbmVudFxyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJ1aWxkQ29tcG9uZW50Q29uZmlnID0gKGNvbXBvbmVudCkgPT4ge1xyXG4gICAgY29uc3QgY29uZmlnID0gZ2V0UHJvdG90eXBlRGVjb3JhdG9yVmFsdWUoY29tcG9uZW50LCBFTlVNUy5DT01QT05FTlQpO1xyXG4gICAgY29uZmlnLmNvbnRyb2xsZXIgPSBjb21wb25lbnQ7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG4iXX0=