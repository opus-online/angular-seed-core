import test from 'ava';

import { createPrototypeDecorator, getPrototypeDecoratorValue } from '../../src/core/decorators.js';

test('createPrototypeDecorator should create a function that decorates the prototype of the target', (t) => {
    const key = 'key';
    const values = { a: 1 };
    const target = () => {};
    createPrototypeDecorator(key)(values)(target);
    t.is(target.prototype.key, values);
});

test('getPrototypeDecoratorValue should read from the targets prototype', (t) => {
    const key = 'key';
    const values = { a: 1 };
    const target = () => {};
    target.prototype.key = values;
    t.deepEqual(getPrototypeDecoratorValue(target, key), values);
});
