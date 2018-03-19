'use strict'

// let
function testLet(){
    let a = 30;
    if(true) {
        let a = 50;
        console.log(a);
    }

    console.log(a);
}

testLet();
console.log("\n--------------------------\n");

// const
const arr = [];
arr.push(1);
arr.push(2);
console.log(arr);
console.log("\n--------------------------\n");

/* This should generate an error since you cant reassign a value to a const variable */
// arr = [9, 0, 1, 3];

// classes
class Users{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    /* static methods ... */
    static countUsers(){
        console.log("There are 50 users");
    }

    /* normal methods */
    register(){
        console.log(this.username + " is now registered!");
    }
}

/* instantiating a class and using its normal methods. */
let obed = new Users('kizito', 'ob@me', '12345');
obed.register();

/* using static methods of a class. */
Users.countUsers();
console.log("\n--------------------------\n");

//  class inheritance ...
class Member extends Users{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username + " is subscribed to the " + this.package + " package!");
    }
}

let pius = new Member('pius', 'pee@le.com', '12345', 'premium');
pius.register();
pius.getPackage();
Member.countUsers();
console.log("\n--------------------------\n");

//  new string methods ...
let theString = "Hello, my name is Obed and I love JavaScript!";

/* startsWith */
console.log(theString.startsWith("Hello"));
console.log(theString.startsWith("love"));
/* endsWith */
console.log(theString.endsWith("javascript"));
console.log(theString.endsWith("JavaScript!"));

/* includes */
console.log(theString.includes("love"));
console.log(theString.includes("JavaScript"));
console.log(theString.includes("loves"));
console.log("\n--------------------------\n");

// new/improved number methods ...
/* hex */
console.log(0xFF);
/* binary */
console.log(0b100110);
/* octal */
console.log(0o672);

console.log("-------");

 /* number methods */
 console.log(Number.isFinite(-2));
 console.log(Number.isFinite(3));
 console.log(Number.isFinite(Infinity));
 console.log(Number.isFinite(NaN));
 console.log(Number.isNaN(NaN));
 console.log(Number.isNaN(2));
 console.log(Number.isInteger(NaN));
 console.log(Number.isInteger("23"));
 console.log(Number.isInteger(12));
 console.log(Number.isInteger(-4));
 console.log("\n--------------------------\n");

//  default params ...
function greet(greeting = "Hello World"){
    console.log(greeting);
}

/* call without params */
greet();
/* call with a param */
greet("Ni hao");
console.log("\n--------------------------\n");

// spread operator `...`
let args1 = [1, 2, 3];
let args2 = [4, 5, 6];
function test(){
    console.log(`${args1},${args2}`);
}

/* es6 */
test(...args1, ...args2);
console.log("\n--------------------------\n");

// set and map
let myArray = [6, 5, 12, 9, 5, 89, 100, 43, 78];
let mySet = new Set(myArray);
mySet.add('1000');
mySet.add({a: 'mongo', b: 'mysql', c: NaN, d: 1234});
mySet.delete(89);
// mySet.clear();
// mySet.add("Gawu-Mensah");
// console.log(mySet.size);
// console.log(mySet);

mySet.forEach(val => {
    console.log(val);
});

console.log("--------");

let myMap = new Map([['a1', 'Hello'], ['b2', 'Goodbye']]);
myMap.set('c3', "Foo");
myMap.delete('a1');
console.log(myMap);

// WeakSet and WeakMap ...
// As of the time I was trying this, weakset and weak map weren't implemented in node v8.9.4 ...
// let carWeakSet = new WeakSet;
// let car1 = {
//     make: "Honda",
//     model: "Civic"
// }
// carWeakSet.add(car1);

// let car2 = {
//     make: "Toyota",
//     model: "Camry"
// }
// carWeakSet.add(car2);
// console.log(carWeakSet);

console.log("\n--------------------------\n");

// Promises ...
/* Immediately resolved ... */
let myPromise = Promise.resolve('Foo');
myPromise.then(res => console.log(res));

let anotherPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(4), 500);
});
anotherPromise.then(res => {
    res += 3;
    console.log(res);
    console.log("\n--------------------------\n");
});

function getData(method, url){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response); 
            } else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.send();
    });
}

/* the following block of code should be run in a browser ... */
// getData('GET', 'http://jsonplaceholder.typicode.com/users').then(data => { //DevSkim: ignore DS137138 
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });

//  generators ...
function *g1(){
    console.log("Hello");
    yield "Yield 1 Ran ...";
    console.log("World");
    yield "Yield 2 Ran ...";
    return "Returned ...";
}

let g = g1();
for(let val of g){
    console.log(val);
}

// console.log(g.next());
// console.log(g.next().value);
// console.log(g.next());