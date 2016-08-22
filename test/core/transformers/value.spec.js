import test from 'ava';

import { ENUMS } from '../../../src/core/decorators.js';
import { buildComponentConfig, forceAbstract, forceControllerAsVm } from '../../../src/core/transformers/value.js';

test('buildComponentConfig should build an angular component from the decorated class / function', (t) => {
    const component = () => {};
    const template = '<template></template>';
    const bindings = { a: '=' };
    const decorator = { template,  bindings };
    component.prototype[ENUMS.COMPONENT] = decorator;
    t.deepEqual(buildComponentConfig(component), { template, bindings, controller: component });
});

test('forceAbstract should force abstract to true', (t) => {
    t.deepEqual(forceAbstract({}), { abstract: true });
});

test('forceControllerAsVm should force controllerAs to vm', (t) => {
    t.deepEqual(forceControllerAsVm({}), { controllerAs: 'vm' });
});
