function DNAtoRNA(dna){

    let newEl = "";

    let split_new = dna.split('');
    for (var i = 0 ; i < split_new.length ; i++){
        if (split_new[i] === "T"){
            newEl+="U";
        } else if (split_new[i] === "T"){
            newEl+="U"
        }else {
            newEl+=split_new[i];
        }

       
    }

    return newEl;
    
}

console.log(DNAtoRNA('GCATT'));