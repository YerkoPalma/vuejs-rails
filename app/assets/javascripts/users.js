$(document).on('ready page:change', function() {
    var Vue = require('vue');
    
    Vue.use(require('vue-resource'));
    
    /**
     *  Components
     */
     var UserTitle = Vue.extend({
         template: "#usertitle"
     });
    
    /**
     *  Main Vue instance
     */
    new Vue({
        el: 'body',
        data: {
            users: []
        },
        ready: function(){
            this.$http.get('users.json').then(function(response){
                
                console.log(JSON.stringify(response.data));
                this.users = response.data;
            }, function(response){
                
                console.log(JSON.stringify(response));
            });
        },
        components: {
            'user-title' : UserTitle
        }
    });
    
});


