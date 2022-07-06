//=============================================

//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут

const minute = prompt("Введите количество минут");
if (minute) {
    const hour = String(Number.parseInt(minute / 60)).padStart(2, 0);
    const minutes = String(Number(minute) % 60).padStart(2, 0); 
    console.log(`${hour} : ${minutes}`);
}
else {
    alert("Введите число!!!!!");
}
//console.log(``);