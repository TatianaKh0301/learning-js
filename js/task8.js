// Напиши функцию calculateTotal(number), которая принимает 
// целое число (параметр number) и возвращает сумму всех целых чисел 
// от единицы и до этого числа. Например, если number равно 3, 
// то сумма это 1 + 2 + 3, то есть 6.
let number = 7;
let numberNew = 0;

function calculateTotal(number) {
    // Change code below this line

   for (let i = 1; i <= number; i += 1) {
     numberNew  += i;
   } 
      return numberNew;
}
   
   calculateTotal(number);

   console.log("numberNew", numberNew);