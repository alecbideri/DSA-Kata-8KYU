function SumMix(x){

    let sum = 0 ;

    for (var i = 0 ; i < x.length ; i++){
        sum += Number(x[i]);
    }

    return sum ;
}

console.log(SumMix([1,2,'3','4']));