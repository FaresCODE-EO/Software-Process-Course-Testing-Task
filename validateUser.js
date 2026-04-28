function validateUser(user) {
    const errors = [];

    if (!user || typeof user !== 'object' || Array.isArray(user)) {
        return ["Input must be a valid user object."];
    }

    // String values
    if (typeof user.name !== 'string' || user.name.trim() === '') {
        errors.push("Name must be a non-empty string.");
    }
    
    if (typeof user.email !== 'string' || !user.email.includes('@')) {
        errors.push("Email must be a valid string containing '@'.");
    }

    // Number values
    if (typeof user.age !== 'number' || user.age < 1 || user.age > 99) {
        errors.push("Age must be a number between 1 and 99.");
    }

    // Address and zip
    if (!user.address || typeof user.address !== 'object' || Array.isArray(user.address)) {
        errors.push("Address must exist and be an object.");
    } else {
        if (!user.address.city || typeof user.address.city !== 'string' || user.address.city.trim() === '') {
            errors.push("Address must include a valid city.");
        }
        if (typeof user.address.zip !== 'number' || isNaN(user.address.zip)) {
            errors.push("Address must include a valid zip code number.");
        }
    }

    // Boolean value
    if (user.isActive !== true) {
        errors.push("isActive must be strictly true.");
    }

    // Array
    if (!Array.isArray(user.courses) || user.courses.length === 0) {
        errors.push("Courses must be a non-empty array.");
    } else {
        const allStrings = user.courses.every(c => typeof c === 'string');
        if (!allStrings) {
            errors.push("All elements in courses must be strings.");
        }
    }

    return errors;
}

module.exports = validateUser;
