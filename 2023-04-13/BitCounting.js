var countBits = function(n) {
    let NumberStringArray = n.toString(2).split('').map(Number);
    let BitCount = 0;
    NumberStringArray.forEach(element => {
        if (element === 1){
            BitCount++;
        }
    });
    return BitCount;
  };

  console.log(countBits(1));

  /* var countBits = function(n) {
    let NumberStringArray = n.toString().split('').map(Number);
    let BitCount = 0;
    NumberStringArray.forEach(element => {
        if (element === 0 && NumberStringArray.length === 1){
            return 1;
        } else {
            BitCount++;
        }
    });
    return BitCount;
  };
*/