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
let n=prompt("enter value of n")
n=Number.parseInt()
let i =0;
while(i<n){
  console.log(i)
  i++;
}