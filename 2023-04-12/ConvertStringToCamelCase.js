function toCamelCase(str){
    let Dashed = str.split('-');
    for (let i = 1; i < Dashed.length; i++){
        Dashed[i] = Dashed[i].charAt(0).toUpperCase() + Dashed[i].slice(1);
    };
    let UnderScore = Dashed.join("").split("_");
    for (let i = 1; i < UnderScore.length; i++){
        UnderScore[i] = UnderScore[i].charAt(0).toUpperCase() + UnderScore[i].slice(1);
    };

    return UnderScore.join("");
}

console.log(toCamelCase("the_stealth_warrior"));

/* .map(element => element.charAt(0).toUpperCase() + element.slice(1)).join("") */