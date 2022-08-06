const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    {
      title: "The Dreams in the Witch House",
      author: "Howard Lovecraft",
      rating: 8.67,
    },
  ];
  const MIN_BOOK_RATING = 8;
 
// const sortBooks = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// console.log("sortBooks", sortBooks);

// const filterBooks = sortBooks.filter(book => book.rating > MIN_BOOK_RATING);
// console.log("filterBooks", filterBooks);

// const authors = filterBooks.map(book => book.author);
// console.log("authors", authors);

const names = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author)).filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author);
console.log("names", names);
