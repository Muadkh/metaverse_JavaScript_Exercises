"use strick";
let currentusers=["Adil","Babar","Aslam","Admin","Fareed"].map(l => l.toLowerCase());
let newusers=["Ali","Fareed","Babar","Modood","Asim"].map(l => l.toLocaleLowerCase());
for(uname of newusers){
    if(currentusers.includes(uname) !== true)
    {
    console.log("User name is Available");
    
    }
else{
    console.log("Person will  need to provide new username");
}
}
