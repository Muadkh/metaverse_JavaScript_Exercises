"use strick";
let message="I love JavaScript";

function make_shirt(size=message)
{
   if(size== "medium"){

 return console.log("Size of shirt is medium");
    }
    if(size=="small"){
        return console.log("Size of shirt is small");

    }
    return console.log("Size of shirt is large");

}
make_shirt("medium");