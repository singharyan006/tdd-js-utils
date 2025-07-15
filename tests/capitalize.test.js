import capitalize from "../src/capitalize";

describe('capitalize', () => {
    test('capitalizes the first letter of a lowercase word', () => {
        expect(capitalize('fellas')).toBe('Fellas');
    });

    
    test('leaves the rest of the string unchanged', () => {
        expect(capitalize('aryan')).toBe('Aryan');
    });

    
    test('return empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    
    test('handles single letter input', () => {
        expect(capitalize('x')).toBe('X');
    });


    test('doesn not change already capitalized first letter', () => {
        expect(capitalize('Bosss')).toBe('Bosss');
    });

    
    test('handles non-alphabetic first character', () => {
        expect(capitalize('1checkthatbaby')).toBe('1checkthatbaby');
    });
});