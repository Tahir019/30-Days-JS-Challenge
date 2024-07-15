//Day 3: Control Structures

//Activity 1: If-Else Statement

//Task 1:
let num = 3;

if(num>0){
  console.log("Positive number");
}
else if(num<0){
  console.log("Negative number");
}
else{
  console.log("Zero");
}

//Task 2:
let age = 17;
if(age>=18){
  console.log("Person is eligible to vote");
}else{
  console.log("Person is not eligible to vote");
}
//Activity 2: Nested If-Else Statement

//Task 3:
let num1 = 23;
let num2 = 16;
let num3 = 25;

if(num1>num2){
  if(num1>num3){
    console.log(`${num1} is greater than ${num2} and ${num3}`);
  }else{
    console.log(`${num3} is greater than ${num1} and ${num2}`);
  }
}else{
  if(num2>num3){
    console.log(`${num2} is greater than ${num1} and ${num3}`);
  }else{
    console.log(`${num3} is greater than ${num1} and ${num2}`);
  }
}

//Activity 3: Switch Case

//Task 4:
let ch =6;

switch(ch){
  case 1: console.log("Sunday");
          break;
  case 2: console.log("Monday");
          break;
  case 3: console.log("Tuesday");
          break;
  case 4: console.log("Wednesday");
          break;
  case 5: console.log("Thursday");
          break;
  case 6: console.log("Friday");
          break;
  case 7: console.log("Saturday");
          break;
}

//Task 5: 

let grade ="A";

switch(grade){
  case "A": console.log("Grade: A");
            break;
  case "B": console.log("Grade: B");
            break;
  case "C": console.log("Grade: C");
            break;
  case "D": console.log("Grade: D");
            break;
  case "F": console.log("Grade: F");
            break;
}

//Activity 4: Conditional (Ternary) Operator

//Task 6: 
let a = 7;
let result = (a % 2 == 0) ? "Even Number" : "Odd Number";
console.log(result);

//Activity 5: Combining Conditions

//Task 7: 
let year = 2024;
if(year%4 == 0 || year%100 !== 0 && year%400 == 0){
  console.log("Leap Year");
}else{
  console.log("Not a Leap Year");
}
