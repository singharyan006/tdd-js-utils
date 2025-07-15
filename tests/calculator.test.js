// tests/calculator.test.js
import calculator from '../src/calculator.js';

describe('calculator', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('returns negative results correctly', () => {
    expect(calculator.subtract(2, 5)).toBe(-3);
  });

  test('handles decimal calculations', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('throws error on division by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});
