"use strict";
let myarr=["Daniyal","Aliyan","Ali"];
//let new_quest=prompt(" Mr Ali is not comming. Whome you are going to invite ? ");
let big_table="I have found a big Dinner table and i want to invite some more people ";
//myarr[2]=new_quest;
let more_guest=[];
let newarr=[];
let po=[];
//let in_message0="Dear "+ `${myarr[0]}`+ " I send this invitation for dinner party at my house";
//let in_message1="Dear "+`${myarr[1]}`+ " I send this invitation for dinner party at my house";
//let in_message2="Dear "+`${myarr[2]}`+ more_guest.split(" ");;
//alert(in_message0);
//alert(in_message1);
//alert(in_message1);
//alert(in_message2);
//alert("Guests List: " + " "+ `${myarr[0]}` + " " + `${myarr[1]}` + " " + `${myarr[2]}`);
alert(big_table);
more_guest=prompt("Enter Three new guests name seperated by comma ',' ");
newarr=more_guest.split(",");
myarr.unshift(newarr[0]);
myarr.splice(2,0,newarr[1]);
myarr.push(newarr[2]);
alert("Dear " +`${myarr[0]}`+" "+ `${myarr[1]}`+" "+  `${myarr[2]}`+" "+ `${myarr[3]}`+" "+`${myarr[4]}`+" "+  `${myarr[5]}`+ " "+  " I send this invitation for dinner party at my house"); 
alert("Due to some issues, I can invite only Two Persons");
for(let i=0; i<4;i++)
{
po[i]=myarr.pop();
alert("Sorry "+`${po[i]}`+", "+"i can\'t invite you at dinner"); 

}
po.length=0;
for(let j=0; j<myarr.length;j++)
{
alert("Hi "+`${myarr[j]}`+", "+"You are still invited for dinner");

}
myarr.length=0;
if(myarr.length==0)
{
    alert("Now list is empty");
}