// Arguments don't exist in arrow function, only on normal function.
// Arrow functions don't bind their this value, they're bad candidats for most methods.

const add = function(a, b){
    return arguments[0] + arguments[1]
}

add(11, 22, 33, 44)

const car = {
    color: 'red',
    getSummary() {
        return `The car is ${this.color}` // output The car is undefined
    }
}

