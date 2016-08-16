import { getPrototypeDecoratorValue, ENUMS } from './decorators.js';

/**
 * Creates a registry that builds the name from folders
 * @param prettyTypeName - The pretty type name, only used for debugging purposes
 * @param pathTransformers Functions that take the path and transform it into a name
 * @param valueValidators Functions that check the values against best practices
 * @param valueTransformers Functions that will take the value and transform it (e.g. build a component from what we have or default some configuration values)
 * @param registration Callback that will be invoked with the application, the transformed name and the value of the file
 * @returns {Function}
 */
export const createFolderNameRegistry = (prettyTypeName, pathTransformers = [], valueValidators = [], valueTransformers = [], registration) => {
    return (context, { application, warn, debug, info, error }) => {
        context
            .keys()
            .forEach((path) => {
                const transformedName = pathTransformers.reduce((original, transformer) => transformer(original), path);
                let value = context(path).default;

                valueValidators.forEach((validator) => validator({ path, name: transformedName, value }, { warn, debug, info, error }));
                value = valueTransformers.reduce((original, transformer) => transformer(original), value);

                debug(`Registering '${prettyTypeName}' from '${path}' with transformed name '${transformedName}'`);
                registration(application, transformedName, value);
            });
    };
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
