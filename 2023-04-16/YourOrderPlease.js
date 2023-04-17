function order(words) {
  let Array = words.split(" ");
  let OrderedArray = [];
    for (let i = 1; i <= Array.length; i++){
        OrderedArray.push(Array.find(array1 => array1.includes(i)));
    }
  return OrderedArray.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
