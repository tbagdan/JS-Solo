let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: `People's History`,
    author: `Howard Zinn`,
    pageCount: 723
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCount: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

// Challenge Area
let degreeSummary = function(fahrenheit){
    return {
        celsius: (fahrenheit - 32) * (5/9),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let degreeResult = degreeSummary(32)
console.log(degreeResult.celsius)
console.log(degreeResult.kelvin)