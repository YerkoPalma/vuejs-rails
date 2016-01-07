$(document).on('ready page:change', function() {
    var Vue = require('vue');
    var VueRouter = require('vue-router');
    
    Vue.use(require('vue-resource'));
    Vue.use(require('vue-router'));
    
    /**
     *  Components
     */
    var UsersList = require('./users/userslist');
    var User = require('./users/userview');
    var AddUser = require('./users/adduser');
    var EditUser = require('./users/edituser');
    
    /**
     *  Main Vue App, not an instance because of the router
     */
    var UsersApp = Vue.extend({});
    
    /**
     *  Vue Router
     */
    var router = new VueRouter();
    
    router.map({
        '/users': {
            component: UsersList
        },
        '/users/:user_id': {
            component: User
        },
        '/users/add': {
            component: AddUser
        },
        'users/edit/:user_id': {
            component: EditUser
        }
    });
    
    router.alias({
        //to have a root path
        '/': '/users'
    });
    
    router.start(UsersApp, '#userapp');
});


