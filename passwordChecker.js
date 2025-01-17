class PasswordChecker {

    hasMinimumLength(password) {
        return password.length > 7;
    }

    containsSpecialChar(password) {
        return false;
    }
}

module.exports = PasswordChecker;