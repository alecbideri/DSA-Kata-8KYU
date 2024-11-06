function isPrime(x){
    // check if the number is greater than 2 
    // check if the number is divisible up the sqrt of itself 

    if(x < 2){
        return false ;
    }

    for (var i = 2 ; i <= Math.sqrt(x) ; i++){
        if(x%i===0){
            return false ;
        }
    }

    return true ;
}


console.log(isPrime(2));