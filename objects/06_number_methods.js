let num = 103.941

// ToFixed method - the argument tells a function how many decimal places to leave
num.toFixed(2)

// Math.round - round a number to a whole number up -104
Math.round(num)

// Math.floor - round a number to a whole number down - 103
Math.floor(num)

// Math.ceiling - round a number to a whole number up -104
Math.ceil(num)

// Math.random
let min = 10
let max = 20
let randomNum = Math.random() // 0 - 0.99999
randomNum = Math.random() * (max - min) // 0 - 9.99999
randomNum = Math.random() * (max - min + 1) // 0 - 10.999999
randomNum = Math.floor(Math.random() * (max - min + 1)) // 0 - 10
randomNum = Math.floor(Math.random() * (max - min + 1)) + min // 10 - 20


// Challenge Area
let randomGuess = function(guess){
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randomNum
}


