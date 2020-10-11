import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | arts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:arts');
    assert.ok(route);
  });
});
