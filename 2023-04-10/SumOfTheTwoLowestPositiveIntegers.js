function sumTwoSmallestNumbers(numbers) {
    const ArrangeNumbers = (a,b) => {return a-b};
    const SortedNumbers = numbers.sort(ArrangeNumbers);
    return SortedNumbers[0] + SortedNumbers[1];
}

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
