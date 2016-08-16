'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildMockComponent = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _registry = require('./registry.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildMockComponent = exports.buildMockComponent = function buildMockComponent(component) {
    var configure = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
    var mockModuleName = arguments.length <= 2 || arguments[2] === undefined ? 'test' : arguments[2];
    var mockComponentName = arguments.length <= 3 || arguments[3] === undefined ? 'test' : arguments[3];

    var compileComponent = void 0;

    angular.module(mockModuleName, []).component(mockComponentName, (0, _registry.buildComponentConfig)(component));
    angular.mock.module(mockModuleName, configure);
    angular.mock.inject(function ($injector) {
        var $scope = $injector.get('$rootScope').$new(true);
        compileComponent = function compileComponent() {
            var scopeAttributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var domAttributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var scopeAttributeKeys = Object.keys(scopeAttributes);
            var domAttributeKeys = Object.keys(domAttributes);
            var bothKeys = [].concat(scopeAttributeKeys, domAttributeKeys);

            if (_lodash2.default.uniq(bothKeys).length !== bothKeys.length) {
                console.warn('Duplicate keys found (in both scope and dom attributes).\n                    Will use scope attributes for the following keys: ' + _lodash2.default.intersection(scopeAttributeKeys, domAttributeKeys).join(', ') + '\n                ');
            }

            /**
             * Map over to the scope object
             */
            Object.keys(scopeAttributes).forEach(function (key) {
                $scope[key] = scopeAttributes[key];
            });

            var scopeAttrs = Object.keys(scopeAttributes).map(function (key) {
                return { key: _lodash2.default.kebabCase(key), value: key };
            });

            var domAttrs = Object.keys(domAttributes).map(function (key) {
                return { key: _lodash2.default.kebabCase(key), value: domAttributes[key] };
            });

            var bothAttrs = [].concat(scopeAttrs, domAttrs);
            var uniqueBothAttrs = _lodash2.default.uniqBy(bothAttrs, function (value) {
                return value.key;
            });
            var attributes = uniqueBothAttrs.map(function (attr) {
                return attr.key + ' = \'' + attr.value + '\'';
            }).join(' ');

            var $element = $injector.get('$compile')(angular.element('<' + mockComponentName + ' ' + attributes + '></' + mockComponentName + '>'))($scope);
            $scope.$digest();
            return $element;
        };
    });
    return compileComponent;
};
//# sourceMappingURL=data:application/json;base64,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dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2Rhc2ggZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgYnVpbGRDb21wb25lbnRDb25maWcgfSBmcm9tICcuL3JlZ2lzdHJ5LmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZE1vY2tDb21wb25lbnQgPSAoY29tcG9uZW50LCBjb25maWd1cmUgPSAoKSA9PiB7fSwgbW9ja01vZHVsZU5hbWUgPSAndGVzdCcsIG1vY2tDb21wb25lbnROYW1lID0gJ3Rlc3QnKSA9PiB7XHJcbiAgICBsZXQgY29tcGlsZUNvbXBvbmVudDtcclxuXHJcbiAgICBhbmd1bGFyLm1vZHVsZShtb2NrTW9kdWxlTmFtZSwgW10pLmNvbXBvbmVudChtb2NrQ29tcG9uZW50TmFtZSwgYnVpbGRDb21wb25lbnRDb25maWcoY29tcG9uZW50KSk7XHJcbiAgICBhbmd1bGFyLm1vY2subW9kdWxlKG1vY2tNb2R1bGVOYW1lLCBjb25maWd1cmUpO1xyXG4gICAgYW5ndWxhci5tb2NrLmluamVjdCgoJGluamVjdG9yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHNjb3BlID0gJGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpLiRuZXcodHJ1ZSk7XHJcbiAgICAgICAgY29tcGlsZUNvbXBvbmVudCA9IChzY29wZUF0dHJpYnV0ZXMgPSB7fSwgZG9tQXR0cmlidXRlcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlQXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKHNjb3BlQXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvbUF0dHJpYnV0ZUtleXMgPSBPYmplY3Qua2V5cyhkb21BdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgY29uc3QgYm90aEtleXMgPSBbXS5jb25jYXQoc2NvcGVBdHRyaWJ1dGVLZXlzLCBkb21BdHRyaWJ1dGVLZXlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb2Rhc2gudW5pcShib3RoS2V5cykubGVuZ3RoICE9PSAoYm90aEtleXMubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUga2V5cyBmb3VuZCAoaW4gYm90aCBzY29wZSBhbmQgZG9tIGF0dHJpYnV0ZXMpLlxyXG4gICAgICAgICAgICAgICAgICAgIFdpbGwgdXNlIHNjb3BlIGF0dHJpYnV0ZXMgZm9yIHRoZSBmb2xsb3dpbmcga2V5czogJHtsb2Rhc2guaW50ZXJzZWN0aW9uKHNjb3BlQXR0cmlidXRlS2V5cywgZG9tQXR0cmlidXRlS2V5cykuam9pbignLCAnKX1cclxuICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogTWFwIG92ZXIgdG8gdGhlIHNjb3BlIG9iamVjdFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc2NvcGVBdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICRzY29wZVtrZXldID0gc2NvcGVBdHRyaWJ1dGVzW2tleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NvcGVBdHRycyA9IE9iamVjdC5rZXlzKHNjb3BlQXR0cmlidXRlcylcclxuICAgICAgICAgICAgICAgIC5tYXAoKGtleSkgPT4gKHsga2V5OiBsb2Rhc2gua2ViYWJDYXNlKGtleSksIHZhbHVlOiBrZXkgfSkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZG9tQXR0cnMgPSBPYmplY3Qua2V5cyhkb21BdHRyaWJ1dGVzKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoa2V5KSA9PiAoeyBrZXk6IGxvZGFzaC5rZWJhYkNhc2Uoa2V5KSwgdmFsdWU6IGRvbUF0dHJpYnV0ZXNba2V5XSB9KSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib3RoQXR0cnMgPSBbXS5jb25jYXQoc2NvcGVBdHRycywgZG9tQXR0cnMpO1xyXG4gICAgICAgICAgICBjb25zdCB1bmlxdWVCb3RoQXR0cnMgPSBsb2Rhc2gudW5pcUJ5KGJvdGhBdHRycywgKHZhbHVlKSA9PiB2YWx1ZS5rZXkpO1xyXG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdW5pcXVlQm90aEF0dHJzXHJcbiAgICAgICAgICAgICAgICAubWFwKChhdHRyKSA9PiBgJHthdHRyLmtleX0gPSAnJHthdHRyLnZhbHVlfSdgKVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtZW50ID0gJGluamVjdG9yLmdldCgnJGNvbXBpbGUnKShhbmd1bGFyLmVsZW1lbnQoYDwke21vY2tDb21wb25lbnROYW1lfSAke2F0dHJpYnV0ZXN9PjwvJHttb2NrQ29tcG9uZW50TmFtZX0+YCkpKCRzY29wZSk7XHJcbiAgICAgICAgICAgICRzY29wZS4kZGlnZXN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkZWxlbWVudDtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY29tcGlsZUNvbXBvbmVudDtcclxufTtcclxuXHJcbiJdfQ==