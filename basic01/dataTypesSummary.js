// Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);
// console.log(id)

const bigNumber = 3343232323132312123231n

// Reference Type (Non Primitive)
// Array, Objects, Functions

const heroes = ["Batman", "Shaktiman", "Krish" ]
let myObj= {
  name: "Kshitiz",
  age: 39
}

const myFunction = function (){
  console.log("Hello world");
}

console.log(typeof heroes);