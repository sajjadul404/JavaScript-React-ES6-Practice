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

// BMI Calculator

function calculateBMI(weight, height) {
    if (
        typeof weight !== "number" || 
        typeof height !== "number" ||
        isNaN(weight) || 
        isNaN(height) ||
        weight <= 0 || 
        height <= 0
    ) {
        return "Invalid input! Please enter valid positive numbers.";
    }

    const bmi = weight / (height * height);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    return {
        bmi: bmi.toFixed(2),
        category: category
    };
}

// Example Usage
console.log(calculateBMI(70, 1.75));