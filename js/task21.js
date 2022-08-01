// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может 
// быть и другими характеристиками. 
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, 
// а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, 
// но только если такого зелья еще нет в инвентаре. 
// В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на 
// newName в массиве potions.

const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      console.log("this.potions", this.potions);
      for (const potion of this.potions) {
        console.log("potion", potion);
      }
      console.log("atTheOldToad.potions", atTheOldToad.potions);
      return this.potions;
    },
  //   addPotion(newPotion) {
  //  xxxx   if (this.potions.includes(newPotion)) {
  //       return `Error! Potion ${newPotion} is already in your inventory!`;
  //     }
  
  //     this.potions.push(newPotion);
  //   },
    // removePotion(potionName) {
    //   const potionIndex = this.potions.indexOf(potionName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${potionName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1);
    // },
    // updatePotionName(oldName, newName) {
    //   const potionIndex = this.potions.indexOf(oldName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${oldName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1, newName);
    // },
    // Change code above this line
  };
  
  
  atTheOldToad.getPotions();