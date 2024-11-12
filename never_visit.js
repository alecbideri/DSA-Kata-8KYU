function Substract (n){
    if (n < 10 && n > 1000){
        return "Provide a number between the range of 10 - 1000" ;
    }

    let newNumber = String(n).split('');
    let newSum = 0 ;
    let inList = 0 ;

    for (var i = 0 ; i < newNumber.length ; i++){
        newSum += Number(newNumber[i]);
    }

    inList = n - newSum;

    const fruitsWithNumbers = [
        { number: 1, fruit: "kiwi" },
        { number: 2, fruit: "pear" },
        { number: 3, fruit: "kiwi" },
        { number: 4, fruit: "banana" },
        { number: 5, fruit: "melon" },
        { number: 6, fruit: "banana" },
        { number: 7, fruit: "melon" },
        { number: 8, fruit: "pineapple" },
        { number: 9, fruit: "apple" },
        { number: 10, fruit: "pineapple" },
        { number: 11, fruit: "cucumber" },
        { number: 12, fruit: "pineapple" },
        { number: 13, fruit: "cucumber" },
        { number: 14, fruit: "orange" },
        { number: 15, fruit: "grape" },
        { number: 16, fruit: "orange" },
        { number: 17, fruit: "grape" },
        { number: 18, fruit: "apple" },
        { number: 19, fruit: "grape" },
        { number: 20, fruit: "cherry" },
        { number: 21, fruit: "pear" },
        { number: 22, fruit: "cherry" },
        { number: 23, fruit: "pear" },
        { number: 24, fruit: "kiwi" },
        { number: 25, fruit: "banana" },
        { number: 26, fruit: "kiwi" },
        { number: 27, fruit: "apple" },
        { number: 28, fruit: "melon" },
        { number: 29, fruit: "banana" },
        { number: 30, fruit: "melon" },
        { number: 31, fruit: "pineapple" },
        { number: 32, fruit: "melon" },
        { number: 33, fruit: "pineapple" },
        { number: 34, fruit: "cucumber" },
        { number: 35, fruit: "orange" },
        { number: 36, fruit: "apple" },
        { number: 37, fruit: "orange" },
        { number: 38, fruit: "grape" },
        { number: 39, fruit: "orange" },
        { number: 40, fruit: "grape" },
        { number: 41, fruit: "cherry" },
        { number: 42, fruit: "pear" },
        { number: 43, fruit: "cherry" },
        { number: 44, fruit: "pear" },
        { number: 45, fruit: "apple" },
        { number: 46, fruit: "pear" },
        { number: 47, fruit: "kiwi" },
        { number: 48, fruit: "banana" },
        { number: 49, fruit: "kiwi" },
        { number: 50, fruit: "banana" },
        { number: 51, fruit: "melon" },
        { number: 52, fruit: "pineapple" },
        { number: 53, fruit: "melon" },
        { number: 54, fruit: "apple" },
        { number: 55, fruit: "cucumber" },
        { number: 56, fruit: "pineapple" },
        { number: 57, fruit: "cucumber" },
        { number: 58, fruit: "orange" },
        { number: 59, fruit: "cucumber" },
        { number: 60, fruit: "orange" },
        { number: 61, fruit: "grape" },
        { number: 62, fruit: "cherry" },
        { number: 63, fruit: "apple" },
        { number: 64, fruit: "cherry" },
        { number: 65, fruit: "pear" },
        { number: 66, fruit: "cherry" },
        { number: 67, fruit: "pear" },
        { number: 68, fruit: "kiwi" },
        { number: 69, fruit: "pear" },
        { number: 70, fruit: "kiwi" },
        { number: 71, fruit: "banana" },
        { number: 72, fruit: "apple" },
        { number: 73, fruit: "banana" },
        { number: 74, fruit: "melon" },
        { number: 75, fruit: "pineapple" },
        { number: 76, fruit: "melon" },
        { number: 77, fruit: "pineapple" },
        { number: 78, fruit: "cucumber" },
        { number: 79, fruit: "pineapple" },
        { number: 80, fruit: "cucumber" },
        { number: 81, fruit: "apple" },
        { number: 82, fruit: "grape" },
        { number: 83, fruit: "orange" },
        { number: 84, fruit: "grape" },
        { number: 85, fruit: "cherry" },
        { number: 86, fruit: "grape" },
        { number: 87, fruit: "cherry" },
        { number: 88, fruit: "pear" },
        { number: 89, fruit: "cherry" },
        { number: 90, fruit: "apple" },
        { number: 91, fruit: "kiwi" },
        { number: 92, fruit: "banana" },
        { number: 93, fruit: "kiwi" },
        { number: 94, fruit: "banana" },
        { number: 95, fruit: "melon" },
        { number: 96, fruit: "banana" },
        { number: 97, fruit: "melon" },
        { number: 98, fruit: "pineapple" },
        { number: 99, fruit: "apple" },
        { number: 100, fruit: "pineapple" }
      ];
  
    if (inList < 0 || inList > 100){
        return "not in list" ;
    }else {
        const targetedFruit = fruitsWithNumbers.find(fruit=>fruit.number===inList);
        return `${inList} number is on fruit ${targetedFruit.fruit}`;
    }  
    
}

console.log(Substract(10));

