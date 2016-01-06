var Vue = require('vue');

module.exports = Vue.extend({
        template: "#usertemplate",
        data: function () {
            return {
                user: {}
            };
        },
        ready: function(){
            
            console.log( this.$route.path );
            
            this.$http.get( this.$route.path + '.json').then(function(response){
                
                this.user = response.data;
            }, function(response){
                
            });
        },
    });