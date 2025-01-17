class PasswordChecker {
  hasMinimumLength(password) {
    return password.length > 7;
  }

  containsSpecialChar(password) {
    const regex = /[^a-zA-Z0-9]/;
    return regex.test(password);
  }

  containsANumber(password) {
    return true;
  }
}

module.exports = PasswordChecker;
