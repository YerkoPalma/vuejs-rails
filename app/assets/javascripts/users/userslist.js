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
                
                this.users = response.data;
            }, function(response){
                
                console.log(JSON.stringify(response));
            });
        },
        methods: {
            erase: function(user){
                if ( window.confirm('Are you sure?') ) {
                    this.$http.delete(
                        'users/' + user.id + '.json', 
                        {}, 
                        {headers: { //options
                            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                            }
                        }
                    ).then(function(response){
                        
                        //force data reload
                        this.$http.get('users.json').then(function(response){
                
                            this.users = response.data;
                        }, function(response){
                            
                            console.log(JSON.stringify(response));
                        });
                        
                        this.$route.router.go('/users');
                    }, function(response){
                        
                        console.log(JSON.stringify(response));
                    });
                }
            }
        }
    });