var summation = function (num) {
  let Add = 1;
  let Total = 0;
  for (let i = 0; i < num; i++) {
    Total += Add;
    Add++;
  }
  return Total;
};
