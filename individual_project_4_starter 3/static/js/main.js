
// Note: Two basic functions are here for you to examine.
// Open the Console to see the results.
function pressOne() {
    displayedExpression = displayedExpression + '1';
    expression += '1';
    console.log('One was pressed. New expression:', expression);
    updateDisplay();
}
function pressTwo() {
    displayedExpression = displayedExpression + '2';
    expression += '2';
    console.log('Two was pressed. New expression:', expression);
    updateDisplay();
}
function pressThree() {
    displayedExpression = displayedExpression + '3';
    expression += '3';
    console.log('Three was pressed. New expression:', expression);
    updateDisplay();
}
function pressFour() {
    displayedExpression = displayedExpression + '4';
    expression += '4';
    console.log('Four was pressed. New expression:', expression);
    updateDisplay();
}
function pressFive() {
    displayedExpression = displayedExpression + '5';
    expression += '5';
    console.log('Five was pressed. New expression:', expression);
    updateDisplay();
}
function pressSix() {
    displayedExpression = displayedExpression + '6';
    expression += '6';
    console.log('Six was pressed. New expression:', expression);
    updateDisplay();
}   
function pressSeven() {
    displayedExpression = displayedExpression + '7';
    expression += '7';
    console.log('Seven was pressed. New expression:', expression);
    updateDisplay();
}
function pressEight() {
    displayedExpression = displayedExpression + '8';
    expression += '8';

    console.log('Eight was pressed. New expression:', expression);
    updateDisplay();
}
function pressNine() {
    displayedExpression = displayedExpression + '9';
    expression += '9';

    console.log('Nine was pressed. New expression:', expression);
    updateDisplay();
}
function pressZero() {
    displayedExpression = displayedExpression + '0';
    expression += '0';

    console.log('Zero was pressed. New expression:', expression);
    updateDisplay();
}
function pressDecimal() {
    displayedExpression = displayedExpression + '.';
    expression += '.';
    console.log('Decimal was pressed. New expression:', expression);
    updateDisplay();
}
function pressTimes() {
    displayedExpression = displayedExpression + '×';
    expression += '*';
    console.log('Times was pressed. New expression:', expression);
    updateDisplay();
}
function pressDivide() {
    displayedExpression = displayedExpression + '÷';
    expression += '/';
    console.log('Divide was pressed. New expression:', expression);
    updateDisplay();
}
function pressAdd() {
    displayedExpression = displayedExpression + '+';
    expression += '+';
    console.log('Add was pressed. New expression:', expression);
    updateDisplay();
}
function pressSubtract() {
    displayedExpression = displayedExpression + '-';
    expression += '-';
    console.log('Subtract was pressed. New expression:', expression);
    updateDisplay();
}
function pressSquared() {
    displayedExpression = displayedExpression + '²';
    expression += '**2';
    console.log('Squared was pressed. New expression:', expression);
    updateDisplay();
}
function pressCubed() {
    displayedExpression = displayedExpression + '³';
    expression += '**3';
    console.log('Cubed was pressed. New expression:', expression);
    updateDisplay();
}
function pressPercent() {
    displayedExpression = displayedExpression + '%';
    expression += '*0.01';
    console.log('Percent was pressed. New expression:', expression);
    updateDisplay();
}
function pressPermille() {
    displayedExpression = displayedExpression + '‰';
    expression += '*0.0001';
    console.log('Permille was pressed. New expression:', expression);
    updateDisplay();
}


/* ***************************************** */
// The following is the function structure of the solution.
// Feel free to use this as a guide, or change it to your own!

/*
   Updates the calculator display
*/
function updateDisplay() {
    let displayDiv = document.querySelector('#display')
    displayDiv.innerHTML = displayedExpression;
}

/*
   Deletes the last typed character
*/
function backspace() {
    charsToRemove = 1;
    lastChar = _getLastCharacter(displayedExpression);
    if (lastChar === '²' || lastChar === '³') {
        charsToRemove = 3;
    }
    if (lastChar === '‰') {
        charsToRemove = 7;
    }
    if (lastChar === '%') {
        charsToRemove = 5;
    }
    expression = _removeLastCharacters(expression, charsToRemove);
    displayedExpression = _removeLastCharacters(displayedExpression, 1);
    updateDisplay();
}

/*
   Clears what's typed
*/
function clearExpression() {
    let displayDiv = document.querySelector('#display')
    expression = '';
    displayedExpression = '';
    displayDiv.innerHTML = '&nbsp';
}

/*
   Adds one symbol to the expression
*/
function typeSymbol(symbol) {
    expression = expression + symbol;
    updateDisplay();
}

/*
   Adds one symbol to the expression, but with a different user-visible label
*/
function typeSpecialSymbol(symbol, label) {
    expression = expression + symbol;
    displayedExpression = displayedExpression + label; // Use the label for display purposes
    updateDisplay();
}

/*
   Loads the numeric result of the last computation into the expression
*/
function loadResult() {
    expression = result.toString();
    updateDisplay();
}

/*
   Appends the current expression to the "receipt" below the calculator
*/
function addToReceipt() {
    let receiptDiv = document.querySelector('#receipt_contents');
    if (result) {
        receipt += displayedExpression + " = " + result + '<br>';
    }
    receiptDiv.innerHTML = receipt;
}

/*
   Display error message to screen
*/
function showError(errorMessage) {
    let errorDiv = document.querySelector('#error');
    errorDiv.innerHTML = errorMessage;
}

function displayResult() {
    if (result) {
        displayedExpression = result;
        expression = result;
        updateDisplay();
    }
}


addToReceipt(); // Call right away to show the default message
