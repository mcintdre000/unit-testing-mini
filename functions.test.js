const functions = require('./functions');

test( 'returnTwo() outputs integer 2', () => {
    expect(functions.returnTwo()).toEqual(2)
} )

test( 'greeting() outputs a dynamic greeting based on name.', () => {
    expect(functions.greeting('Drew')).toBe('Hello, Drew.')
    expect(functions.greeting('Ali')).toBe('Hello, Ali.')
} )

test( 'add() outputs the dynamic sum of 2 integers passed in', () => {
    expect(functions.add(1,2)).toEqual(3)
    expect(functions.add(3,2)).toEqual(5)
} )

test( 'multiply() outputs the dynamic product of 2 integers passed in', () => {
    expect(functions.multiply(1,2)).toEqual(2)
    expect(functions.multiply(3,2)).toEqual(6)
} )

test( 'divide() outputs the dynamic quotient  of 2 integers passed in', () => {
    expect(functions.divide(2,2)).toEqual(1)
    expect(functions.divide(6,2)).toEqual(3)
} )

test( 'subtract() outputs the dynamic difference of 2 integers passed in', () => {
    expect(functions.subtract(1,2)).toEqual(-1)
    expect(functions.subtract(3,2)).toEqual(1)
} )