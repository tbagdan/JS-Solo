let name = ' Andrew Mead'

// String length
name.length

// Convert to upper case
name.toUpperCase()

// Covert to lower case
name.toLowerCase()

// Includes method - return true if a string has specified string
let password = 'abc123password098'
console.log(password.includes('c', 4)) // does password has letter c starting index 4

// Trim method
name.trim()


// Challenge Area

let isValidPassword = function(password){
    return password.length > 8 && !password.includes('password')
}

