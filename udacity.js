var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2 ,2 ,"Yellow");

const replace = ["Green" , "Blue" , "Violet"];

for (let rainbows of replace){
  rainbow.push(rainbows); 
}

console.log(rainbow);

