/*console.log("This program adds 1,2 and 54")
function add(a,b,c){
    return a+b+c;
}
let a = add(1,2,54)
console.log(a)*/

//variables are just like containers 

/*let a2=67
console.log(a2)
a2='parth'
console.log(a2)*/     

//var is used to declare a variable it was used before es6 update

/*console.log("Javascript is a dynamic language")
var b='parth'
{
    var b= 'parth2'
    console.log(b)
}
console.log(b)
//diff between var and let
console.log("Javascript is a dynamic language")
let c='parth'
{
    let c= 'parth2'
    console.log(c)
}
console.log(c)*/

//you can neither declare a variable with the same name in the same scope nor you can redeclare a variable with the same name in the same scope 

/*const d='Parth'
let d=5*/ //throws an error because constant can not be changed

//JS have 7 primitive data types
/*
N-Null
N-Number
S-Symbol
S-Sting
B-Boolean
B-Bigint
U-Undefined
*/

// Object is non primitive Data Type

/*let e=null;
let e1=345;
let e2='parth';
let e3=true;
let e4=BigInt("567")
let e5=Symbol("I am a nice symbol")
let e6=undefined;
console.log(e,e1,e2,e3,e4,e5,e6)
console.log(typeof(e),typeof(e1),typeof(e2),typeof(e3),typeof(e4),typeof(e5),typeof(e6))*/

//Objects 

/*const item={
    "Parth": true,
    "Samay": false,
    "Rohan": "true",
    "Shubham": 67,
    "Rahul": undefined
}
console.log(item["Shubham"])*/


//Ques 1-Create a variable of type string and try to add a value number to it
/*var a="parth"
var b=5
console.log(a+b)*/

//Ques 2-Use typeof operator to find data type of string in last Question
/*var a="parth"
var b=5
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(a+b))*/

//Ques 3-Create a constant object in java script can you change it to hold a number later
/*const item={
    "Parth": true,
}
item= 5
console.log(item)*/
//answer is no because const can not be changed


//Ques 4-Try to add new key to the const Object in Problem 3,Were you able to do it
/*const item={
    "Parth": true,
}
item["Samay"]=false
console.log(item)*/
//yes we can add new key to the const object



//Ques 5-Write a program to create a dictionary of 2 words
/*const dict ={
    interlanguage: "A common language used by speakers of different languages.", 
    tuxedo:"A dress jacket, usually black with satin or grosgrain lapels, worn for formal or semiformal occasions. Also called dinner jacket"
}
console.log(dict['tuxedo'])
console.log(dict['interlanguage'])*/

//OPERATORS

/* ARTHERMATIC OPERATORS
let a=5
let b=6
console.log("a + b =",a+b)
console.log("a - b =",a-b)
console.log("a * b =",a*b)
console.log("a / b =",a/b)
console.log("a % b =",a%b)
console.log("a ** b =",a**b)
console.log("a++ =",a++)
console.log("a-- =",a--)
console.log("++a =",++a)
console.log("--a =",--a)*/

/*ASSIGNMENT OPERATORS
a=8
a+=2
console.log(a)
a-=2
console.log(a)
a*=2
console.log(a)
a/=2
console.log(a)
a%=2
console.log(a)
a**=2
console.log(a)*/

/*COMPARISON OPERATORS8
let a=6
let b=7
console.log(a==b)
console.log(a!=b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
c=5
d="5" 
console.log(c===d)
console.log(c!==d)*/

/*LOGICAL OPERATORS
let a=5
let b=6
console.log(a==b && a>b)
console.log(a==b || a>b)
console.log(!(a==b && a>b))*/

//conditional statements

let a = prompt("Enter your age")
a = Number.parseInt(a)
if(a>0){
    alert("You are a kid")
}