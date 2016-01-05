$(document).on('ready page:change', function() {
    var Vue = require('vue');
    var VueRouter = require('vue-router');
    
    Vue.use(require('vue-resource'));
    Vue.use(require('vue-router'));
    
    /**
     *  Components
     */
    var UsersList = require('./users/userslist');
    
    /**
     *  Main Vue instance
     */
    var UsersApp = Vue.extend({});
    
    var router = new VueRouter();
    
    router.map({
        '/users': {
            component: UsersList
        }
    });
    
    router.start(UsersApp, '#userapp');
});


