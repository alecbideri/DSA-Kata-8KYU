
// only works on one single arrays , but the issue in this could be the testing case provides more than one array 
function stairsIn20(s){
    let totalSum = 0 ;

    for (var i = 0 ; i < s.length ; i++){
        totalSum+= s[i];
    }

    return totalSum * 20 ;
}

// explore reduce is not working in this case and most importnatly , func expression , reduce and map usage . 

function StairsIn20(s){
    let sum = 0 ;

    for (let num of s){
        let daySum = num.reduce((acc , num ) => acc + num , 0) ;
        sum += daySum ; 
    }

    return sum * 20 ; 
}

// The function that worked on the katas
function stairsin20(s){
    let totalSum = 0 ; 

    for (var i = 0 ; i < s.length ; i++){
            let daySum = 0 ;
        for (var j = 0 ; j < s[i].length ; j++){
            daySum += s[i][j];
        }

        totalSum+=daySum;
    }

    return totalSum * 20 ;
}

console.log(StairsIn20([6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]))