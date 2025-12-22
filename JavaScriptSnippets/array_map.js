const books = [
    "Dune",
    "The Hobbit",
    "1984"
]

console.log(books)

const titles = books.map(book => {
    return book.toUpperCase()
})

console.log(titles)