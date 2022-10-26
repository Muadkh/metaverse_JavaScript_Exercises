"use strict";
var getalbum="";
function make_album(artist,title,track){
       let obj_album={
             'artist': artist,
              'title': title }
            if (track){
                  obj_album.track=track;
            }

       return obj_album;           
}

getalbum= make_album('Ali Zafar','Haqa Pani');
console.log(getalbum);
getalbum=make_album('Rahat Fati Ali','Back 2 Love');
console.log(getalbum);
getalbum=make_album('Atif Aslam','Dil Meri Na Sune',12);
console.log(getalbum);
