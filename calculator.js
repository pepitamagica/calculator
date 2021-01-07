const calculatorKeys = document.querySelectorAll(".calculator-btn");
const calculatorDisplay = document.querySelector(".calculator-display");

calculatorKeys.forEach(function(key) {
    key.addEventListener("click", function() {
        if (isNumber(key.value)) {
            calculatorDisplay.textContent += key.value;
        } else {
            checkOperator(key.value);
        }
        
    });
});

function isNumber(keyPressed) {
    if (keyPressed >= "0" && keyPressed <= "9") {
        return true;
    } else {
        return false;
    }
}

function checkOperator(operator) {
    if (operator === "C") {
        clearDisplay();
    } else {
        calculate();
    }
}

function calculate() {
    const 
}

function add() {

}

function clearDisplay() {
    calculatorDisplay.textContent = "";
}
