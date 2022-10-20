"use strict"
let my_array=[];
let elements=["Mountains", "Rivers","Countries","Cities","Languages"];
for(let i=0;i<elements.length;i++)
{

my_array[i]=prompt("Please Make an Array of " +`${elements[i]}` +" seperated by comma",);


}
alert(my_array);