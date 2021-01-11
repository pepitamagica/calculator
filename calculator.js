const calculatorKeys = document.querySelector(".calculator-keyboard");
const calculatorDisplay = document.querySelector(".calculator-display");

let lastOperator = ""
    , nextOperator = false;

let oldValue
    , newValue = 0
    , newValueInput = false
    , result = 0;

resetDisplay();

calculatorKeys.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        if (isNumber(event.target.value)) {
            calculatorDisplay.valueAsNumber += event.target.value;
            if (lastOperator) {
                if (nextOperator && newValueInput === false) {
                    newValue = 0;
                    newValueInput = true;
                }
                newValue += event.target.value;
                newValue = Number(newValue);
                calculatorDisplay.valueAsNumber = newValue;
            }
        } else {
            calculate(event.target.value, calculatorDisplay.valueAsNumber);
            newValueInput = false;
        }
    }
});

function isNumber(keyPressed) {
    if (keyPressed >= "0" && keyPressed <= "9") {
        return true;
    } else {
        return false;
    }
}

function calculate(operator, displayValue) {
    switch (operator) {
        case "C":
            resetDisplay();
            resetOperators();
            resetValues();
            break;
        case "+-":
            calculatorDisplay.valueAsNumber = opposite(displayValue);
            break;
        case "%":
            calculatorDisplay.valueAsNumber = percentage(displayValue);
            break;
        case "=":
            equal(displayValue);
            break;
        default:
            lastOperator = operator;
            oldValue = displayValue;
            result = displayValue;
    }
}

function resetDisplay() {
    calculatorDisplay.valueAsNumber = 0;
    calculatorDisplay.placeholder = "";
}

function resetOperators() {
    lastOperator = "";
    nextOperator = false;
}

function resetValues() {
    result = 0;
    oldValue = 0;
    newValue = 0;
    newValueInput = false;
}

function opposite(displayValue) {
    return -displayValue;
}

function percentage(displayValue) {
    return displayValue / 100;
}

function divide() {
    result /= newValue;
    if (result === Infinity)
        calculatorDisplay.placeholder = "Infinity";
    else
        return result;
}

function multiply() {
    result *= newValue;
    return result;
}

function subtract() {
    result -= newValue;
    return result;
}

function add() {
    result += newValue;
    return result;
}

function equal() {
    switch (lastOperator) {
        case "/":
            calculatorDisplay.valueAsNumber = divide();
            break;
        case "*":
            calculatorDisplay.valueAsNumber = multiply();
            break;
        case "-":
            calculatorDisplay.valueAsNumber = subtract();
            break;
        case "+":
            calculatorDisplay.valueAsNumber = add();
            break;
    }
    nextOperator = true;
}