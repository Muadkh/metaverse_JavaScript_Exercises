"use strick";
let age = 63;
if (age > 0 && age < 2) {
  console.log("Person is a baby");
} else if ((age) >= 2 && age < 4) {
  console.log("person is Toddler");
} else if ((age) >= 4 && age < 13) {
  console.log("person is Kid");
} else if ((age) >= 13 && age < 20) {
  console.log("person is Teenager");
} else if ((age) >= 2 && age < 65) {
  console.log("person is Adult");
} else if ((age) >= 65) {
  console.log("person is Elder");
}
else
{
  console.log("Provide valid age");
}