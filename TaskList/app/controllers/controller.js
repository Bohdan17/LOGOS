
app.controller("myCtrl", ['UserService', function(UserService) {
    var vm = this;
    vm.change=false;
    vm.tasks = UserService.getTasks();
    
    //Add the task
    vm.addTask = function() {
        UserService.addTask();
    };
    
    //Remove the task
    vm.remove = function(task){
        for(var i in vm.tasks){
            if(vm.tasks[i].Description === task.Description){
                vm.tasks.splice(i, 1);
            }
        }
    };

    //Change the task
    vm.changeTasks = function(task){
        for(var i in vm.tasks){
            if(vm.tasks[i].Description===task.Description){
                vm.changeTask=vm.tasks[i];
                vm.change = true;
            }
        }
    };

    vm.finishChange = function(){
        vm.changeTask = {};
        vm.change = false;
    };
    

}]);  