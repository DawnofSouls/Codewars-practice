function pigIt(str){
    //Code here
    let StringArray = str.split(" ");
    let PiggedArray = [];
    const RegEx = /[^\s\w]/g;
    StringArray.forEach(element => {
        if (element.match(RegEx)){
            PiggedArray.push(element);
        } else {
            let FirstLetter = element.charAt(0);
            let RestOfTheWord = element.slice(1);
            let PigAy = 'ay';
            PiggedArray.push(RestOfTheWord+FirstLetter+PigAy);
        }

    });
    return PiggedArray.join(" ");
  }

  console.log(pigIt('Pig latin is cool'));
  console.log(pigIt('Hello world !'));