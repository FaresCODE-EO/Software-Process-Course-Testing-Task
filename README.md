# User Validation Testing Task

A robust JavaScript utility for rigorous user data validation. This project includes a comprehensive Jest test suite that covers valid scenarios, invalid inputs, edge cases, and detailed error handling.

## Features

- **Strict Type Checking:** Ensures correct data types for user properties (e.g., strings for names, numbers for age).
- **Structural Integrity:** Validates that the user object conforms to the expected schema.
- **Content Validation:** Checks for valid content formats (e.g., proper email format, valid age ranges).
- **Comprehensive Testing:** Built with a full suite of Jest unit tests covering edge cases and error reporting.

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FaresCODE-EO/Software-Process-Course-Testing-Task.git
   ```

2. Navigate into the directory:
   ```bash
   cd Software-Process-Course-Testing-Task
   ```

3. Install the dependencies (Jest):
   ```bash
   npm install
   ```

## Usage

You can import and use the `validateUser` function in your own JavaScript files:

```javascript
const { validateUser } = require('./validateUser');

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 25
};

const result = validateUser(user);
console.log(result);
```

## Running Tests

To execute the Jest test suite and verify all validation rules, run:

```bash
npm test
```
