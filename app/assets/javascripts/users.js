$(document).on('ready page:change', function() {
    var Vue = require('vue');
    
    
    Vue.use(require('vue-resource'));
    
    console.log("reached users.js. Vue is " + (typeof Vue === 'undefined' ? "Bad" : "Ok"));
    
    new Vue({
        el: 'body',
        data: {
            users: []
        },
        ready: function(){
            this.$http.get('users.json').then(function(response){
                console.log("success");
                console.log(JSON.stringify(response.data));
                this.users = response.data;
            }, function(response){
                console.log("fail");
                console.log(JSON.stringify(response));
            });
            console.log("Vue ready");
        }
    });
    
});


