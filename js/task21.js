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
      return this.potions;
    },
    addPotion(newPotion) {
  //  xxxx   if (this.potions.includes(newPotion)) {
  //       return `Error! Potion ${newPotion} is already in your inventory!`;
  //     }
      for (const potion of this.potions) {
        // console.log("potion.name", potion.name);
        // console.log("newPotion.name", newPotion.name);
        if(potion.name === newPotion.name) {
          // console.log("error");
          const msg= console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
          return msg;
        }
      }
      // console.log("newPotion", newPotion);
      this.potions.push(newPotion);
      // console.log(this.potions);
    },
    removePotion(potionName) {
      console.log("potionName", potionName);
      for (let index = 0; index < this.potions.length; index += 1) {
        console.log("posions", this.potions[index]);
        if(this.potions[index].name === potionName) {
          console.log("Есть совпадение!!!");
          console.log(index);
          this.potions.splice(index, 1);
        }
      }
      console.log(this.potions);
      // const potionIndex = this.potions.name.indexOf(potionName);
      // console.log("potionIndex", potionIndex);
    //   if (potionIndex === -1) {
    //     return `Potion ${potionName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      console.log("oldName", oldName);
      console.log("newName", newName);
      for (let index = 0; index < this.potions.length; index += 1) {
        console.log("posions", this.potions[index]);
        if(this.potions[index].name === oldName) {
          console.log("Есть совпадение!!!");
          console.log(index);
          this.potions[index].name = newName;
        }
      }
      console.log(this.potions);
    //   const potionIndex = this.potions.indexOf(oldName);
  
    //   if (potionIndex === -1) {
    //     return `Potion ${oldName} is not in inventory!`;
    //   }
  
    //   this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
  };
  
  
  // atTheOldToad.getPotions();
  // atTheOldToad.addPotion({ name: "Speed potion", price: 460 });
  // atTheOldToad.removePotion("Stone skin");
  atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
