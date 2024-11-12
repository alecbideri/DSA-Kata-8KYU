function sumArray(array) {
    if (array === null || array.length < 2) {
      return 0;
    }
  
    const min = Math.min(...array);
    const max = Math.max(...array);
    let sum = 0;
    let minRemoved = false;
    let maxRemoved = false;
  
    for (let i = 0; i < array.length; i++) {
      if ((!minRemoved && array[i] === min) || (!maxRemoved && array[i] === max)) {
        if (!minRemoved && array[i] === min) {
          minRemoved = true;
        } else if (!maxRemoved && array[i] === max) {
          maxRemoved = true;
        }
        continue; // Skip to the next iteration
      }
  
      sum += array[i];
    }
  
    return sum;
  }

  console.log(sumArray([1,1,11,2,3]));