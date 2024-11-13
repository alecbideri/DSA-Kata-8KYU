function sum(numbers){
    if (numbers.length === 0){
        return 0 ;
    }

    let sum = 0 ;

    for (var i = 0 ; i < numbers.length ; i++){
        sum+= numbers[i];
    }

    return sum ;
}

console.log(sum([1,2,3]));