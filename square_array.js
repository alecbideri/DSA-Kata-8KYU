function maps(arr){

    let new_arr = [];

    for (var i = 0 ; i < arr.length ; i++){

        new_arr.push(arr[i]*arr[i]);
    }

    return new_arr;
}

function using_map(arr){
    return arr.map(num => num *  num);
}

console.log(using_map([1,2,3]));