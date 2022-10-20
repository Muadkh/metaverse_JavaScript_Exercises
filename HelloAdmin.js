"use strick";
let usernames=["Adil","Babar","Aslam","Admin","Fareed"];
 

for (let user in usernames){

if (usernames[user]!=="Admin"){
    console.log("Hello " + `${usernames[user]}` + " Welcome to our website");}
else {
    console.log("Hello " + `${usernames[user]}` + " Welcome to our website. Would you like to see some reports");
}
}
 
