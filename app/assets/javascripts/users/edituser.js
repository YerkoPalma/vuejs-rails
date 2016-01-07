var Vue = require('vue');

module.exports = Vue.extend({
        template: "#userform",
        data: function () {
            return {
                title: "Edit user",
                user: {
                    name: "",
                    email: ""
                }
            };
        },
        ready: function(){
                this.$http.get( 'users/' + this.$route.params.user_id + '.json').then(function(response){
                
                this.user.name = response.data.name;
                this.user.email = response.data.email;
            }, function(response){
                
            });
        },
        methods: {
            save: function(){
                this.$http.put(
                    'users/' + this.$route.params.user_id + '.json', //path
                    {user: this.user}, //data
                    {headers: { //options
                        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                        }
                    }
                ).then( 
                    function(response) {
                    //success 
                    
                    this.$route.router.go('/users');
                }, function (response) {
                    //error
                });
            }
        }
    });