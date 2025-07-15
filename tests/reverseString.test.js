import reverseString from '../src/reverseString.js';

describe('reverseString', () => {
    test('reverse a regular string', () => {
        expect(reverseString('letsgoback')).toBe('kcabogstel');
    });


    test('reverse a string with spaces', () => {
        expect(reverseString(`let's do it again`)).toBe(`niaga ti od s'tel`);
    });

    
    test('returns an empty string when input is empty', () => {
        expect(reverseString('')).toBe('');
    });


    test('reverses a single character string', () => {
        expect(reverseString('x')).toBe('x');
    });


    test('reverses a string with punctuation', () => {
        expect(reverseString('!aryan')).toBe('nayra!');
    });
})