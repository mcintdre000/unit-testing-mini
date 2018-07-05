let functions = {}

functions.returnTwo = function returnTwo() { return 2 };
functions.greeting = function greeting(name) { return "Hello, " + name + "." };
functions.add = function add(num1, num2) { return num1 + num2 };
functions.multiply = function multiply(num1, num2) { return num1 * num2 };
functions.divide = function divide(num1, num2) { return num1 / num2 };
functions.subtract = function subtract(num1,num2) { return num1 - num2 };

module.exports = functions;