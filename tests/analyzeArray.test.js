// tests/analyzeArray.test.js
import analyzeArray from '../src/analyzeArray.js';

describe('analyzeArray', () => {
  test('returns correct average, min, max, and length', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles single-element array', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('handles negative numbers', () => {
    const result = analyzeArray([-10, -5, 0, 5, 10]);
    expect(result).toEqual({
      average: 0,
      min: -10,
      max: 10,
      length: 5
    });
  });

  test('throws error on empty array', () => {
    expect(() => analyzeArray([])).toThrow('Input must be a non-empty array');
  });

  test('throws error on non-array input', () => {
    expect(() => analyzeArray('not-an-array')).toThrow('Input must be a non-empty array');
  });
});
