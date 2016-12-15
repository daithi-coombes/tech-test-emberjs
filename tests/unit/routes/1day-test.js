import { moduleFor, test } from 'ember-qunit';

moduleFor('route:1day', 'Unit | Route | 1day', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', (assert)=>{
  let route = this.subject();
  assert.ok(route);
});
