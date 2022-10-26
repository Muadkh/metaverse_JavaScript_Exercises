"use strict";

function my_sandwich(...args){

console.log("Status of Sandwich That you have ordered.......");
for(let ing of args){
      console.log("Adding "+ `${ing}` + " in your Sandwich");

}
 console.log("Your Sandwich is ready");
}
my_sandwich('Butter','Egg','Jam');
my_sandwich('Beef','Honey','Cheese');
my_sandwich('Chicken','Apple','Jam');