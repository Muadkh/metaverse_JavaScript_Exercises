"use strict";
var mycar = "";
function my_car(manu, model, ...arg) {
  let obj_car = {
    Manufacturer: manu,
    Model: model,
  };

  for (let i = 0; i < get_length(arg); i++) {
    let i = 0;
    let j = i + 1;
    let key = arg[0];
    let value = arg[j];
    obj_car[`${key}`] = value;
  }

  return obj_car;
}
function get_length(arr) {
  //Return Length of Array
  for (let i in arr) {
    var j = i;
  }
  return j;
}

mycar = my_car("Honda", 2017);
console.log(mycar);
mycar = my_car("Honda", 2017, "Colour", "Red"); //Optional Features
console.log(mycar);
