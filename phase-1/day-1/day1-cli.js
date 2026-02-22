const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Temperature Functions
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// BMI Function
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);

    let category;

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    return {
        bmi: bmi.toFixed(2),
        category
    };
}

// Menu
console.log("Choose Option:");
console.log("1 - Celsius to Fahrenheit");
console.log("2 - Fahrenheit to Celsius");
console.log("3 - BMI Calculator");

rl.question("Enter option (1/2/3): ", function(option) {

    if (option === "1") {
        rl.question("Enter Celsius value: ", function(value) {
            const result = celsiusToFahrenheit(parseFloat(value));
            console.log("Result:", result.toFixed(2), "°F");
            rl.close();
        });

    } else if (option === "2") {
        rl.question("Enter Fahrenheit value: ", function(value) {
            const result = fahrenheitToCelsius(parseFloat(value));
            console.log("Result:", result.toFixed(2), "°C");
            rl.close();
        });

    } else if (option === "3") {
        rl.question("Enter weight (kg): ", function(weight) {
            rl.question("Enter height (m): ", function(height) {
                const result = calculateBMI(parseFloat(weight), parseFloat(height));
                console.log("BMI:", result.bmi);
                console.log("Category:", result.category);
                rl.close();
            });
        });

    } else {
        console.log("Invalid Option ");
        rl.close();
    }

});