const validateUser = require('./validateUser');

describe('validateUser', () => {
    let validUser;

    beforeEach(() => {
        // A fully valid user object
        validUser = {
            name: "Ahmed",
            age: 22,
            email: "Ahmad@mail.com",
            isActive: true,
            courses: ["Testing", "IoT"],
            address: {
                city: "Alex",
                zip: 12345
            }
        };
    });

    test('should return empty array for a fully valid user object', () => {
        const result = validateUser(validUser);
        expect(result).toEqual([]);
    });

    // Invalid Cases
    test('should return error for empty or invalid name', () => {
        validUser.name = "";
        expect(validateUser(validUser)).toContain("Name must be a non-empty string.");

        validUser.name = 123;
        expect(validateUser(validUser)).toContain("Name must be a non-empty string.");
    });

    test('should return error for invalid email', () => {
        validUser.email = "Ahmadmail.com";
        expect(validateUser(validUser)).toContain("Email must be a valid string containing '@'.");
    });

    test('should return error for incorrect age (negative, zero, or wrong type)', () => {
        validUser.age = 0;
        expect(validateUser(validUser)).toContain("Age must be a number between 1 and 99.");

        validUser.age = -5;
        expect(validateUser(validUser)).toContain("Age must be a number between 1 and 99.");

        validUser.age = 100;
        expect(validateUser(validUser)).toContain("Age must be a number between 1 and 99.");

        validUser.age = "22";
        expect(validateUser(validUser)).toContain("Age must be a number between 1 and 99.");
    });

    test('should return error if isActive is not strictly true', () => {
        validUser.isActive = false;
        expect(validateUser(validUser)).toContain("isActive must be strictly true.");

        validUser.isActive = "true";
        expect(validateUser(validUser)).toContain("isActive must be strictly true.");
    });

    test('should return error for empty courses array or non-string elements', () => {
        validUser.courses = [];
        expect(validateUser(validUser)).toContain("Courses must be a non-empty array.");

        validUser.courses = ["Testing", 101];
        expect(validateUser(validUser)).toContain("All elements in courses must be strings.");
    });

    test('should return error for missing or incomplete address', () => {
        validUser.address = undefined;
        expect(validateUser(validUser)).toContain("Address must exist and be an object.");

        validUser.address = { city: "Alex" };
        expect(validateUser(validUser)).toContain("Address must include a valid zip code number.");

        validUser.address = { zip: 12345 };
        expect(validateUser(validUser)).toContain("Address must include a valid city.");
    });

    test('should return error for incorrect data types in address fields', () => {
        validUser.address.zip = "12345";
        expect(validateUser(validUser)).toContain("Address must include a valid zip code number.");

        validUser.address.city = 123;
        expect(validateUser(validUser)).toContain("Address must include a valid city.");
    });

    // Edge Cases
    test('should handle null input', () => {
        const result = validateUser(null);
        expect(result).toEqual(["Input must be a valid user object."]);
    });

    test('should handle missing fields', () => {
        const user = { name: "Ahmed" };
        const result = validateUser(user);
        expect(result).toContain("Email must be a valid string containing '@'.");
        expect(result).toContain("Age must be a number between 1 and 99.");
        expect(result).toContain("isActive must be strictly true.");
        expect(result).toContain("Courses must be a non-empty array.");
        expect(result).toContain("Address must exist and be an object.");
    });

    test('should handle empty object input', () => {
        const result = validateUser({});
        expect(result).toContain("Name must be a non-empty string.");
        expect(result).toContain("Email must be a valid string containing '@'.");
        expect(result).toContain("Age must be a number between 1 and 99.");
        expect(result).toContain("isActive must be strictly true.");
        expect(result).toContain("Courses must be a non-empty array.");
        expect(result).toContain("Address must exist and be an object.");
    });

});
