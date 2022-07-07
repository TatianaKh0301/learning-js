// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, 
// в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
const numbers = [1, 2, 3, 4, 5];
const value = 3;

function filterArray(numbers, value) {
    let newNumbers = [];
    
    for (number of numbers) {
        if (number > value) {
            newNumbers.push(number);            
        }
    }
    console.log("newNumbers=", newNumbers);
    return newNumbers;
    
 }

 filterArray(numbers, value);