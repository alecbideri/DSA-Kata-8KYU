function isUpperCase(string){
    for (var i = 0 ; i < string.length ; i++){
        if (string[i] !== string[i].toUpperCase()){
            return false ;
        }
    }

    return true ; 
}

// Using function as a method of an object 

String.prototype.IsUpperCase = function(){
    for (var i = 0 ; i < this.length ; i++){
        if (this[i] !== this[i].toUpperCase()){
            return false ; 
        }
    }

    return true ; 
}

// The Easiest Function 

String.prototype.isUpperCase = function(){
    return this.toUpperCase === this.toString();
}

const str0 = "HELLO";

console.log(isUpperCase("ABc"));
console.log(str0.IsUpperCase());