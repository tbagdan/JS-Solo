// Type coercion - a string, a number, a boolean

console.log('5' + 5) //string concat - 55
console.log('5' - 5) //converts a string to number - 0
console.log('5' == 5) //== doesn't check type, only values

const value = true + 12
const type = typeof value

