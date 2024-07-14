//Day 2: Operators

//Activity 1: Arithmetic Operations
//Task 1: 
let a = 3;
let b = 5;
let c = a+b;
console.log(c);

//Task 2: 
a = 5;
b = 3;
c = a-b;
console.log(c);

//Task 3: 
a = 5;
b = 3;
c = a*b;
console.log(c);

//Task 4: 
a = 6;
b = 3;
c = a/b;
console.log(c);

//Task 5:
a = 6;
b = 4;
c = a%b;
console.log(c);

//Activity 2: Assignment Operators

//Task 6: 
a = 9;
a += 1;
console.log(a);

//Task 7: 
a = 9;
a -= 4;
console.log(a);

//Activity 3: Comparison Operators

//Task 8:
a = 9;
b = 4;
if(a>b){
  console.log("a is greater than b");
}else{
  console.log("a is less than b");
}

//Task 9: 
a= 5;
b= 5;

if(a<=b){
  console.log("a is less than or equal to b");
}else{
  console.log("a is greater than b");
}

//Task 10:
let num = 3;
let num1 ="3";
let num2 = 3;

if(num == num1){
  console.log("num and num1 are equal");
}

if(num === num2){
  console.log("num and num2 are strictly equal");
}

//Activity 4: Logical Operators

//Task 11:
let isStudent = true;
let isAdult = true;

if(isStudent && isAdult){
  console.log("You are a student and an adult");
}else{
  console.log("You are not a student and an adult");
}

//Task 12:
isStudent = false;
isAdult = false;

if(isStudent || isAdult){
  console.log("You are eligible to go to trip");
}else{
  console.log("You are not eligible to go to trip");
}

//Task 13: 
isStudent = true;
console.log(!isStudent);

//Activity 5: Ternary Operator

//Task 14:
num = -5;
console.log(num >= 0 ? "Positive Number" : "Negative Number");
