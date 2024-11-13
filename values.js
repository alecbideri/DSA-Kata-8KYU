function maximum(list){
  let max = Math.max(...list);
  return max;
}

function minimum(list){
  let min = Math.min(...list);
  return min ;
}

console.log(maximum([1,2,3,4]));
console.log(minimum([1,2,3,4]));