// When a variable doesn't have a value, it will show undefined: let name;
let name
name = 'Jen'
if(name === undefined){
    console.log('Please assign a value')
} else{
    console.log(name)
}

// When we don't provide a value to a funcion, it will return undefined: square();
// We can also get undifined if we try to return a value from a function that has nothing to return: let result = square();
let square = function(num){
    console.log(num)
}

// Null as assigned value
let age = 27
age = null
console.log(age)