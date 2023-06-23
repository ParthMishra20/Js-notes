console.log("This program adds 1,2 and 54")
function add(a,b,c){
    return a+b+c;
}
let a = add(1,2,54)
console.log(a)

//variables are just like containers 

let a2=67
console.log(a2)
a2='parth'
console.log(a2)     

//var is used to declare a variable it was used before es6 update

console.log("Javascript is a dynamic language")
var b2='parth'
{
    var b= 'parth2'
    console.log(b2)
}
console.log(b2)
//diff between var and let
console.log("Javascript is a dynamic language")
let c2='parth'
{
    let c= 'parth2'
    console.log(c2)
}
console.log(c2)

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

let e=null;
let e1=345;
let e2='parth';
let e3=true;
let e4=BigInt("567")
let e5=Symbol("I am a nice symbol")
let e6=undefined;
console.log(e,e1,e2,e3,e4,e5,e6)
console.log(typeof(e),typeof(e1),typeof(e2),typeof(e3),typeof(e4),typeof(e5),typeof(e6))

//Objects 

const item={
    "Parth": true,
    "Samay": false,
    "Rohan": "true",
    "Shubham": 67,
    "Rahul": undefined
}
console.log(item["Shubham"])



console.log("OPERATORS")

console.log("ARTHERMATIC OPERATORS")
let a3=5
let b3=6
console.log("a + b =",a3+b3)
console.log("a - b =",a3-b3)
console.log("a * b =",a3*b3)
console.log("a / b =",a3/b3)
console.log("a % b =",a3%b3)
console.log("a ** b =",a3**b3)
console.log("a++ =",a3++)
console.log("a-- =",a3--)
console.log("++a =",++a3)
console.log("--a =",--a3)

console.log("ASSIGNMENT OPERATORS")
a4=8
a4+=2
console.log(a4)
a4-=2
console.log(a4)
a4*=2
console.log(a4)
a4/=2
console.log(a4)
a4%=2
console.log(a4)
a4**=2
console.log(a4)

console.log("COMPARISON OPERATORS")
let a5=6
let b5=7
console.log(a5==b5)
console.log(a5!=b5)
console.log(a5>b5)
console.log(a5<b5)
console.log(a5>=b5)
console.log(a5<=b5)
c5=5
d5="5" 
console.log(c5===d5)
console.log(c5!==d5)

console.log("LOGICAL OPERATORS")
let a6=5
let b6=6
console.log(a6==b6 && a6>b6)
console.log(a6==b6 || a6>b)
console.log(!(a6==b6 && a6>b6))

console.log("conditional statements")
let a7 = prompt("Enter your age")
a7 = Number.parseInt(a7)
if(a7>0){
    alert("You are a kid")
}


  
