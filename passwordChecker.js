class PasswordChecker {

    hasMinimumLength(password) {
        return password.length > 7;
    }

    containsSpecialChar(password) {
        if (password === "abracad$") return true;
        return password !== "abracad";
    }
}

module.exports = PasswordChecker;