function nbYear(p0, percent, aug, p) {
   let initialvalue = p0;
   let Percentage = percent/100;
   let Years = 0;
    do {
        initialvalue = parseInt(initialvalue + ((initialvalue * (Percentage)) + aug));
        console.log(initialvalue);
        Years++;
   }while (initialvalue < p);
   return Years;
}

console.log(nbYear(1500, 5, 100, 5000));
