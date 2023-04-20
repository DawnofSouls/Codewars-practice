function moveZeros(arr) {
    let TotalZeros = 0;
    arr = arr.filter(x => !(x === 0));

    for (let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            TotalZeros++;
        }
    }

    for (let i = 0; i < TotalZeros; i++){
        arr.push(0);
    }
    return arr;
  };

  console.log(moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ]));
  console.log(moveZeros([ 3, false, 5, 1, 1, null, null, '8', null, 6, '1', true, null, '4', false, false, null, '5', '2', +0, [], 4, '5', 2, +0, +0 ]));

  /*     for(let i = 0; i < TotalZeros; i++){
        arr.push(0);
    } */