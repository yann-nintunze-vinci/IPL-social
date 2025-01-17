class PasswordChecker {
  hasMinimumLength(password) {
    return password.length > 7;
  }

  containsSpecialChar(password) {
    const regex = /[^a-zA-Z0-9]/;
    return regex.test(password);
  }

  containsANumber(password) {
    const regex = /\d/;
    return regex.test(password);
  }

  containsIPL(password) {
    return password.toLowerCase().includes("ipl");
  }
}

module.exports = PasswordChecker;
