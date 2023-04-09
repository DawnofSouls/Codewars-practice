function reverseWords(str) {
    let ArrayStr = str.split(' ');
    let ReversedWords = [];
    ArrayStr.forEach(element => {
        ReversedWords.push(element.split(``).reverse().join(''));
    });
    return ReversedWords.join(" ");
  }

console.log(reverseWords("The quick brown fox jumps over the lazy dog!"));