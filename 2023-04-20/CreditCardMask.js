// return masked string
function maskify(cc) {
    if (cc.length <= 4){
        return cc;
    } else {
        let split = cc.split('');
        for (let i = 0; i < split.length-4; i++){
            split[i] = '#';
        }
        cc = split.join('');
    }
    return cc;
}

console.log(maskify("Nananananananananananananananana Batman!"));