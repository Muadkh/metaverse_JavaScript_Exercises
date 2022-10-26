"use strict";
let getcity='';
function city_country(city,country){
      return (`${city}`+","+`${country}`);

}
getcity=city_country('Mosco','Russia');
console.log(getcity);
getcity=city_country('Toronto','Canada');
console.log(getcity);
getcity=city_country('Rome','Itly');
console.log(getcity);
