const products = [{name: 'Computer mouse'}]
const product = products[0]

// Truthy - Values that resolve to true in boolean context
// Falsy - Values that resolve to false in boolean context
// Falsy values - false, 0, '', null, indefined, NaN
// Truthy and Falsy is used when checking if something exists or not

if(product){
    console.log(`Product found`)
} else{
    console.log(`Product not found`)
}

