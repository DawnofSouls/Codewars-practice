function removeSmallest(numbers) {
    let NumberedArray = [];
    numbers.forEach(element => {
        NumberedArray.push(element);
    });
    const NumberedSort = numbers.sort((a,b) => a-b);

    let Index = NumberedArray.indexOf(NumberedSort[0])
    NumberedArray.splice(Index,1)
    return NumberedArray;
  };

  console.log(removeSmallest([5, 3, 2, 1, 4]));