// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги
// з oldName на newName у властивості books.
// Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
// і splice() для того, щоб замінити цей елемент.

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
    console.log("oldName", oldName);
    console.log("newName", newName);
    const indBook = this.books.indexOf(oldName);
    console.log("indBook", indBook);
    this.books.splice(indBook, 1, newName);
      console.log("newBooks", bookShelf.books);  


    // Change code above this line
  },
};

bookShelf.updateBook("Haze", "Dungeon chronicles");