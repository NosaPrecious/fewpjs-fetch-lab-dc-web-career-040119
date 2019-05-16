function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books').then(response => response.json()).then((jsonData) => renderBooks);

}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    const h1 = document.createElement('h1')
    h1.innerHTML = `<h1>${book.title}</h1>`
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
