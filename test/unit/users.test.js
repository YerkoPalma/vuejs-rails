var Vue = require('vue');
Vue.use(require('vue-resource'));
//var browserify = require('browserify');
//var fs = require('fs');
var AddUsers = require('../../app/assets/javascripts/users/adduser');
var UsersList = require('../../app/assets/javascripts/users/userslist');

//IMPORTANTE
/*
    Debido a problemas con el modulo 'fs' por ahora no se probara el contenido de los templates, solo la logica dentro de las archivos javascript
    
    Due to problems with 'fs' module, for now templates are not going to be tested, just the logic inside javascript files
*/

//var addUsersTemplate = require('../../app/views/users/components/_userform.html.erb');

var addUsersTemplate = "<script type='text/x-template'  id='userform'>" +
                    "<h2>{{title}}</h2>" +
                    "<label for='username'>Name:</label> <input id='username' v-model='user.name'>" +
                    "<label for='useremail'>Email:</label> <input id='useremail' v-model='user.email'>" +
                    "<button v-on:click='save'>Submit</button>"+
                "</script>";/*
var usersListTemplate = "<script type='text/x-template'  id='userstemplate'>" +
                          "<h1>Users list</h1>" +
                          "<template v-for='user in users'>" +
                            "<p>" +
                              "<a v-link=\"{ path: 'users/' + user.id }\"><b>{{user.name}}</b></a> - {{user.email}} -  " +
                              "<a v-link=\"{ path: 'users/edit/' + user.id }\">Editar</a> | " +
                              "<a v-on:click=\"erase(user)\">Eliminar</a> "+
                            "</p>" +
                          "</template>" +
                        "</script>";*/
                
var NewAddUsers = AddUsers.extend({
    template: addUsersTemplate
});
/*
var NewUsersList = UsersList.extend({
    template: usersListTemplate
});*/


var addUserInstance = new NewAddUsers();
//var usersListInstance = new NewUsersList();

describe('addUserInstance', function() {
    
  it('should have correct title', function() {
    expect(addUserInstance.title).toBe( 'Add user' );
  });
  /*
  it('should have two inputs', function() {
    
    addUserInstance.$mount();
    expect(addUserInstance.$el.querySelectorAll('input').length).toBe(2); 
  });*/
  
  it('should have a save method', function() {
    expect(typeof addUserInstance.save).toBe( 'function' );
  });
  
  it('should save users', function(){
    //usersListInstance.$mount();
    //addUserInstance.$mount();
    
    //get current users
    //var usersLength = usersListInstance.users.length;
    
    //hit the save() method
    //addUserInstance.user.name = "Some Name";
    //addUserInstance.user.name = "some@mail.com";
    //addUserInstance.save();
    
    //check for difference in users
    //expect(usersListInstance.users.length).toBe(usersLength);
    
  });
})