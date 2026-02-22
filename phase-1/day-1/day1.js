// Temperature Converter

function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== "number" || isNaN(celsius)) {
        return "Invalid input! Please enter a valid number.";
    }
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== "number" || isNaN(fahrenheit)) {
        return "Invalid input! Please enter a valid number.";
    }
    return (fahrenheit - 32) * 5 / 9;
}

// Example Usage
console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
console.log("77°F to Celsius:", fahrenheitToCelsius(77));
