import test from 'ava';
import sinon from 'sinon';

import { indexFileValidator, layoutConfigurationValidator, stateConfigurationValidator, componentConfigurationValidator } from '../../src/core/validators.js';
import { ENUMS } from '../../src/core/decorators.js';

let logger;
let component;

test.beforeEach(() => {
    logger = {
        warn: sinon.spy()
    };
    component = () => { };
});

test('indexFileValidator should warn only if the file is not an index.js file', (t) => {
    indexFileValidator({ path: './/.///peeter.js' }, logger);
    t.true(logger.warn.calledOnce);

    indexFileValidator({ path: './/.///index.js' }, logger);
    t.true(logger.warn.calledOnce);
});

test('layoutConfigurationValidator should warn if abstract is set', (t) => {
    layoutConfigurationValidator({ value: { abstract: true, template: '' } }, logger);
    t.true(logger.warn.calledOnce);

    layoutConfigurationValidator({ value: { abstract: false, template: '' } }, logger);
    t.true(logger.warn.calledTwice);

    layoutConfigurationValidator({ value: { template: '' } }, logger);
    t.true(logger.warn.calledTwice);
});

test('layoutConfigurationValidator should warn if url is set', (t) => {
    layoutConfigurationValidator({ value: { url: '', template: '' } }, logger);
    t.true(logger.warn.calledOnce);
});

test('layoutConfigurationValidator should warn if the template is not set', (t) => {
    layoutConfigurationValidator({ value: { } }, logger);
    t.true(logger.warn.calledOnce);
});

test('stateConfigurationValidator should warn if the template is not set', (t) => {
    stateConfigurationValidator({ name: 'state', value: { } }, logger);
    t.true(logger.warn.calledOnce);
});

test('stateConfigurationValidator should warn if the parent state is specified and not inherited from the name', (t) => {
    stateConfigurationValidator({ name: 'parent.state', value: { parent: 'parent2', template: '' } }, logger);
    t.true(logger.warn.calledOnce);
});

test('componentConfigurationValidator should warn if the template is not set', (t) => {
    component.prototype[ENUMS.COMPONENT] = {};
    componentConfigurationValidator({ name: 'component', value: component }, logger);
    t.true(logger.warn.calledOnce);
});
test('componentConfigurationValidator should warn if controller is set', (t) => {
    component.prototype[ENUMS.COMPONENT] = {
        controller: () => {},
        template: ''
    };
    componentConfigurationValidator({ name: 'component', value: component }, logger);
    t.true(logger.warn.calledOnce);
});
test('componentConfigurationValidator should warn if controllerAs is set', (t) => {
    component.prototype[ENUMS.COMPONENT] = {
        controllerAs: 'vm',
        template: ''
    };
    componentConfigurationValidator({ name: 'component', value: component }, logger);
    t.true(logger.warn.calledOnce);
});
