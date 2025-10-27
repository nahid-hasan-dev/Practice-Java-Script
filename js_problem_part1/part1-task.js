// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

let cTemp = 25;
let fTemp = celsiusToFahrenheit(cTemp);
console.log(`${cTemp}°C = ${fTemp}°F`);
