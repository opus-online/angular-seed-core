'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildMockComponent = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _value = require('./transformers/value.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildMockComponent = exports.buildMockComponent = function buildMockComponent(component) {
    var configure = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
    var mockModuleName = arguments.length <= 2 || arguments[2] === undefined ? 'test' : arguments[2];
    var mockComponentName = arguments.length <= 3 || arguments[3] === undefined ? 'test' : arguments[3];

    var compileComponent = void 0;

    angular.module(mockModuleName, []).component(mockComponentName, (0, _value.forceControllerAsVm)((0, _value.buildComponentConfig)(component)));
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
//# sourceMappingURL=data:application/json;base64,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IiwiZmlsZSI6InRlc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9kYXNoIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IGJ1aWxkQ29tcG9uZW50Q29uZmlnLCBmb3JjZUNvbnRyb2xsZXJBc1ZtIH0gZnJvbSAnLi90cmFuc2Zvcm1lcnMvdmFsdWUuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1aWxkTW9ja0NvbXBvbmVudCA9IChjb21wb25lbnQsIGNvbmZpZ3VyZSA9ICgpID0+IHt9LCBtb2NrTW9kdWxlTmFtZSA9ICd0ZXN0JywgbW9ja0NvbXBvbmVudE5hbWUgPSAndGVzdCcpID0+IHtcclxuICAgIGxldCBjb21waWxlQ29tcG9uZW50O1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKG1vY2tNb2R1bGVOYW1lLCBbXSkuY29tcG9uZW50KG1vY2tDb21wb25lbnROYW1lLCBmb3JjZUNvbnRyb2xsZXJBc1ZtKGJ1aWxkQ29tcG9uZW50Q29uZmlnKGNvbXBvbmVudCkpKTtcclxuICAgIGFuZ3VsYXIubW9jay5tb2R1bGUobW9ja01vZHVsZU5hbWUsIGNvbmZpZ3VyZSk7XHJcbiAgICBhbmd1bGFyLm1vY2suaW5qZWN0KCgkaW5qZWN0b3IpID0+IHtcclxuICAgICAgICBjb25zdCAkc2NvcGUgPSAkaW5qZWN0b3IuZ2V0KCckcm9vdFNjb3BlJykuJG5ldyh0cnVlKTtcclxuICAgICAgICBjb21waWxlQ29tcG9uZW50ID0gKHNjb3BlQXR0cmlidXRlcyA9IHt9LCBkb21BdHRyaWJ1dGVzID0ge30pID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2NvcGVBdHRyaWJ1dGVLZXlzID0gT2JqZWN0LmtleXMoc2NvcGVBdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgY29uc3QgZG9tQXR0cmlidXRlS2V5cyA9IE9iamVjdC5rZXlzKGRvbUF0dHJpYnV0ZXMpO1xyXG4gICAgICAgICAgICBjb25zdCBib3RoS2V5cyA9IFtdLmNvbmNhdChzY29wZUF0dHJpYnV0ZUtleXMsIGRvbUF0dHJpYnV0ZUtleXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvZGFzaC51bmlxKGJvdGhLZXlzKS5sZW5ndGggIT09IChib3RoS2V5cy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYER1cGxpY2F0ZSBrZXlzIGZvdW5kIChpbiBib3RoIHNjb3BlIGFuZCBkb20gYXR0cmlidXRlcykuXHJcbiAgICAgICAgICAgICAgICAgICAgV2lsbCB1c2Ugc2NvcGUgYXR0cmlidXRlcyBmb3IgdGhlIGZvbGxvd2luZyBrZXlzOiAke2xvZGFzaC5pbnRlcnNlY3Rpb24oc2NvcGVBdHRyaWJ1dGVLZXlzLCBkb21BdHRyaWJ1dGVLZXlzKS5qb2luKCcsICcpfVxyXG4gICAgICAgICAgICAgICAgYCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBNYXAgb3ZlciB0byB0aGUgc2NvcGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZUF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlW2tleV0gPSBzY29wZUF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY29wZUF0dHJzID0gT2JqZWN0LmtleXMoc2NvcGVBdHRyaWJ1dGVzKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoa2V5KSA9PiAoeyBrZXk6IGxvZGFzaC5rZWJhYkNhc2Uoa2V5KSwgdmFsdWU6IGtleSB9KSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkb21BdHRycyA9IE9iamVjdC5rZXlzKGRvbUF0dHJpYnV0ZXMpXHJcbiAgICAgICAgICAgICAgICAubWFwKChrZXkpID0+ICh7IGtleTogbG9kYXNoLmtlYmFiQ2FzZShrZXkpLCB2YWx1ZTogZG9tQXR0cmlidXRlc1trZXldIH0pKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvdGhBdHRycyA9IFtdLmNvbmNhdChzY29wZUF0dHJzLCBkb21BdHRycyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUJvdGhBdHRycyA9IGxvZGFzaC51bmlxQnkoYm90aEF0dHJzLCAodmFsdWUpID0+IHZhbHVlLmtleSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB1bmlxdWVCb3RoQXR0cnNcclxuICAgICAgICAgICAgICAgIC5tYXAoKGF0dHIpID0+IGAke2F0dHIua2V5fSA9ICcke2F0dHIudmFsdWV9J2ApXHJcbiAgICAgICAgICAgICAgICAuam9pbignICcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkaW5qZWN0b3IuZ2V0KCckY29tcGlsZScpKGFuZ3VsYXIuZWxlbWVudChgPCR7bW9ja0NvbXBvbmVudE5hbWV9ICR7YXR0cmlidXRlc30+PC8ke21vY2tDb21wb25lbnROYW1lfT5gKSkoJHNjb3BlKTtcclxuICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb21waWxlQ29tcG9uZW50O1xyXG59O1xyXG5cclxuIl19