class PasswordChecker {

    hasMinimumLength(password) {
        return password.length > 7;
    }
}

module.exports = PasswordChecker;