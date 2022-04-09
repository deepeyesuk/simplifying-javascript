// function addBookDefaults(book: { [x: string]: any; }, defaults: { [x: string]: any; }): {} { 
//     const fields = Object.keys(defaults)
//     const updated = {}

//     for (let i = 0; i < fields.length; i++) {
//         const field = fields[i]
//         updated[field] = book[field] || defaults[field]
//     }
    
//     return updated
// }

const defaults = { 
    author: '', 
    title: '',
    year: 2017, 
    rating: null,
}

const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript',
}

const anotherBook = { 
    title: 'Another book', 
    year: 2016,
}

// console.log(Object.assign(defaults, book))
// console.log(Object.assign(defaults, anotherBook))
// console.log(defaults)
console.log('-----------')
const book1 = Object.assign({}, defaults, book)
// const book2 = Object.assign({}, defaults, anotherBook)
const book2 = Object.assign({}, defaults, book1, anotherBook)
console.log(book1, book2, defaults)

console.log('-----------')
const defaultEmployee = { 
    name: {
        first: '',
        last: '', 
    },
    years: 0, 
}

const employee = Object.assign({}, defaultEmployee)
console.log(employee)
console.log(defaultEmployee)

employee.name.first = 'Joe';
console.log(employee)
console.log(defaultEmployee)

const employee2 = Object.assign( {},
    defaultEmployee, 
    {
        name: Object.assign( {}, defaultEmployee.name )
    }
)
console.log(employee)
console.log(employee2)
console.log(defaultEmployee)