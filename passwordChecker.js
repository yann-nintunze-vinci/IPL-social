class PasswordChecker {

    hasMinimumLength(password) {
        return password.length > 7;
    }

    containsSpecialChar(password) {
        return password.includes("$") || password.includes("&");
    }
}

module.exports = PasswordChecker;