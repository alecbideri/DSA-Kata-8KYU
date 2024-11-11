function breakCamel(str){
    let words = str.split(/[-_]/);

    for(var i = 1 ; i < words.length ; i++ ){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}

console.log(breakCamel('the-stealth-warrior'));