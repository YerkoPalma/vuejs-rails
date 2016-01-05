var Vue = require('vue');

module.exports = Vue.extend({
        template: "#userstemplate",
        data: function () {
            return {
                users: []
            };
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