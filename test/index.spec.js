import test from 'ava';
import sinon from 'sinon';

import { Component, buildMockComponent } from '../src/index.js';

test.todo('@buildMockComponent needs a test');
test('@Component should annotate a classes prototype', (t) => {
    const values = { a: 1 };
    @Component(values)
    class Target {

    }
    t.is(Target.prototype.Core.Component, values);
});
