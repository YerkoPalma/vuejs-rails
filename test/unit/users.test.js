var Vue = require('vue');
//var fs = require('browserify-fs');
var AddUsers = require('../../app/assets/javascripts/users/adduser');

//IMPORTANTE
/*
    Intentar cargar un template exclusivo para los tests que sea equivalente al index.html.erb
*/
/*
    1   Cargar con fs el template
    2   Extender AddUser como si fuese Vue, agregando como template el contenido del paso anterior
    3   crear instancia en base a la nueva clase generada del paso anterior
    4   Probar
*/
//var newTemplate = fs.readFileSync('../../app/views/users/components/_userform.html.erb', 'utf8');
var newTemplate = "<script type='text/x-template'  id='userform'>" +
                    "<h2>{{title}}</h2>" +
                    "<label for='username'>Name:</label> <input id='username' v-model='user.name'>" +
                    "<label for='useremail'>Email:</label> <input id='useremail' v-model='user.email'>" +
                    "<button v-on:click='save'>Submit</button>"+
                "</script>";
                
var NewAddUsers = AddUsers.extend({
    template: newTemplate
});

var addUserInstance = new NewAddUsers();

describe('addUserInstance', function() {
  it('should have correct title', function() {
    expect(addUserInstance.title).toBe( 'Add user' );
  });
  
  it('should have two inputs', function() {
    addUserInstance.$mount();
    expect(addUserInstance.$el.querySelectorAll('input').length).toBe(2); 
  });
})