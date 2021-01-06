// Multiple Arguments
let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)

// Default Arguments - if we don't want to provide a value to the first variable in the argument, we use undefined.
let getScoreText = function(name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${socre}`
}

let scoreText = getScoreText(undefined, 76);


// Challenge Time
let getTip = function(total, tip = 0.20){
    let totalTip = tip * total
    return `A ${tip}% on $${total} would be ${totalTip}`
}

let yourTip = getTip(100, 0.55)

// Template String - start with back tick ``
let name = 'whore'
console.log(`Hello my name is ${name}. How can I serve you? `)