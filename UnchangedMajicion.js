"use strict";
let magicions=["David Copperfield","Doug Henning","Lance Burton","Ricky Kak","Mark Wilson"];
function show_magicions(list_0){

      for( let names of list_0)
      {
            console.log(names);
      }
      } 
 
function make_great(list_0){     
      let great_magicion=[];
      for(let names of list_0){
      let num1=names + " The Great";
      great_magicion.push(num1);
            }
      for( let names of great_magicion)
      {  console.log(names);
            }        
      }

  show_magicions(magicions);
  make_great(magicions);
  show_magicions(magicions);