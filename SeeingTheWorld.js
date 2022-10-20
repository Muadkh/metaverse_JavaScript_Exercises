"use strict";

let fav_places=["Iceland","Burj Khalifa","Peru","Rome","London"];
let sor_places=[];
let rev_places=[];
alert(fav_places);
alert("Sorted Array: "+`${sor_places=[...fav_places].sort()}`);
alert("Origional Array: " + `${fav_places}`);
alert("Reverse Order: "+`${rev_places=[...fav_places].sort().reverse()}`);
alert("Origional Array: " + `${fav_places}`);
alert("Array order has been changed: "+`${fav_places.reverse()}`);
alert("Reverse to origional order: "+`${fav_places.reverse()}`);
alert("Sorted Array in Aphabetical Order has been changed: "+`${fav_places.sort()}`);
alert("Sorted Array in reverse Alphabetical Order: "+`${fav_places.sort().reverse()}`);