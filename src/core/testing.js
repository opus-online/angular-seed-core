import lodash from 'lodash';
import { buildComponentConfig, forceControllerAsVm } from './transformers/value.js';

export const buildAttributes = (scopeAttributes = {}, domAttributes = {}) => {
    const scopeAttributeKeys = Object.keys(scopeAttributes);
    const domAttributeKeys = Object.keys(domAttributes);
    const bothKeys = [].concat(scopeAttributeKeys, domAttributeKeys);

    if (lodash.uniq(bothKeys).length !== (bothKeys.length)) {
        console.warn(`Duplicate keys found (in both scope and dom attributes).
            Will use scope attributes for the following keys: ${lodash.intersection(scopeAttributeKeys, domAttributeKeys).join(', ')}
        `);
    }
    const scopeAttrs = Object.keys(scopeAttributes)
        .map((key) => ({ key: lodash.kebabCase(key), value: key }));

    const domAttrs = Object.keys(domAttributes)
        .map((key) => ({ key: lodash.kebabCase(key), value: domAttributes[key] }));

    const bothAttributes = [].concat(scopeAttrs, domAttrs);
    const uniqueBothAttributes = lodash.uniqBy(bothAttributes, (value) => value.key);

    return uniqueBothAttributes.map((attr) => `${attr.key} = '${attr.value}'`).join(' ');
};

export const buildMockComponent = (component, configure = () => {}, mockModuleName = 'test', mockComponentName = 'test') => {
    let compileComponent;
    angular.module(mockModuleName, []).component(mockComponentName, forceControllerAsVm(buildComponentConfig(component)));
    angular.mock.module(mockModuleName, configure);
    angular.mock.inject(($injector) => {
        const $scope = $injector.get('$rootScope').$new(true);
        compileComponent = (scopeAttributes = {}, domAttributes = {}) => {
            /**
             * Map over to the scope object
             */
            Object.keys(scopeAttributes).forEach((key) => {
                $scope[key] = scopeAttributes[key];
            });
            const attributes = buildAttributes(scopeAttributes, domAttributes);
            const componentString = `<${mockComponentName} ${attributes}></${mockComponentName}>`;
            const $element = $injector.get('$compile')(angular.element(componentString))($scope);
            $scope.$digest();
            return $element;
        };
    });
    return compileComponent;
};

