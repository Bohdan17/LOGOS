//------------------HUMAN-----------------------------------
function Human(name, surname) {
    this.name = name;
    this.surname = surname;
    this.talk = function() {
        console.log("Hello!");
    };
    this.walk = function(speed) {
        return `I can walk with speed ${this.speed} `;
    };
    this.wight = function(masa) {
        return `I have weight ${this.masa} `;
    };
    this.color = function(colorSkin) {
        return `I can walk with speed ${this.speed} `;
    };
}
function Man() {
    
}
function Woman() {
     
}

var human = new Human("Bob", "Kho");
Man.prototype = human;
Woman.prototype = human;

var man = new Man();
var woman = new Woman();

function Librarian() {
    this.books = 100;
    this.read = function() {
        return `I have read ${this.books}`;
    }
}
function Nurse() {
    this.patient = 1;
    this.help = function(){
        return `I need to help ${this.patient} goat`;
    }
}

Librarian.prototype = woman;
Nurse.prototype = woman;

function Hunter() {
    this.animals = 3;
    this.hunt = function() {
        return `I have hunt ${this.animals}`;
    }
}
function Worker() {
    this.buildings = 2;
    this.built = function() {
        return `I have built ${this.buildings}`;
    }
}

Hunter.prototype = man;
Worker.prototype = man;

var nurse = new Nurse();
//nurse.talk();

//------------------ANIMAL-----------------------------------

var animal = {
    canWalk: function() {
        console.log("I can walk!")
    },
    canRun: function() {
        console.log("I can run!")
    },
    wool: function() {
        console.log("I have wool!")
    }
};

var herbivorous = {
    
};

var predator = {
    
};

herbivorous.__proto__ = animal;
predator.__proto__ = animal;

var dog = {
    name: "Johny",
    age: 6,
    color: "white"
};

var lion = {
    name: "Jack",
    age: 7,
    color: "yellow"
};

dog.__proto__ = predator;
lion.__proto__ = predator;

var turtle = {
    name: "Tom",
    age: 2,
    color: "green"
};

var goat = {
    name: "Jack",
    age: 3,
    color: "white"
};

turtle.__proto__ = herbivorous;
goat.__proto__ = herbivorous;

//goat.canWalk();

//---------------------ZOO-----------------------------

function Zoo(nurse, goat){
    this.nurse = nurse;
    this.goat = goat;
}

var myZoo = new Zoo(nurse, goat);
console.log(myZoo.nurse.help());
myZoo.goat.canWalk();