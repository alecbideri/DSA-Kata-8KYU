function reverseWord(string){
    return string.split(' ').reverse().join(' ');
}

function reverse_using_loops(string){
    
    let arr = string.split(' ');

    let reverse = [];

    for (var i = arr.length - 1; i >=0 ; i--){
        reverse.push(arr[i]);
    }

    reverse.join(' ');

    return reverse;
}

console.log(reverse_using_loops("My name is Alec"));