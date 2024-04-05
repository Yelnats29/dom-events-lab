/*-------------------------------- Constants --------------------------------*/

const displayElement = document.querySelector(".display");
const numbers = document.querySelectorAll(".button");
const clearButton = document.querySelector("#clearButton");
const equalsButton = document.querySelector(".button.equals");





/*-------------------------------- Variables --------------------------------*/
let operator = '';
let num1 = '';
let num2 = '';




/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        registerNumberPressed(number.textContent); //This shows on the calculator
    });
});

// Event listeners for operator buttons
document.querySelectorAll('.button:not(#clearButton):not(.equals)').forEach(button => {
    button.addEventListener('click', () => {
        registerOperatorPressed(button.textContent);
    });
});

// Event listener for equals button
equalsButton.addEventListener('click', () => { registerEqualsPressed(); });

// Event listener for clear button
clearButton.addEventListener('click', clearClick);




/*-------------------------------- Functions --------------------------------*/

//This function is used to give the ability to see numbers on the calculator screen
function showDisplay() {
    displayElement.textContent = num1;
};

//This function is used to register the number buttons pressed/clicked
function registerNumberPressed(number) {
    if (num1 === "0") {
        num1 = number;
    } else {
        num1 += number;
    }
    showDisplay()
}

//This function is used to evaluate the expression and display the result (ChatGPT)
function evaluateExpression() {
    let result;
    const secondOperand = parseFloat(num1);
    if (operator === '+') {
        result = parseFloat(num2) + secondOperand;
    } else if (operator === '-') {
        result = parseFloat(num2) - secondOperand;
    } else if (operator === '*') {
        result = parseFloat(num2) * secondOperand;
    } else if (operator === '/') {
        if (secondOperand === 0) {
            result = "Error: Division by zero";
        } else {
            result = parseFloat(num2) / secondOperand;
        }
    }
    num1 = result.toString();
    operator = '';
    showDisplay();
}




//This function is used to register the operator clicks
function registerOperatorPressed(op) {
    if (operator !== '' && num1 !== '') {
        evaluateExpression();
    }
    num2 = num1;
    operator = op;
    num1 = '';
}


// Function to handle equals button click
function registerEqualsPressed() {
    if (operator !== '' && num1 !== '') {
        evaluateExpression();
    }
}

// Function to handle clear button click
function clearClick() {
    num1 = '0';
    num2 = '';
    operator = '';
    showDisplay();
}