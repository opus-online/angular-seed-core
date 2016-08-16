import { getPrototypeDecoratorValue, ENUMS } from './../decorators.js';

export const forceControllerAsVm = (config) => {
    config.controllerAs = 'vm';
    return config;
};

export const forceAbstract = (config) => {
    config.abstract = true;
    return config;
};

/**
 * Builds a component config object from the component
 * @param component
 * @returns {Object}
 */
export const buildComponentConfig = (component) => {
    const config = getPrototypeDecoratorValue(component, ENUMS.COMPONENT);
    config.controller = component;
    return config;
};
