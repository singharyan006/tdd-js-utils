# 🧪 TDD JavaScript Utils

A collection of JavaScript utility functions built using **Test-Driven Development (TDD)** methodology with Jest testing framework.

![Version](https://img.shields.io/badge/version-v1.0.0-blue)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-11%20total-blue)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub Release](https://img.shields.io/github/v/release/singharyan006/tdd-js-utils)

## 🎯 Project Overview

This project demonstrates the TDD approach where:
1. **Tests are written first** (Red phase)
2. **Minimal code is written** to make tests pass (Green phase)  
3. **Code is refactored** for better quality (Refactor phase)

Each utility function is thoroughly tested with multiple edge cases and scenarios.

## 📚 Available Functions

### 🔤 String Utilities

#### `capitalize(string)`
Capitalizes the first letter of a string.
```javascript
import capitalize from './src/capitalize.js';

capitalize('hello world');  // 'Hello world'
capitalize('');             // ''
capitalize('a');            // 'A'
```

#### `reverseString(string)`
Reverses a string using a for-loop approach.
```javascript
import reverseString from './src/reverseString.js';

reverseString('hello');     // 'olleh'
reverseString('');          // ''
reverseString('a');         // 'a'
```

#### `caesarCipher(string, shift)`
Encrypts text using Caesar cipher with alphabet wrapping.
```javascript
import caesarCipher from './src/caesarCipher.js';

caesarCipher('Hello', 3);   // 'Khoor'
caesarCipher('XYZ', 3);     // 'ABC'
caesarCipher('abc', -1);    // 'zab'
```

### 🔢 Math Utilities

#### `calculator`
Basic arithmetic operations object.
```javascript
import calculator from './src/calculator.js';

calculator.add(2, 3);       // 5
calculator.subtract(5, 2);  // 3
calculator.multiply(3, 4);  // 12
calculator.divide(10, 2);   // 5
```

#### `analyzeArray(array)`
Analyzes an array of numbers and returns statistics.
```javascript
import analyzeArray from './src/analyzeArray.js';

analyzeArray([1, 8, 3, 4, 2, 6]);
// Returns: { average: 4, min: 1, max: 8, length: 6 }
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/singharyan006/tdd-js-utils.git

# Navigate to project directory
cd tdd-js-utils

# Install dependencies
npm install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 🧪 Test-Driven Development Process

This project follows the **Red-Green-Refactor** cycle:

### 1. 🔴 Red Phase
Write failing tests first:
```javascript
test('capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});
```

### 2. 🟢 Green Phase  
Write minimal code to pass:
```javascript
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
```

### 3. 🔄 Refactor Phase
Improve code quality:
```javascript
function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}
```

## 📁 Project Structure

```
tdd-js-utils/
├── src/
│   ├── capitalize.js
│   ├── reverseString.js
│   ├── caesarCipher.js
│   ├── calculator.js
│   └── analyzeArray.js
├── tests/
│   ├── capitalize.test.js
│   ├── reverseString.test.js
│   ├── caesarCipher.test.js
│   ├── calculator.test.js
│   └── analyzeArray.test.js
├── package.json
├── babel.config.js
└── README.md
```

## 🛠️ Technologies Used

- **JavaScript (ES6+)** - Core language
- **Jest** - Testing framework
- **Babel** - ES6 module transpilation
- **Git** - Version control
- **TDD Methodology** - Development approach

## 📊 Test Coverage

All functions are tested with comprehensive test cases covering:
- ✅ Happy path scenarios
- ✅ Edge cases (empty inputs, single characters)
- ✅ Error handling
- ✅ Boundary conditions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-util`)
3. Write tests first (TDD approach)
4. Implement the function
5. Ensure all tests pass
6. Commit changes (`git commit -m 'feat: add new utility function'`)
7. Push to branch (`git push origin feature/new-util`)
8. Open a Pull Request

## 📦 Releases

### Latest Release: v1.0.0
- ✅ Complete implementation of all 5 utility functions
- ✅ Comprehensive test suite with 100% coverage
- ✅ Full documentation and examples
- ✅ TDD methodology demonstration

[🔖 View all releases](https://github.com/singharyan006/tdd-js-utils/releases) | [🔖 Download latest](https://github.com/singharyan006/tdd-js-utils/releases/latest)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Aryan Singh** - [@singharyan006](https://github.com/singharyan006)

---

⭐ **Star this repo** if you find it helpful for learning TDD!
