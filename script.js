function Library() {
    this.books = []

    this.addBook = function (newBook) {
        this.books.push(newBook)
    }

    this.removeBook = function (bookName) {
        this.books = this.books.filter(currentBook => currentBook.title != bookName)
    }

    this.isInTheLibrary = function (bookName) {
        return this.books.some(currentBook => currentBook.title == bookName)
    }

    this.getBook = function (bookName) {
        return this.books.find((currentBook => currentBook.title == bookName))
    }
}

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

let myLibrary = new Library()
myLibrary.addBook(new Book('Harry Potter and the Sorcerers Stone', 'J.K. Rowling', 309, true))
myLibrary.addBook(new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false))
myLibrary.addBook(new Book('The Hunger Games', 'Suzanne Collins', 584, false))
myLibrary.addBook(new Book('The Hobbit', 'J.R.R. Tolkien', 310, true))


const addBookButton = document.querySelector('#addBook')
const dialog = document.querySelector('dialog')
const booksContainer = document.querySelector('#booksContainer')
const bookForm = document.querySelector('#bookForm')

addBookButton.addEventListener('click', () => {
    dialog.showModal()

})

bookForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newBook = getBookFromInput()
    // makeBookCard(newBook)

    myLibrary.addBook(newBook)
    updateBookContainer()

    dialog.close()
})

function updateBookContainer() {
    resetBookContainer()
    myLibrary.books.forEach((book) => {
        makeBookCard(book)
    })
}

function resetBookContainer() {
    booksContainer.innerHTML = ''
}

function getBookFromInput() {
    const title = document.querySelector('#bookName').value
    const author = document.querySelector('#authorName').value
    const pages = document.querySelector('#bookLength').value || 0
    const hasRead = document.querySelector('#isRead').checked
    bookForm.reset()
    return new Book(title, author, pages, hasRead)
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

    if (book.hasRead == true) {
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

booksContainer.addEventListener('click', (event) => {

    const target = event.target

    let BookName = target.parentElement.parentElement.firstElementChild.textContent
    let book = myLibrary.getBook(BookName)
    if (target.textContent == 'Remove') {
        myLibrary.removeBook(BookName)
        target.parentElement.parentElement.remove()
    }

    if (target.textContent == 'Read') {
        book.hasRead = false
        target.textContent = 'Not Read'
        target.classList.remove('btn-green')
        target.classList.add('btn-red')
    }
    else if (target.textContent == 'Not Read') {
        book.hasRead = true
        target.textContent = 'Read'
        target.classList.remove('btn-red')
        target.classList.add('btn-green')
    }
    updateBookContainer()
})
    
updateBookContainer()

