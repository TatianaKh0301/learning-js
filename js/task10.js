// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
const min = 1;
const max = 10;

function createArrayOfNumbers(min, max) {
    const numbers = [];
    // Change code below this line
    for (let i = min; i <= max; i += 1) {
        numbers.push(i);
    }
    // Change code above this line
    console.log("finish numbers=", numbers);
    return numbers;
    
  }

  createArrayOfNumbers(min, max);