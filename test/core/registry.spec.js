import test from 'ava';
import sinon from 'sinon';
import { createFolderNameRegistry } from '../../src/core/registry.js';

test('createFolderNameRegistry should create a registry function that applies all transformations and invokes a callback', (t) => {

    const path = './path/index.js';
    const value = { a: 1 };

    const transformedPath = 'transformedPath';
    const transformedValue = { a: 2 };

    const pathTransformer = sinon.spy((path) => transformedPath);
    const valueValidator = sinon.spy();
    const valueTransformer = sinon.spy((value) => ({ a: 2 }));
    const callback = sinon.spy();
    const registry = createFolderNameRegistry('pretty name', [pathTransformer], [valueValidator], [valueTransformer], callback);

    const application = {};
    const warn = () => {};
    const debug = () => {};
    const info = () => {};
    const error = () => {};

    const context = () => ({ default: value });
    context.keys = () => [path];

    registry(context, { application, warn, debug, info, error });
    t.true(pathTransformer.calledOnce);
    t.true(valueValidator.calledOnce);
    t.true(valueTransformer.calledOnce);
    t.true(callback.calledOnce);
    t.true(callback.calledWith(application, transformedPath, transformedValue))
});
