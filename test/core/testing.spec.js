import test from 'ava';
import sinon from 'sinon';

import { buildAttributes } from '../../src/core/testing.js';

test('buildAttributes should warn when there are colliding attributes', (t) => {
    sinon.stub(console, 'warn', () => {});
    buildAttributes({ a: 1 }, { a: 1 });
    t.true(console.warn.calledOnce);
    console.warn.restore();
});

test('buildAttributes should return a string used for scope attributes', (t) => {
    t.is(buildAttributes({ a: 1 }), `a = 'a'`);
});

test('buildAttributes should return a string used for dom attributes', (t) => {
    t.is(buildAttributes({}, { b: 1 }), `b = '1'`);
});

test('buildAttributes should return a string of all the attributes', (t) => {
    t.is(buildAttributes({ a: 1 }, { b: 1 }), `a = 'a' b = '1'`);
});

test.todo('make buildMockComponent testable');
