// Колбек-функції


// =================================1===============================================
// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// console.log(greet("Манго"));
// console.log(greet);






// =======================================2==================================

// -----------------------------------------------------Колбек-функція


// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// -----------------------------------------------------Функція вищого порядку


// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Манго", greet);






// ====================================3========================================

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// --------------------------------Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// ----------------------------------Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });






// ============================4===================================================


// function processCall(recipient, onAvailable, onNotAvailable) {
  //---------------------------------------- Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
  //------------------------------------------ Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  //----------------------------------Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // -------------------------Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);




// ========================5 ПЕРЕБИРАННЯ МАСИВУ

const arr = [5, 10, 3, 81, 35];

// for (let i = 0; i < arr.length; i += 1) {
//     console.log("index=", i, "element=", arr[i]);
// }

arr.forEach(function (arrE, index) {
    console.log("element-", arrE, "index-", index);
});

