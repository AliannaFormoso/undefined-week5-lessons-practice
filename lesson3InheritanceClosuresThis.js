// ---------------- Inheritance

class Bird {
    fly() { }
    swim() { }
}
class Penguin extends Bird { }
class Duck extends Bird { }


// ------------ Composition -------------
function flyingCapable() { }
function swimmingCapable() { }
function penguin() {
    swimmingCapable();
}
function duck() {
    flyingCapable();
}

// --------------- Abstractions
class Blueprints { }
class House extends Blueprints { }
let myHouse1 = new House();

// -------------- Prototyped inheritance
let aHouse = {};
let myHouse = Object.create(aHouse);
let yourHouse = Object.create(myHouse);

const mHouse = { color: 'Blue' }
const mmyHouse = Object.create(mHouse)
mmyHouse
mmyHouse.windows
mmyHouse.color
/*[[Prototype]]
: 
Object
color
: 
"Blue"
[[Prototype]]
: 
Object
 */


//  Object.getPrototypeOf()
//  Object.setPrototypeOf()
//  Object.create()

// ---------------- Inheritance with constructor function ------------------
function Dog(name) {
    this.name = name;
}
Dog.prototype.woff = function () {
    console.log(`${this.name} woff`)
}
let dog = new Dog("Tavo")
dog.woff() // Tavo woff



// - --------------------- Inheritance with classes ES2015 ----------------------
class Tiger {
    constructor(name) {
        this.name = name;
    }

    meow() {
        console.log(`${this.name} meow`)
    }
}
let tiger = new Tiger("Kira")
tiger.meow() // Kira meow


// ------------------------ Closures -------------------------
function createGreetingFunction(greeting) {
    return function (name) {
    console.log(greeting + ', ' + name);
    };
   }
   const sayHello = createGreetingFunction('Hello');
   const sayGoodbye =
   createGreetingFunction('Goodbye');
   sayHello('John'); // Hello, John
   sayGoodbye('Mary'); // Goodbye, Mary


function createGreeting(greeting) {
    function withName(name) {
        console.log(`${greeting} ${name}`)
    }
    return withName;}

const sayHi = createGreeting('Hi')
const sayBye = createGreeting('Bye')

sayHi('PP')
sayBye('OO')

// ------------------------ this ---------------
// Global scope: window object
// globalThis

// ==== implicit scope
const obj = {
    name: 'John',
    sayHey: function () {
    console.log('Hello, ' + this.name);
    },
   };
   obj.name; // John
   obj.sayHey(); // Hello, John


// ---------------------- explicit

function sayHola(greeting) {
    console.log(greeting + ', ' + this.name);
   }
   const obje = { name: 'John' };
   // Using call():
   sayHola.call(obje, 'Hello'); // Hello, John
   // Using apply():
   sayHola.apply(obje, ['Hello']); // Hello, John
   // Using bind():
   const sayHolaBound = sayHello.bind(obje);
   sayHolaBound('Hello'); // Hello, John


// --------------------- With new ------
function Person(name) {
    this.name = name;
    this.saySalut = function () {
    console.log('Hello, ' + this.name);
    };
   }
   const john = new Person('John');
   john.saySalut(); // Hello, John


// --------------------- Assignment----------------------------

function printing() {
    for (var i = 1; i<=10; i++) {
        function printer(i) {
            return function() {
                console.log(i)
            }
        }

        setTimeout(printer(i), 1000 * i)
    }
}

printing();


