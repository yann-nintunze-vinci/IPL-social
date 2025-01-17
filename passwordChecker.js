class PasswordChecker {

    hasMinimumLength(password) {
        return password.length > 7;
    }

    containsSpecialChar(password) {
        return password !== "abracad";
    }
}

module.exports = PasswordChecker;