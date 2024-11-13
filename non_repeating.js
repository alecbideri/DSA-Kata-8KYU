function firstNonRepeatingLetter(s) {
    for (let i = 0 ; i < s.length ; i++){
        let currentLower = s[i].toLowerCase();
        let firstindex = s.toLowerCase().indexOf(currentLower);
        let lastIndex = s.toLowerCase().lastIndexOf(currentLower);

        if (firstindex === lastIndex){
            return s[i];
        }
    }

    return "";
  }


  console.log(firstNonRepeatingLetter("table"));