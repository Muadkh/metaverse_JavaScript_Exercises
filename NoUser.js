"use strick";
let usernames=["Adil","Babar","Aslam","Admin","Fareed"];
 
if(usernames.length!==0){
for (let user in usernames){

console.log("Hello " + `${usernames[user]}` + " Welcome to our website");

 }
}
else {
    console.log("You need to find some users");
}

usernames.length=0;
console.log("Now no user name exist");