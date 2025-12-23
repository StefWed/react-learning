const books = [
  { title: "Dune", pages: 500 },
  { title: "The Hobbit", pages: 300 }
]

const longBooks = books.filter(book => book.pages > 400)

console.log(longBooks)

const longTitle = books
  .filter(b => b.pages >400)
  .map(b => b.title)

console.log(longTitle)