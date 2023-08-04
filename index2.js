// Constructor and new Operator in JavaScript
// Example # 1:
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User('Mairaj');
console.log('user 1 --> ', user.name);
console.log('isAdmin --> ', user.isAdmin);
let user2 = new User('Sameer');
console.log('user 2 --> ', user2.name);
console.log('isAdmin --> ', user2.isAdmin);

// Example # 2 ---> Creating Custom Constructors
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        return "Hi, my name is " + this.name + " and i am " + this.age + " years old";
    };
}

let person1 = new Person('Arsalan', 22);
let person2 = new Person('Owais', 25);
console.log('Person 1 --> ', person1.introduce());
console.log('Person 2 --> ', person2.introduce());

// Prototypes and Inheritance
function Animal(species) {
    this.species = species;
}

Animal.prototype.makeSound = function(sound) {
    return "The " + this.species + " make a sound: " + sound; 
}

let dog = new Animal('Dog');
let cat = new Animal('Cat');

console.log('Dog --> ', dog.makeSound('Woof!'));
console.log('Cat --> ', cat.makeSound('Meow!'));

// Difference Between Constructor function and Class
// Constructor Function
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

// Class
class Rectangles {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
// ------------------------------------------------------------------------------

// JAVASCRIPT CONVERT ARRAY OF ELEMENTS INTO HTML LIST DYNAMICALLY....
// const arr = ['Laptop', 'Mobile', 'Smart Watch', 'Camera', 'Fridge', 'AC', 'LED', 'Washing Machine', 'Juicer Machine'];

// function makeList() {
//     let list = document.createElement('ul');
//     let listData = document.createElement('li');

//     document.body.appendChild();
// }



// Object Method this in JavaScript
// Method can reference the object as this. the value of this is defined at a run time
let person = {
    name: "Mairaj",
    age: 22,
    gender: 'Male',
    greet:  function() {
        return `Hi, my name is ${this?.name}`
        // console.log(`Hi, my name is ${this.name}`);
    }
}
console.log(person.greet());
// person.greet();


// Accessing Object Properties with brackets notation in Javascript
function getObjectPropertyValue(obj, property) {
    return obj[property];
}

const car = {
    make: "Toyota",
    model: "Hilux 4x4"
}

const animal = {
    type: "Dog",
    name: "Max"
}

console.log(getObjectPropertyValue(car, 'make'));
console.log(getObjectPropertyValue(animal, 'name'));

const shape = {
    radius : 10,
    diameter: function() {
        return 2 * this.radius;
    },

    perimeter: function() {
        return 2 * Math.PI * this.radius;
}
}

console.log('Diameter --> ', shape.diameter());
console.log('perimeter --> ', shape.perimeter());