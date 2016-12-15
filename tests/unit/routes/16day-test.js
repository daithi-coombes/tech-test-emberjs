import { moduleFor, test } from 'ember-qunit';

moduleFor('route:16day', 'Unit | Route | 16day', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});

test('will redirect with error if no post request', function(assert){
  let route = this.subject({
    transitionTo(routeName){
      assert.equal(routeName, 'index', 'redirect if no post data');
    }
  });
  route.beforeModel();
});
