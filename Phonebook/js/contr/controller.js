app.controller("myCtrl", function(){
    var vm=this;
    
    vm.friends=[
        {
        
        firstname: "Vasa",
        lastname: "bopo",
        email: "vas@gmail.com",
        phone: "098758886323"
    },
         {
        
        firstname: "Anna",
        lastname:"Lirnpo",
        email:"lllili@ukr.net",
        phone:"09843005677"
    }, {
        
        firstname: "Oleg",
        lastname:"Colop",
        email:"olehjjs@gmail.com",
        phone:"0998989911899"
    }, {
        
        firstname: "Olya",
        lastname:"Veron",
        email:"olya@gmail.com",
        phone:"094567672288"
    }
    ];
    
    vm.change=false;

    //Remove function
    vm.remove = function(friend){
        for(var i in vm.friends){
            if(vm.friends[i].phone ===friend.phone){
                vm.friends.splice(i, 1);
            }
        }
        
    };
    
    //Change function
    vm.changeFriends = function(friend){
        
        for(var i in vm.friends){
            if(vm.friends[i].phone===friend.phone){
                vm.changeFriend=vm.friends[i];
                vm.change = true;
            }
        }
    };
    
    
    vm.finishChange = function(){
        vm.changeFriend = {};
        vm.change = false;
    };
    
    //Add function
    vm.addUser = function() {
        //$scope.checker = !$scope.checker;
        var x = {
            firstname: vm.firstname,
            lastname: vm.lastname,
            email: vm.email,
            phone: vm.phone
        };
        vm.friends.push(x);
    }
});