function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}
function modulus(firstNumber, secondNumber) {
    return firstNumber % secondNumber;
}

function calculate() {
    var firstNumber = parseFloat(prompt("Please enter your first number"));
    var secondNumber = parseFloat(prompt("Please enter your first number"));
    var operator = prompt("Please enter operator e.g: +,-,*,/,%");
    var result;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
        case "%":
            result = modulus(firstNumber, secondNumber);
            break;
        default:
            alert("Invalid operator.. :+,-,*,/,%")
    }
    alert(result);
}
calculate();