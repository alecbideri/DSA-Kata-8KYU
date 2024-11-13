function sumArray(array){
    
   if (array === null|| !Array.isArray(array)|| array.length < 2 ){
    return 0 ;
   }
    
    let sum = 0 ;

     const min = Math.min(...array);
     const max = Math.max(...array);
     let minRemoved = false ;
     let maxRemoved = false ;

    for (var i = 0 ; i < array.length ; i++){
        
        if((!minRemoved && array[i]===min) || (!maxRemoved && array[i] === max)){
            if(!minRemoved && array[i]===min) {
                minRemoved = true ;
            } else if (!maxRemoved && array[i] === max){
                maxRemoved = true ;
            }

            continue ; // skip the iteration 
        }

        sum+=array[i];

    }

    return sum ;
}

console.log(sumArray([6, 2, 1, 8, 10]));