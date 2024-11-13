function findAverage(array){
  if (array.length===0){
    return 0 ;
  } else {
    let sum = 0 ;
    for (var i = 0 ; i < array.length ; i++){
        sum+= array[i];
    }

    return sum / array.length;
  }
}

console.log(findAverage([1,2,3,4]));