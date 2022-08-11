class Storage {
    constructor(items) {
      this.items = items;
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(newItem) {
      this.items.push(newItem);
    }
  
    removeItem(itemToRemove) {
        this.items = this.items.filter(item => item !== itemToRemove);
    }
  }
  
  
  // Change code above this line
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  console.log("storage.getItems-1", storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  console.log("storage.getItems-add", storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");
  console.log("storage.getItems-remove", storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
  