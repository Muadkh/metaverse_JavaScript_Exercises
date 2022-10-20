"use strict";
let char1="Hello";
let char2="hello";
let num1=10;
let num2=60;
let num3=4;
let myarr=[1,2,3,4,5,6];
console.log("String equality " + `${char1===char2}`);
console.log("String equality " +`${char1.toLowerCase()===char2.toLowerCase()}`);

if (num1<num2 && num1 > 0){
    console.log("number1 is less than number2 but greater than zero");
    
}
else if(num1>num2 || num1 < 20)
{
    console.log("number1 is greater than number3 but less than 20");
}
else 
{
 console.log("Both numbers are equal");
}
console.log("Item is in array "+ myarr.includes(5));
console.log("Item is not in array "+ (myarr.includes(8) !== true));