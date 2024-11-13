function areYouPlayingBanjo(name){
    let newName = name.split('');

    for (var i = 0 ; i < newName.length ; i++){
        if(newName[i] === 'r'|| newName === 'R'){
            `${name} plays banjo`;
        }else {
            return `${name} does not play banjo`;
        }
    }
}

console.log(areYouPlayingBanjo('Alec'));