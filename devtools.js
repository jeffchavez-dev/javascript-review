/* const books = [{ name: 'Knowing Sin', author: 'Mark Jones'}, {name: 'Institutes', author: 'John Calvin'}]

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '10em';
}

//regular

// interporlated

// styled 
// console.log('%c I am some great text', 'font-size: 50px')
// warning
console.warn('No')

// error
console.error('Bad')
// info
console.info('good')
// testing
const para = document.querySelector('p')
console.assert(1 == 1, 'that is wrong')
//clearing
console.clear()

//viewing DOM elements
console.log(PageTransitionEvent)
console.dir(PageTransitionEvent)
console.clear()
//grouping 

books.forEach(book => {
    console.groupCollapsed(` ${book.name}`)
    console.log(`my favorite book is ${book.name}`)
    console.log(`my favorite author is ${book.author}`)
    console.groupEnd(` ${book.name}`)
})

//counting
console.count('p')

//timing
console.time('fetching data')

fetch('https://api.github.com/users/jeffchavezdev')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
    })


// table 
console.table(books)

*/