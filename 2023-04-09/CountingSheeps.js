function countSheeps(arrayOfSheep) {
    let Count = 0;
    arrayOfSheep.forEach(element => {
        if (element === true){
            Count++
        }
    });
    return Count;
}