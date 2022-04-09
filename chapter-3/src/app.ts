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
console.log('Tip 11 : Object.assing -----------')
const book1 = Object.assign({}, defaults, book)
// const book2 = Object.assign({}, defaults, anotherBook)
const book2 = Object.assign({}, defaults, book1, anotherBook)
console.log(book1, book2, defaults)

console.log('Tip 11 : deep copying -----------')
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

// employee.name.first = 'Joe';
// console.log(employee)
// console.log(defaultEmployee)

// const employee2 = Object.assign( {},
//     defaultEmployee, 
//     {
//         name: Object.assign( {}, defaultEmployee.name )
//     }
// )
// console.log(employee)
// console.log(employee2)
// console.log(defaultEmployee)

console.log('Tip 12 : spread op -----------')
console.log(defaults)
const book3 = {...defaults, ...book}

console.log(book3, defaults)

const employee3 = {...defaultEmployee, name: {...defaultEmployee.name}}
console.log(employee3)
console.log(defaultEmployee)
employee3.name.first = 'Joe';
console.log(employee3)
console.log(defaultEmployee)
