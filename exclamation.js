function removeExclamation(string){
  let newString = string.split('');
  let newWord = "";

  for (var i = 0 ; i < newString.length ; i++){
    if (newString[i] !== "!"){
      newWord+= newString[i];
    }
  }

  return newWord;
}

console.log(removeExclamation('Hello!!!'));