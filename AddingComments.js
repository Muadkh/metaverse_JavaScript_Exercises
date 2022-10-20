"use strict";
var num="Dean john wilson"; // Define a string

/*
Construct a function that take string as argument   
and return string in title case. function has been constructed with for loop and other methods.
*/
function gettitle(num)
{
    var tarr= num.toLocaleLowerCase().split(" "); //convert to whole string into lowercase.
    var itarr=[];
    var sli=[];
    for (let i=0;i< tarr.length;i++ ) //for loop for extracting 1st letter and make desired array.
{
    itarr[i]=tarr[i].charAt(0).toUpperCase() + tarr[i].slice(1);        
}
return itarr.toString(); //Conver to sting and return.
}

window.alert(`${num.toUpperCase()}, ${num.toLocaleLowerCase()}, ${gettitle(num)}`); //Display in required format 

/*
This program display the name of person stored in num variable in uppercase, lowercase and titlecase. 
Uppercase & lowercase methods are already available in javascript but not titlecase. For that function has benn constructed. 

*/
