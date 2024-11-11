function basicoP(operation , value1 , value2){
    if (operation === "+"){
        return value1 + value2 ;
    } else if (operation === "-"){
        return value1 - value2;
    }else if (operation === "*"){
        return value1 * value2;
    }else if (operation === "/"){
        return value1 /value2;
    }else{
        return 0 ;
    }

}

console.log(basicoP("+" , 2 ,3));