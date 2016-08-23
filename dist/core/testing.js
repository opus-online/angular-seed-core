'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildMockComponent = exports.buildAttributes = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _value = require('./transformers/value.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildAttributes = exports.buildAttributes = function buildAttributes() {
    var scopeAttributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var domAttributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var scopeAttributeKeys = Object.keys(scopeAttributes);
    var domAttributeKeys = Object.keys(domAttributes);
    var bothKeys = [].concat(scopeAttributeKeys, domAttributeKeys);

    if (_lodash2.default.uniq(bothKeys).length !== bothKeys.length) {
        console.warn('Duplicate keys found (in both scope and dom attributes).\n            Will use scope attributes for the following keys: ' + _lodash2.default.intersection(scopeAttributeKeys, domAttributeKeys).join(', ') + '\n        ');
    }
    var scopeAttrs = Object.keys(scopeAttributes).map(function (key) {
        return { key: _lodash2.default.kebabCase(key), value: key };
    });

    var domAttrs = Object.keys(domAttributes).map(function (key) {
        return { key: _lodash2.default.kebabCase(key), value: domAttributes[key] };
    });

    var bothAttributes = [].concat(scopeAttrs, domAttrs);
    var uniqueBothAttributes = _lodash2.default.uniqBy(bothAttributes, function (value) {
        return value.key;
    });

    return uniqueBothAttributes.map(function (attr) {
        return attr.key + ' = \'' + attr.value + '\'';
    }).join(' ');
};

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

            /**
             * Map over to the scope object
             */
            Object.keys(scopeAttributes).forEach(function (key) {
                $scope[key] = scopeAttributes[key];
            });
            var attributes = buildAttributes(scopeAttributes, domAttributes);
            var $element = $injector.get('$compile')(angular.element('<' + mockComponentName + ' ' + attributes + '></' + mockComponentName + '>'))($scope);
            $scope.$digest();
            return $element;
        };
    });
    return compileComponent;
};
//# sourceMappingURL=data:application/json;base64,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QUFvQixpQkFBcEIsU0FBeUMsVUFBekMsV0FBeUQsaUJBQXpELE9BQTFCLEVBQTBHLE1BQTFHLENBQWpCO0FBQ0EsbUJBQU8sT0FBUDtBQUNBLG1CQUFPLFFBQVA7QUFDSCxTQVhEO0FBWUgsS0FkRDtBQWVBLFdBQU8sZ0JBQVA7QUFDSCxDQXBCTSIsImZpbGUiOiJ0ZXN0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBidWlsZENvbXBvbmVudENvbmZpZywgZm9yY2VDb250cm9sbGVyQXNWbSB9IGZyb20gJy4vdHJhbnNmb3JtZXJzL3ZhbHVlLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZEF0dHJpYnV0ZXMgPSAoc2NvcGVBdHRyaWJ1dGVzID0ge30sIGRvbUF0dHJpYnV0ZXMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgc2NvcGVBdHRyaWJ1dGVLZXlzID0gT2JqZWN0LmtleXMoc2NvcGVBdHRyaWJ1dGVzKTtcclxuICAgIGNvbnN0IGRvbUF0dHJpYnV0ZUtleXMgPSBPYmplY3Qua2V5cyhkb21BdHRyaWJ1dGVzKTtcclxuICAgIGNvbnN0IGJvdGhLZXlzID0gW10uY29uY2F0KHNjb3BlQXR0cmlidXRlS2V5cywgZG9tQXR0cmlidXRlS2V5cyk7XHJcblxyXG4gICAgaWYgKGxvZGFzaC51bmlxKGJvdGhLZXlzKS5sZW5ndGggIT09IChib3RoS2V5cy5sZW5ndGgpKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBEdXBsaWNhdGUga2V5cyBmb3VuZCAoaW4gYm90aCBzY29wZSBhbmQgZG9tIGF0dHJpYnV0ZXMpLlxyXG4gICAgICAgICAgICBXaWxsIHVzZSBzY29wZSBhdHRyaWJ1dGVzIGZvciB0aGUgZm9sbG93aW5nIGtleXM6ICR7bG9kYXNoLmludGVyc2VjdGlvbihzY29wZUF0dHJpYnV0ZUtleXMsIGRvbUF0dHJpYnV0ZUtleXMpLmpvaW4oJywgJyl9XHJcbiAgICAgICAgYCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzY29wZUF0dHJzID0gT2JqZWN0LmtleXMoc2NvcGVBdHRyaWJ1dGVzKVxyXG4gICAgICAgIC5tYXAoKGtleSkgPT4gKHsga2V5OiBsb2Rhc2gua2ViYWJDYXNlKGtleSksIHZhbHVlOiBrZXkgfSkpO1xyXG5cclxuICAgIGNvbnN0IGRvbUF0dHJzID0gT2JqZWN0LmtleXMoZG9tQXR0cmlidXRlcylcclxuICAgICAgICAubWFwKChrZXkpID0+ICh7IGtleTogbG9kYXNoLmtlYmFiQ2FzZShrZXkpLCB2YWx1ZTogZG9tQXR0cmlidXRlc1trZXldIH0pKTtcclxuXHJcbiAgICBjb25zdCBib3RoQXR0cmlidXRlcyA9IFtdLmNvbmNhdChzY29wZUF0dHJzLCBkb21BdHRycyk7XHJcbiAgICBjb25zdCB1bmlxdWVCb3RoQXR0cmlidXRlcyA9IGxvZGFzaC51bmlxQnkoYm90aEF0dHJpYnV0ZXMsICh2YWx1ZSkgPT4gdmFsdWUua2V5KTtcclxuXHJcbiAgICByZXR1cm4gdW5pcXVlQm90aEF0dHJpYnV0ZXMubWFwKChhdHRyKSA9PiBgJHthdHRyLmtleX0gPSAnJHthdHRyLnZhbHVlfSdgKS5qb2luKCcgJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRNb2NrQ29tcG9uZW50ID0gKGNvbXBvbmVudCwgY29uZmlndXJlID0gKCkgPT4ge30sIG1vY2tNb2R1bGVOYW1lID0gJ3Rlc3QnLCBtb2NrQ29tcG9uZW50TmFtZSA9ICd0ZXN0JykgPT4ge1xyXG4gICAgbGV0IGNvbXBpbGVDb21wb25lbnQ7XHJcbiAgICBhbmd1bGFyLm1vZHVsZShtb2NrTW9kdWxlTmFtZSwgW10pLmNvbXBvbmVudChtb2NrQ29tcG9uZW50TmFtZSwgZm9yY2VDb250cm9sbGVyQXNWbShidWlsZENvbXBvbmVudENvbmZpZyhjb21wb25lbnQpKSk7XHJcbiAgICBhbmd1bGFyLm1vY2subW9kdWxlKG1vY2tNb2R1bGVOYW1lLCBjb25maWd1cmUpO1xyXG4gICAgYW5ndWxhci5tb2NrLmluamVjdCgoJGluamVjdG9yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgJHNjb3BlID0gJGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpLiRuZXcodHJ1ZSk7XHJcbiAgICAgICAgY29tcGlsZUNvbXBvbmVudCA9IChzY29wZUF0dHJpYnV0ZXMgPSB7fSwgZG9tQXR0cmlidXRlcyA9IHt9KSA9PiB7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBNYXAgb3ZlciB0byB0aGUgc2NvcGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzY29wZUF0dHJpYnV0ZXMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlW2tleV0gPSBzY29wZUF0dHJpYnV0ZXNba2V5XTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBidWlsZEF0dHJpYnV0ZXMoc2NvcGVBdHRyaWJ1dGVzLCBkb21BdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkaW5qZWN0b3IuZ2V0KCckY29tcGlsZScpKGFuZ3VsYXIuZWxlbWVudChgPCR7bW9ja0NvbXBvbmVudE5hbWV9ICR7YXR0cmlidXRlc30+PC8ke21vY2tDb21wb25lbnROYW1lfT5gKSkoJHNjb3BlKTtcclxuICAgICAgICAgICAgJHNjb3BlLiRkaWdlc3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuICRlbGVtZW50O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb21waWxlQ29tcG9uZW50O1xyXG59O1xyXG5cclxuIl19