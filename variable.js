// 1. Use Strict
// added in ES5
// use this for Vanila Javascript

'use strict';

// 2. Varible
// let (added in ES6)

let name1 = 'sangjun';
console.log(name1);
name1 = 'hello';
let globalName = 'globalSangjun'

// 블록스코프
{
    let name2 = 'sangjun';
    console.log(name2);
    name2 = 'hello';
    console.log(name2);
    console.log(globalName);
}

// var (don't ever use this!)
// var hoisting (move, declaration from bottom to top)
// has no block scope
console.log(age)
age = 4;
console.log(age);
var age

{
    age2 = 4;
    var age2;
    console.log(age2)
}

// 3. Constants
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Varibale types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box-container
// function, fist-class function

const count = 17;
const size = 17.1;
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size} `);

// number - special numeric values : infinity, -infinity, Nan
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);