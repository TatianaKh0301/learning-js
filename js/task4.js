//====================================================1===========================================

// const senten = "Very simple example";
// for (char of senten) {
//     console.log(char);
// }


//====================================================2===========================================


// const countries = ["Ukraine", "USA", "Canada", "Polland", "England"];
// const countryNameToFind = "Canada";
// let message;
// for (const country of countries) {
//     if (country === countryNameToFind) {
//         message = "Країна з такою назвою є в базі даних!";
//         break;
//     }
//     else {
//         message = "Країни з такою назвою немає в базі даних!";
//     }
// }

// console.log(message);


//=================================================3=============================================

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
}