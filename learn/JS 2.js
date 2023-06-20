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

/*let num = [1,2,3,4,5]
let b = num.toString()
console.log(b)
let c = num.join("_")
console.log(c,typeof c)
num.pop()
console.log(num)
num.push(6)
console.log(num)
console.log(num.shift())
console.log(num)
console.log(num.unshift(7))
console.log(num)
console.log(delete num[0])*/

//FOR LOOP IN ARRAY
/*let num = [1,2,3,4,5]
for(let i=0;i<num.length;i++){
  console.log(num[i])
}

num.forEach((element)=>{                    //helpful when we make react apps
  console.log(element*element)
})*/

//ARRAY.from
/*let name = "PARTH"
let arr = Array.from(name)
console.log(arr)*/

//for of
/*let num = [1,2,3,4,5]
for(let i of num){
  console.log(i)
}*/

//for in
/*let num = [1,2,3,4,5]
for(let i in num){
  console.log(i)
}*/

//MAP-makes a new array 

/*let arr=[12,10,20,4]
let a = arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value+1
})*/

//FILTER-Creates a new array for those values which passes the test
/*let arr = [12,10,20,4]
let a2 = arr.filter((value)=>{
  return value<10
})
console.log(a2)*/

//Array reduce
/*let arr=[12,10,20,4]
let arr2=arr.reduce((a1,a2)=>{
  return a1+a2
})
console.log(arr2)*/
//explaination for this is that it will take 12 and 10 as a1 and a2 and then their result would be 22
//then it would take 22 and 20 as a1 and a2 then their result would be 42
//then it would take 42 and 4 as a1 and a2 then their result would be 46


for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
