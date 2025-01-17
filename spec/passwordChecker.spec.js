const PasswordChecker = require("../passwordChecker");

describe("Password checker", () => {
  const passwordChecker = new PasswordChecker();

  it("should return true when the password length is 10", () => {
    const result = passwordChecker.hasMinimumLength("abracadaba");

    expect(result).toBe(true);
  });

  it("should return false when the password length is 7", () => {
    const result = passwordChecker.hasMinimumLength("abracad");

    expect(result).toBe(false);
  });
});
