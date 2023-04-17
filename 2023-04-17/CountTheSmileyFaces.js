//return the total number of smiling faces in the array
function countSmileys(arr) {
    let SmileCount = 0;
    arr.forEach(element => {
        
        let ElementSplit = element.split("");
        if (element.length === 3){
            if ((ElementSplit[0] === ':' || ElementSplit[0] === ';') && (ElementSplit[1] === '-' || ElementSplit[1] === '~') && (ElementSplit[2] === ')' || ElementSplit[2] === 'D') ) {
                SmileCount++
            }
        } else if (element.length === 2) {
            if ((ElementSplit[0] === ':' || ElementSplit[0] === ';') && (ElementSplit[1] === ')' || ElementSplit[1] === 'D')) {
                SmileCount++;
            }
        }
    });
    return SmileCount;
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));