//CONDTIONAL STATEMENTS
//IF
//IF-ELSE
//IF-ELSE IF-ELSE

/*a = 1
if(a%2==0){
    console.log("Even");
}
else{
    console.log("Odd")
}*/
/*
let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age"); 
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
*/

//ternary operator
/*a=10
console.log(a<9?"9k" :"not ok ")*/

//Types of Loops

//FOR LOOP
/*for(let i=0;i<5;i++){
  console.log(i)
}*/

//FOR IN LOOP
/*let obj={
  p:1,
  a:2,
  r:3,
  t:4,
  h:5
}
for (let a in obj){
  console.log("letter "+a+" is at position "+obj[a])
}*/

//FOR OF LOOP
/*
for(let b of "PARTH"){
  console.log(b)
}
*/

//WHILE LOOPS
/*let n = prompt("enter value of n")
n=Number.parseInt(n)
let i = 0;
while(i<n){
  console.log(i)
  i++;
}*/

//DO WHILE LOOP
/*let n = prompt("enter value of n")
n=Number.parseInt(n)
let i = 0;
do{
  console.log(i)
  i++;
}
while (i<n)*/

//FUNCTION-set of statement that perform a task
/*
function avg(x,y){
  console.log("done")
  return(x + y)/2
}
let x = prompt("enter number 1")
x = Number.parseInt(x)
let y = prompt("enter number 2")
y = Number.parseInt(y)

console.log("AVERAGE is ",avg(x,y))
*/

//STRINGS-object that represent sequence of characters 
/*let name = "PARTH"
console.log(name.length)
let name2 = 'parth'
console.log(name2)*/

//METHODS-actions which can be performed on objects
/*
let namee = "Parth"
console.log(namee.length)
console.log(namee.toUpperCase())
console.log(namee.toLowerCase())
console.log(namee.slice(2, 4))
console.log(namee.slice(2))
console.log(namee.replace("Parth", "PM"))
let friend = "PRIME"
console.log(name.concat(" is a friend of ", friend, " Ok"))
let friend2 = "      REVEAR        "
console.log(friend2)
console.log(friend2.trim())
*/

//ARRAYS-collection of sum items

/*let marks=[91,91,92,95,93,false,"P"]
console.log(marks)
console.log(marks.length)
marks[0]=92
console.log(marks)
console.log(typeof marks)*/

let num = [1,2,3,4,5]
let b = num.toString()
console.log(b)
