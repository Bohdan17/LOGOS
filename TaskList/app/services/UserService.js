app.factory('UserService', function() {
    return {
        getTasks: function () {
            return arr;
        },
        
       
        addTask : function() {
            var x = {
                Number: arr.Number,
                description: arr.Description,
                isDone: arr.isDone
            };

            arr.push(x);
        }
    }
})

var arr = [
    {
        Number: "1",
        Description:"create coffee",
        isDone:"no"
    },
    {
        Number: "2",
        Description:"drink coffee",
        isDone:"yes"
    }, {
        Number: "3",
        Description:"programing",
        isDone:"yes"
    }, {
        Number: "4",
        Description:"sleep",
        isDone:"no"
    } ];