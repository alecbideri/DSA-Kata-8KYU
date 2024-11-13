function reverseSeq(n){
     let newArray = [];

     for (var i = n ; i > 0 ; i--){
        newArray.push(i);
     }

     return newArray;
}

console.log(reverseSeq(5));