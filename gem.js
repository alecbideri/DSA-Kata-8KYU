// Solution 1: Using a simple for loop
function switchLetters(dna) {
    let newEl = "";
    
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "T") {
            newEl += "U";
        } else if (dna[i] === "U") {
            newEl += "T";
        } else {
            newEl += dna[i];
        }
    }
    
    return newEl;
}

// // Solution 2: Using replace() with regular expressions
// function switchLetters(dna) {
//     return dna.replace(/T/g, 'X')  // Temporarily replace T with X
//               .replace(/U/g, 'T')   // Replace U with T
//               .replace(/X/g, 'U');  // Replace temporary X with U
// }

// // Solution 3: Using map()
// function switchLetters(dna) {
//     return dna.split('')
//               .map(letter => {
//                   if (letter === 'T') return 'U';
//                   if (letter === 'U') return 'T';
//                   return letter;
//               })
//               .join('');
// }

console.log(switchLetters('GCAT')); // Outputs: 'GCAU'
console.log(switchLetters('GCAU')); // Outputs: 'GCAT'