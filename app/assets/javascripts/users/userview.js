var Vue = require('vue');
var url = require('url');

console.log( url.parse(window.location.href).hash );

module.exports = Vue.extend({
        template: "#usertemplate",
        data: function () {
            return {
                user: {}
            };
        },
        ready: function(){
            //dirty hack, should find a vue better option
            this.$http.get(url.parse(window.location.href).hash.substr(2) + '.json').then(function(response){
                
                this.user = response.data;
            }, function(response){
                
                //console.log(JSON.stringify(response));
            });
        },
    });