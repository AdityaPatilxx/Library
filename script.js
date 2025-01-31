let myLibrary = []

function Book(name, author, pages, hasRead) {
    this.name = name
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

// let harry = new Book('Harry Potter', 'J.K Rolling', '223', true)
// console.log(harry)

const addBook = document.querySelector('#addBook')
const dialog = document.querySelector('dialog')

addBook.addEventListener('click', () => {
    dialog.showModal()

})

const bookForm = document.querySelector('#bookForm')

bookForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(getBookFromInput())

})


function getBookFromInput() {
    const title = document.querySelector('#bookName').value
    const author = document.querySelector('#authorName').value
    const pages = document.querySelector('#bookLength').value
    const isRead = document.querySelector('#isRead').checked
    return new Book(title,author,pages,isRead)
}