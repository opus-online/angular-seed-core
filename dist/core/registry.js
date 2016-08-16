"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

            debug("Registering '" + prettyTypeName + "' from '" + path + "' with transformed name '" + transformedName + "'");
            registration(application, transformedName, value);
        });
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3JlZ2lzdHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNPLElBQU0sOERBQTJCLFNBQTNCLHdCQUEyQixDQUFDLGNBQUQsRUFBdUc7QUFBQSxRQUF0RixnQkFBc0YseURBQW5FLEVBQW1FO0FBQUEsUUFBL0QsZUFBK0QseURBQTdDLEVBQTZDO0FBQUEsUUFBekMsaUJBQXlDLHlEQUFyQixFQUFxQjtBQUFBLFFBQWpCLFlBQWlCOztBQUMzSSxXQUFPLFVBQUMsT0FBRCxRQUF3RDtBQUFBLFlBQTVDLFdBQTRDLFFBQTVDLFdBQTRDO0FBQUEsWUFBL0IsSUFBK0IsUUFBL0IsSUFBK0I7QUFBQSxZQUF6QixLQUF5QixRQUF6QixLQUF5QjtBQUFBLFlBQWxCLElBQWtCLFFBQWxCLElBQWtCO0FBQUEsWUFBWixLQUFZLFFBQVosS0FBWTs7QUFDM0QsZ0JBQ0ssSUFETCxHQUVLLE9BRkwsQ0FFYSxVQUFDLElBQUQsRUFBVTtBQUNmLGdCQUFNLGtCQUFrQixpQkFBaUIsTUFBakIsQ0FBd0IsVUFBQyxRQUFELEVBQVcsV0FBWDtBQUFBLHVCQUEyQixZQUFZLFFBQVosQ0FBM0I7QUFBQSxhQUF4QixFQUEwRSxJQUExRSxDQUF4QjtBQUNBLGdCQUFJLFFBQVEsUUFBUSxJQUFSLEVBQWMsT0FBMUI7O0FBRUEsNEJBQWdCLE9BQWhCLENBQXdCLFVBQUMsU0FBRDtBQUFBLHVCQUFlLFVBQVUsRUFBRSxVQUFGLEVBQVEsTUFBTSxlQUFkLEVBQStCLFlBQS9CLEVBQVYsRUFBa0QsRUFBRSxVQUFGLEVBQVEsWUFBUixFQUFlLFVBQWYsRUFBcUIsWUFBckIsRUFBbEQsQ0FBZjtBQUFBLGFBQXhCO0FBQ0Esb0JBQVEsa0JBQWtCLE1BQWxCLENBQXlCLFVBQUMsUUFBRCxFQUFXLFdBQVg7QUFBQSx1QkFBMkIsWUFBWSxRQUFaLENBQTNCO0FBQUEsYUFBekIsRUFBMkUsS0FBM0UsQ0FBUjs7QUFFQSxvQ0FBc0IsY0FBdEIsZ0JBQStDLElBQS9DLGlDQUErRSxlQUEvRTtBQUNBLHlCQUFhLFdBQWIsRUFBMEIsZUFBMUIsRUFBMkMsS0FBM0M7QUFDSCxTQVhMO0FBWUgsS0FiRDtBQWNILENBZk0iLCJmaWxlIjoicmVnaXN0cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlcyBhIHJlZ2lzdHJ5IHRoYXQgYnVpbGRzIHRoZSBuYW1lIGZyb20gZm9sZGVyc1xyXG4gKiBAcGFyYW0gcHJldHR5VHlwZU5hbWUgLSBUaGUgcHJldHR5IHR5cGUgbmFtZSwgb25seSB1c2VkIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXNcclxuICogQHBhcmFtIHBhdGhUcmFuc2Zvcm1lcnMgRnVuY3Rpb25zIHRoYXQgdGFrZSB0aGUgcGF0aCBhbmQgdHJhbnNmb3JtIGl0IGludG8gYSBuYW1lXHJcbiAqIEBwYXJhbSB2YWx1ZVZhbGlkYXRvcnMgRnVuY3Rpb25zIHRoYXQgY2hlY2sgdGhlIHZhbHVlcyBhZ2FpbnN0IGJlc3QgcHJhY3RpY2VzXHJcbiAqIEBwYXJhbSB2YWx1ZVRyYW5zZm9ybWVycyBGdW5jdGlvbnMgdGhhdCB3aWxsIHRha2UgdGhlIHZhbHVlIGFuZCB0cmFuc2Zvcm0gaXQgKGUuZy4gYnVpbGQgYSBjb21wb25lbnQgZnJvbSB3aGF0IHdlIGhhdmUgb3IgZGVmYXVsdCBzb21lIGNvbmZpZ3VyYXRpb24gdmFsdWVzKVxyXG4gKiBAcGFyYW0gcmVnaXN0cmF0aW9uIENhbGxiYWNrIHRoYXQgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIGFwcGxpY2F0aW9uLCB0aGUgdHJhbnNmb3JtZWQgbmFtZSBhbmQgdGhlIHZhbHVlIG9mIHRoZSBmaWxlXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVGb2xkZXJOYW1lUmVnaXN0cnkgPSAocHJldHR5VHlwZU5hbWUsIHBhdGhUcmFuc2Zvcm1lcnMgPSBbXSwgdmFsdWVWYWxpZGF0b3JzID0gW10sIHZhbHVlVHJhbnNmb3JtZXJzID0gW10sIHJlZ2lzdHJhdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIChjb250ZXh0LCB7IGFwcGxpY2F0aW9uLCB3YXJuLCBkZWJ1ZywgaW5mbywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGNvbnRleHRcclxuICAgICAgICAgICAgLmtleXMoKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgocGF0aCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWROYW1lID0gcGF0aFRyYW5zZm9ybWVycy5yZWR1Y2UoKG9yaWdpbmFsLCB0cmFuc2Zvcm1lcikgPT4gdHJhbnNmb3JtZXIob3JpZ2luYWwpLCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNvbnRleHQocGF0aCkuZGVmYXVsdDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVZhbGlkYXRvcnMuZm9yRWFjaCgodmFsaWRhdG9yKSA9PiB2YWxpZGF0b3IoeyBwYXRoLCBuYW1lOiB0cmFuc2Zvcm1lZE5hbWUsIHZhbHVlIH0sIHsgd2FybiwgZGVidWcsIGluZm8sIGVycm9yIH0pKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVUcmFuc2Zvcm1lcnMucmVkdWNlKChvcmlnaW5hbCwgdHJhbnNmb3JtZXIpID0+IHRyYW5zZm9ybWVyKG9yaWdpbmFsKSwgdmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlYnVnKGBSZWdpc3RlcmluZyAnJHtwcmV0dHlUeXBlTmFtZX0nIGZyb20gJyR7cGF0aH0nIHdpdGggdHJhbnNmb3JtZWQgbmFtZSAnJHt0cmFuc2Zvcm1lZE5hbWV9J2ApO1xyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uKGFwcGxpY2F0aW9uLCB0cmFuc2Zvcm1lZE5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59O1xyXG4iXX0=