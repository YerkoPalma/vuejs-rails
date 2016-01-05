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
    
    /**
     *  Main Vue instance
     */
    var UsersApp = Vue.extend({});
    
    var router = new VueRouter();
    
    router.map({
        '/users': {
            component: UsersList
        },
        '/users/:user_id': {
            component: User
        }
    });
    
    router.start(UsersApp, '#userapp');
});


