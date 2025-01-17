class PasswordChecker {
  hasMinimumLength(password) {
    return password.length > 7;
  }

  containsSpecialChar(password) {
    const regex = /[^a-zA-Z0-9]/;
    return regex.test(password);
  }

  containsANumber(password) {
    return password.includes("1");
  }
}

module.exports = PasswordChecker;
