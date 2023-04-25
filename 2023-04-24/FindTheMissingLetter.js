function findMissingLetter(array){
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    if (array[0] === array[0].toUpperCase()) {
      alphabet = [...alphabet];
    } else {
      alphabet = [...alphabet].map((x) => x.toLowerCase());
    }

    let AlphabetStartIndex = alphabet.indexOf(array[0]);
    let MissingLetter;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === alphabet[AlphabetStartIndex + i]) {
        continue;
      } else {
        MissingLetter = alphabet.indexOf(array[i]);
        console.log(i);
        break;
      }
    }

    return alphabet[MissingLetter-1];
}

console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S']));
