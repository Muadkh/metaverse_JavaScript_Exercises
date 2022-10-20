"use strict";
var num="Dean john wilson";
function gettitle(num)
{
    var tarr= num.toLocaleLowerCase().split(" ");
    var itarr=[];
    var sli=[];
    for (let i=0;i< tarr.length;i++ )
{
    itarr[i]=tarr[i].charAt(0).toUpperCase() + tarr[i].slice(1);        
}
return itarr.toString();
}

window.alert(`${num.toUpperCase()}, ${num.toLocaleLowerCase()}, ${gettitle(num)}`);
