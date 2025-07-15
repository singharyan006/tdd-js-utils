// tests/caesarCipher.test.js
import caesarCipher from '../src/caesarCipher.js';

describe('caesarCipher', () => {
  test('shifts lowercase letters correctly', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('shifts uppercase letters correctly', () => {
    expect(caesarCipher('XYZ', 2)).toBe('ZAB');
  });

  test('preserves letter case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });

  test('wraps letters correctly at end of alphabet', () => {
    expect(caesarCipher('z', 1)).toBe('a');
    expect(caesarCipher('Z', 1)).toBe('A');
  });

  test('ignores punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });

  test('handles negative shifts', () => {
    expect(caesarCipher('Khoor', -3)).toBe('Hello');
  });

  test('handles empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });
});
