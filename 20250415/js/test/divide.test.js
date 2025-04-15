const divide = require('../prog/divide');

test('divides 10 by 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('divides 9 by 0 to throw an error', () => {
    expect(() => {
        divide(9, 0);
    }).toThrow("Division by zero is not allowed");
}
);