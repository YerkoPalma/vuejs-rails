var Vue = require('vue');
var AddUsers = require('../../app/assets/javascripts/users/adduser');

var addUserInstance = new AddUsers();

describe('app.vue', function() {
  it('should render correct contents', function() {
    expect(addUserInstance.title).toBe( 'Add user' );
  })
})