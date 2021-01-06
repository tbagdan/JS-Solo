// Arrow function - one of the great features of arrow function is known as shorthand syntax.

// Arrow function shorthand syntax
const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

const people = [{
    name: 'Kudaibergen',
    age: 29
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

// Regular function
const under30 = people.filter(function(person){
    return person.age < 30
})

// Arrow function
const underThirty = people.filter((person) => {
    return person.age < 30
})

// Arrow function - short syntax
const underThrty = people.filter((person) => person.age < 30)

// Person who's age is 22
const age22 = people.filter((person) => person.age === 22)

