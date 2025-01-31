let myLibrary = []

function Book(title, author, pages, hasRead) {
    this.title = title
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

const booksContainer = document.querySelector('#booksContainer')
const bookForm = document.querySelector('#bookForm')

bookForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newBook = getBookFromInput()
    makeBookCard(newBook)
    dialog.close()
})


function getBookFromInput() {
    const title = document.querySelector('#bookName').value
    const author = document.querySelector('#authorName').value
    const pages = document.querySelector('#bookLength').value
    const isRead = document.querySelector('#isRead').checked
    return new Book(title, author, pages, isRead)
}

function makeBookCard(book) {
    const card = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const buttonContainer = document.createElement('div')
    const readButton = document.createElement('button')
    const removeButton = document.createElement('button')


    title.textContent = book.title
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`

    readButton.classList.add('btn')
    removeButton.classList.add('btn')
    removeButton.textContent = 'Remove'
    buttonContainer.className = 'buttons'
    card.className = 'card'

    if (book.isRead == true) {
        readButton.classList.add('btn-green')
        readButton.textContent = 'Read'
    }
    else {
        readButton.classList.add('btn-red')
        readButton.textContent = 'Not Read'
    }

    buttonContainer.append(readButton, removeButton)
    card.append(title, author, pages, buttonContainer)
    booksContainer.append(card)
}