function disemvowel(str) {
  let StringedArray = str.split("");
  let Results = [];
  const Vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  StringedArray.forEach((element) => {
    if (!Vowels.includes(element)) {
      Results.push(element);
    }
  });
  return Results.join("");
}

console.log(disemvowel("This website is for losers LOL!"));
