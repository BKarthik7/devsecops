const add = require('../prog/add');

test('adds 3 + 5 to equal 8', () => {
    expect(add(3, 5)).toBe(8);
});
