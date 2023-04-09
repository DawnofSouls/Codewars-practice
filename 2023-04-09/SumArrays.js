// Sum Numbers
function sum (numbers) {
    "use strict";
    let Total = 0;
    numbers.forEach(element => {
         Total += element;
    });
    return Total;
};

console.log(sum([1, 5.2, 4, 0, -1]));