function caesarCipher(str, shift) {
  return [...str].map(char => shiftChar(char, shift)).join('');
}

function shiftChar(char, shift) {
  const isUpper = char >= 'A' && char <= 'Z';
  const isLower = char >= 'a' && char <= 'z';

  if (!isUpper && !isLower) return char;

  const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
  const charCode = char.charCodeAt(0) - base;
  const shifted = (charCode + shift + 26) % 26;

  return String.fromCharCode(shifted + base);
}

export default caesarCipher;
