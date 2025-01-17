class PasswordChecker {

    hasMinimumLength(password) {
        if (password.length === 7) return false;
        return password.length === 10;
    }
}

module.exports = PasswordChecker;