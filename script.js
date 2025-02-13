let display = document.getElementById("display");
let currentInput = "";
let currentOperator = "";
let previousInput = "";
let isNewCalculation = false; 

function appendNumber(number) {
    if (isNewCalculation) {
        
        currentInput = number;
        previousInput = "";
        currentOperator = "";
        isNewCalculation = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== "") {
        if (previousInput !== "") {
            calculateResult();
        }
        previousInput = currentInput;
        currentOperator = operator;
        currentInput = "";
        isNewCalculation = false;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    isNewCalculation = false;
    updateDisplay();
}

function calculateResult() {
    if (previousInput !== "" && currentInput !== "") {
        let result;
        let num1 = parseFloat(previousInput);
        let num2 = parseFloat(currentInput);
        
        switch (currentOperator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Error";
                break;
        }

        currentInput = result.toString().slice(0, 10);
        previousInput = "";
        currentOperator = "";
        isNewCalculation = true;
        updateDisplay();
    }
}

function updateDisplay() {
    if (previousInput !== "" && currentOperator !== "") {
        display.innerText = previousInput + " " + currentOperator + " " + currentInput;
    } else {
        display.innerText = currentInput || "0";
    }
}
