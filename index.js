// Destructuring:

// with Array
const arr = ['firstName', 'lastName', 'age', 'gender'];

const [firstName, lastName] = arr;

console.log(firstName);
console.log(lastName);

// with Object:
const person = {
    name: 'AliAhmed',
    age: 17,
    gender: 'male'
}

const { name, age } = person;
console.log(name);
console.log(age);

// Closures:
// firstly, we understand the concept of Lexical Environment
// Example of Lexical Environment
function outer() {
    let x = 5;

    function inner() {
        let y = 8;
        console.log("the sum of x and y is equal to ",  x + y);
    }

    inner();
}
outer();

// Now the Example oF Closure:
function createCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

let counter1 = createCounter();
console.log("Counter1 ---> ", counter1());
console.log("Counter1 ---> ", counter1());
console.log("Counter1 ---> ", counter1());
console.log("Counter1 ---> ", counter1());


// Async Await
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


async function run() {
    console.log('Before Fetching Data... ');
    const data = await fetchData('https://jsonplaceholder.typicode.com/users');
    console.log('After Fetching Data... ', data);
}
run();

// Template Literal
let myName = 'Muhammad Mairaj';
let myAge = 22;
let userInfo = `My name is ${myName} and I am ${myAge} years old`;
console.log('userInfo --> ', userInfo);

// Getter & Setter Method:
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // getter Method for Name;
    get getName() {
        return this.name;
    }
    // setter Method for Name;
    set setName(myName) {
        this.name = myName;
    }

    // getter Method for Age;
    get getAge() {
        return this.age;
    }
    // setter Method for Age;
    set setAge(myAge) {
        this.age = myAge;
    }
}


const student = new Student('AliAhmed', 17);
console.log('student ---> ', student.getName);
console.log('student ---> ', student.getAge);
student.setName = 'Aqib';
console.log('After set new Student Name --> ', student.getName);
student.setAge = 21;
console.log('After set new Student Age --> ', student.getAge);

// Promise
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }
        // console.log('Promise is Resolved... ');
        return response.json();
    })
    .catch((error) => {
        console.log('Promise is Rejected... ');
    })
}

fetchData()
.then((data) => {
    console.log('Promise is Resolved... ', data);
})
.catch((error) => {
    console.log('Promise is Rejected... ', error);
});

// Meta Programming
const personObj = {}; 
Object.defineProperty(personObj, "name", {
    get: function() {
        return this._name;
    },
    set: function(value) {
        this._name = value;
    } 
});

console.log('Before Person Obj --> ', personObj);
personObj.name = 'Abdul Rahim';
console.log('After Person Obj --> ', personObj);


// Random String Generate in one-liner
const randomString = Math.random().toString(36).slice(2);
console.log('Random String --> ', randomString);

// Extract Domain Name from an Email
const email = 'contact@example.com';
const getDomainName = email.substring(email.indexOf('@') + 1);
console.log('Get Domain Name ---> ', getDomainName);

// Generate OTP
function generateOTP() {
    let digits = '0123456789';
    let OTP = '';

    for(let i=0; i<6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

console.log('Generate OTP', generateOTP());
console.log('Generate OTP', generateOTP());
console.log('Generate OTP', generateOTP());
console.log('Generate OTP', generateOTP());

// Check if an array is empty or not
let arr1 = [];
let arr2 = [1, 2, 3, 4, 5];

const isArr1Empty = Array.isArray(arr1) && arr1.length > 0;
const isArr2Empty = Array.isArray(arr2) && arr2.length > 0;
console.log('isArray1', isArr1Empty);
console.log('isArray2', isArr2Empty);

// Check if a variable is an array or not
const city = 'karachi';
const cities = ['Lahore', 'Islamabad', 'Lahore', 'Karachi'];

const checkArray = (arr) => Array.isArray(arr);
console.log(checkArray(city));
console.log(checkArray(cities));

// Favor Object Literal than Switch Statement
// Good Way
function getColor(fruits) {
    switch(fruits) {
        case 'Apple':
            return 'red';
        case 'Orange':
            return 'orange';
        case 'Banana':
            return 'yellow';
        case 'Kiwi':
            return 'green';
        default:
            return 'unknown';
    }
}
console.log('getColor --> ', getColor('Apple'));
console.log('getColor --> ', getColor('Mango'));
// Better Way
const fruitsColor = {
    apple: 'red',
    orange: 'orange',
    mango: 'yellow',
    kiwi: 'green',
    banana: 'yellow'
}

function getFruitsColor(fruits) {
    return fruitsColor[fruits] || 'unknown';
}
console.log('getFruitColor --> ', getFruitsColor('kiwi'));
console.log('getFruitColor --> ', getFruitsColor('pineapple'));

