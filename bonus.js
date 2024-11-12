function bonusTime(salary , bonus){
    let sum = 1 ;
    if (bonus === true){
        sum = salary * 10 ;
        return `\u00A3${sum}`;
    }else {
        return `\u00A3${salary}`;
    }
}

// simple solution 

function BonusTime(salary , bonus){
    return bonus ? `£${salary * 10}` : `${salary}`;
}

console.log(bonusTime(1000 , true));
console.log(BonusTime(2000 , true));