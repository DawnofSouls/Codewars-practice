function getCount(str) {
    let VowelCount = 0;
    let VowelString = str.toLowerCase().split('');

    VowelString.forEach(e => {
        if (e === 'a'||e === 'e'|| e === 'i'||e === 'o'|| e === 'u'){
            VowelCount++
        }
    });
    return VowelCount;
}


console.log(getCount('tHE qUICK BrOwN fox juMpS OVeR tHE LaZy Dog.'));