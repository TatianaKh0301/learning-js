//Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
// const max = 50;
// const min = 23;

const max = 10;
const min = 1;
let result = 0;
for (let i = max; i >= min; i -= 1) {
    // console.log(i);
    if (i % 2 === 0) {
        result += i;
    }
}
console.log(result);