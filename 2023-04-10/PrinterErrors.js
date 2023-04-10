function printerError(s) {
    // your code
    const StringArray = s.split('');
    const ErrorLetters = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let ErrorTotal = 0;

   StringArray.forEach(element => {
    for (let i = 0; i < ErrorLetters.length; i++){
        if(element === ErrorLetters[i]){
            ErrorTotal++;
        }
    }
   });
    return `${ErrorTotal}/${s.length}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));