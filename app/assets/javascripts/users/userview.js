var Vue = require('vue');

module.exports = Vue.extend({
        template: "#usertemplate",
        data: function () {
            return {
                user: {}
            };
        },
        ready: function(){
            this.$http.get('users/1.json').then(function(response){
                
                console.log(JSON.stringify(response.data));
                this.user = response.data;
            }, function(response){
                
                console.log(JSON.stringify(response));
            });
        },
    });