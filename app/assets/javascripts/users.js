$(document).on('ready page:change', function() {
    var Vue = require('vue');
    
    Vue.use(require('vue-resource'));
    
    /**
     *  Components
     */
    var Users = Vue.extend({
        template: "#userstemplate",
        data: function () {
            return {
                users: []
            }
        },
        ready: function(){
            this.$http.get('users.json').then(function(response){
                
                console.log(JSON.stringify(response.data));
                this.users = response.data;
            }, function(response){
                
                console.log(JSON.stringify(response));
            });
        },
    });
    
    /**
     *  Main Vue instance
     */
    new Vue({
        el: 'body',
        components: {
            'users-list' : Users
        }
    });
    
});


