var Vue = require('vue');

module.exports = Vue.extend({
        template: "#userform",
        data: function () {
            return {
                title: "Add user",
                user: {
                    name: "",
                    email: ""
                }
            };
        },
        methods: {
            save: function(){
                this.$http.post(
                        'users.json', //path
                        {user: this.user}, //data
                        {headers: { //options
                            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                            }
                        }
                    ).then( 
                        function(response) {
                        //success 
                        console.log("this.$router " + typeof this.$router);
                        console.log("this.router " + typeof this.router);
                    }, function (response) {
                        //error
                    });
            }
        }
    });