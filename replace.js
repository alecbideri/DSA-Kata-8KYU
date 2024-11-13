function replace(string){
  let newString = string.split('');
  let newWord = "";

  for (var i = 0 ; i < newString.length ; i++){
    if (/[0-9]/.test(newString[i])){
      newWord+= "!";
    }else {
      newWord+= newString[i];
    }
  }

  return newWord;
}

console.log(replace("Hello123"))