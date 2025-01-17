class PasswordChecker {

    hasMinimumLength(password) {
        return password.length === 10;
    }
}

module.exports = PasswordChecker;