import test from 'ava';
import sinon from 'sinon';

import { ENUMS } from '../src/core/decorators.js';

import { registerComponents, registerConfigs, registerConstants, registerEnums,
    registerFactories, registerFilters, registerLayouts, registerProviders,
    registerResources, registerRuns, registerServices, registerStates } from '../src/index.js';

let application;
let options;
let path;
let value;
let context;
let $stateProvider;

test.beforeEach(() => {

    $stateProvider = {
        state: sinon.spy()
    };
    application = {
        component: sinon.spy(),
        constant: sinon.spy(),
        config: (callback = () => {}) => callback($stateProvider),
        factory: sinon.spy(),
        filter: sinon.spy(),
        provider: sinon.spy(),
        service: sinon.spy(),
        run: sinon.spy()
    };
    sinon.spy(application, 'config');

    options = { application, info: sinon.spy(), warn: sinon.spy(), debug: sinon.spy(), error: sinon.spy() };
    path = './path/folder/subFolder/index.js';
    context = () => ({ get default() { return value; } });
    context.keys = () => [path];
});

test.afterEach('should not log out any warnings', (t) => {
    t.false(options.info.called);
    t.false(options.warn.called);
    t.false(options.error.called);
});
test.afterEach('should log out a debug message for each test', (t) => {
    t.true(options.debug.calledOnce);
});

test('registerConstants should register a constant with angular', (t) => {
    registerConstants(context, options);
    t.true(application.constant.calledWith('PATH_FOLDER_SUB_FOLDER', value));
});

test('registerConfigs should register a config block with angular', (t) => {
    registerConfigs(context, options);
    t.true(application.config.calledWith(value));
});

test('registerEnums should register a factory with angular', (t) => {
    registerEnums(context, options);
    t.true(application.factory.calledWith('PATH_FOLDER_SUB_FOLDER_ENUM', value));
});

test('registerFactories should register a factory with angular', (t) => {
    registerFactories(context, options);
    t.true(application.factory.calledWith('PathFolderSubFolderFactory', value));
});

test('registerFilters should register a filter with angular', (t) => {
    registerFilters(context, options);
    t.true(application.filter.calledWith('pathFolderSubFolder', value));
});

test('registerProviders should register a provider with angular', (t) => {
    registerProviders(context, options);
    t.true(application.provider.calledWith('pathFolderSubFolder', value));
});

test('registerResources should register a factory with angular', (t) => {
    registerResources(context, options);
    t.true(application.service.calledWith('PathFolderSubFolderResource', value));
});

test('registerRuns should register a run with angular', (t) => {
    registerRuns(context, options);
    t.true(application.run.calledWith(value));
});

test('registerServices should register a service with angular', (t) => {
    registerServices(context, options);
    t.true(application.service.calledWith('PathFolderSubFolderService', value));
});

test('registerComponents should register a component with angular', (t) => {
    value = () => {};
    value.prototype[ENUMS.COMPONENT] = {
        template: '<template></template>'
    };
    registerComponents(context, options);
    t.true(application.component.calledWith('pathFolderSubFolder', {
        controller: value,
        controllerAs: 'vm',
        template: '<template></template>'
    }));
});

test('registerStates should register a state with angulars $stateProvider', (t) => {
    value = { template: '<template></template>' };
    registerStates(context, options);
    t.true($stateProvider.state.calledWith('path.folder.sub.folder', { template: '<template></template>', controllerAs: 'vm' }));
});

test('registerLayouts should register a state with angulars $stateProvider', (t) => {
    value = { template: '<template></template>' };
    registerLayouts(context, options);
    t.true($stateProvider.state.calledWith('PathFolderSubFolderLayout', { template: '<template></template>', abstract: true, controllerAs: 'vm' }));
});

