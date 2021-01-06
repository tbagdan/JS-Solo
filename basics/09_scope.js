// Lexical Scope (Static Scope)
// Global Scope - defined outside of all code blocks
// Local Scope - defined inside a code block
// In a scope you can access variables  defined in that scope, or in any parent/ancestor scope

// Global Scope(varOne)
  // Local Scope(varTwo)
  
let varOne = 'varOne'


if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
}

console.log(varTwo)