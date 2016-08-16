'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getPrototypeDecoratorValue = exports.createPrototypeDecorator = exports.ENUMS = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENUMS = exports.ENUMS = {
    COMPONENT: 'Core.Component'
};
var createPrototypeDecorator = exports.createPrototypeDecorator = function createPrototypeDecorator(key) {
    return function (options) {
        return function (target) {
            _lodash2.default.set(target.prototype, key, options);
        };
    };
};
var getPrototypeDecoratorValue = exports.getPrototypeDecoratorValue = function getPrototypeDecoratorValue(target, key) {
    return _lodash2.default.extend({}, _lodash2.default.get(target.prototype, key));
};
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var resolveFileName = exports.resolveFileName = function resolveFileName(path) {
    var indexOfSlash = path.lastIndexOf('/');
    var indexOfDot = path.lastIndexOf('.');
    return path.substring(indexOfSlash + 1, indexOfDot);
};

var splitPathToFolders = exports.splitPathToFolders = function splitPathToFolders(path) {
    var pathWithFilename = path.substring(2).substring(-3);
    var index = pathWithFilename.lastIndexOf('/');
    return pathWithFilename.substring(0, index).split('/');
};
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNameSuffix = exports.buildNameFromPath = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('./path.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildNameFromPath = exports.buildNameFromPath = function buildNameFromPath(path) {
  return (0, _path.splitPathToFolders)(path).map(_lodash2.default.upperFirst).join('');
};
var addNameSuffix = exports.addNameSuffix = function addNameSuffix(suffix) {
  return function (name) {
    return name + suffix;
  };
};
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
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildMockComponent = exports.registerResources = exports.registerServices = exports.registerFactories = exports.registerFilters = exports.registerStates = exports.registerLayouts = exports.registerConfigs = exports.registerConstants = exports.registerRuns = exports.registerProviders = exports.registerEnums = exports.registerComponents = exports.Component = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _decorators = require('./core/decorators.js');

var _registry = require('./core/registry.js');

var _transformers = require('./core/transformers.js');

var _validators = require('./core/validators.js');

var _testing = require('./core/testing.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component decorator
 * @type {Function}
 */
var Component = exports.Component = (0, _decorators.createPrototypeDecorator)(_decorators.ENUMS.COMPONENT);

var registerComponents = exports.registerComponents = (0, _registry.createFolderNameRegistry)('Component', [_transformers.buildNameFromPath, _lodash2.default.lowerFirst], [_validators.indexFileValidator, _validators.componentConfigurationValidator], function (application, name, component) {
    return application.component(name, (0, _registry.buildComponentConfig)(component));
});

var registerEnums = exports.registerEnums = (0, _registry.createFolderNameRegistry)('Enum', [_transformers.buildNameFromPath, (0, _transformers.addNameSuffix)('ENUM'), _lodash2.default.snakeCase, _lodash2.default.toUpper], [_validators.indexFileValidator], function (application, name, value) {
    return application.factory(name, value);
});

var registerProviders = exports.registerProviders = (0, _registry.createFolderNameRegistry)('Provider', [_transformers.buildNameFromPath, _lodash2.default.lowerFirst], [_validators.indexFileValidator], function (application, name, value) {
    return application.provider(name, value);
});

var registerRuns = exports.registerRuns = (0, _registry.createFolderNameRegistry)('Run', [function () {
    return 'N/A';
}], [_validators.indexFileValidator], function (application, name, value) {
    return application.run(value);
});

var registerConstants = exports.registerConstants = (0, _registry.createFolderNameRegistry)('Constant', [_transformers.buildNameFromPath, _lodash2.default.snakeCase, _lodash2.default.toUpper], [_validators.indexFileValidator], function (application, name, value) {
    return application.constant(name, value);
});

var registerConfigs = exports.registerConfigs = (0, _registry.createFolderNameRegistry)('Config', [function () {
    return 'N/A';
}], [_validators.indexFileValidator], function (application, name, value) {
    return application.config(value);
});

var registerLayouts = exports.registerLayouts = (0, _registry.createFolderNameRegistry)('Layout', [_transformers.buildNameFromPath, (0, _transformers.addNameSuffix)('Layout')], [_validators.indexFileValidator, _validators.layoutConfigurationValidator], function (application, name, value) {
    return application.config(function ($stateProvider) {
        return $stateProvider.state(name, value);
    });
});

var registerStates = exports.registerStates = (0, _registry.createFolderNameRegistry)('State', [_transformers.buildNameFromPath, _lodash2.default.snakeCase, function (name) {
    return name.replace(new RegExp('_', 'g'), '.').toLowerCase();
}], [_validators.indexFileValidator, _validators.stateConfigurationValidator], function (application, name, value) {
    return application.config(function ($stateProvider) {
        return $stateProvider.state(name, value);
    });
});

var registerFilters = exports.registerFilters = (0, _registry.createFolderNameRegistry)('Filter', [_transformers.buildNameFromPath, _lodash2.default.camelCase], [_validators.indexFileValidator], function (application, name, value) {
    return application.filter(name, value);
});

var registerFactories = exports.registerFactories = (0, _registry.createFolderNameRegistry)('Factory', [_transformers.buildNameFromPath, (0, _transformers.addNameSuffix)('Factory')], [_validators.indexFileValidator], function (application, name, value) {
    return application.factory(name, value);
});

var registerServices = exports.registerServices = (0, _registry.createFolderNameRegistry)('Service', [_transformers.buildNameFromPath, (0, _transformers.addNameSuffix)('Service')], [_validators.indexFileValidator], function (application, name, value) {
    return application.service(name, value);
});

var registerResources = exports.registerResources = (0, _registry.createFolderNameRegistry)('Resource', [_transformers.buildNameFromPath, (0, _transformers.addNameSuffix)('Resource')], [_validators.indexFileValidator], function (application, name, value) {
    return application.service(name, value);
});

/**
 *
 * @type {Function}
 */
var buildMockComponent = exports.buildMockComponent = _testing.buildMockComponent;
