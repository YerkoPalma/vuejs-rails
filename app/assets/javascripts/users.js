$(document).on('ready page:change', function() {
    var Vue = require('vue');
    Vue.use(require('vue-resource'));
    
    /**
     *  Components
     */
    var UsersList = require('./users/userslist');
    
    /**
     *  Main Vue instance
     */
    new Vue({
        el: 'body',
        components: {
            'users-list' : UsersList
        }
    });
    
});


