import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | computers', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:computers');
    assert.ok(route);
  });
});
