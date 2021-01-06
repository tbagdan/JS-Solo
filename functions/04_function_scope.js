// Global Sscope (convertFahrenheitToCelsius, celsiusResult)
  // Local Scope (celsius, fahrenheit)
    // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function(fahrenheit){
    let celsius =  (fahrenheit - 32) * (5/9)

    if(celsius <= 0){
        let isFreezing = true
    }

    return celsius
}

let celsiusResult = convertFahrenheitToCelsius(32)