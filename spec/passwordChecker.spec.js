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

  it("should return false when the password don't contains special char", () => {
    const result = passwordChecker.containsSpecialChar("abracad");

    expect(result).toBe(false);
  });

  it("should return true when the password contains special char $", () => {
    const result = passwordChecker.containsSpecialChar("abracad$");

    expect(result).toBe(true);
  });

  it("should return true when the password contains special char &", () => {
    const result = passwordChecker.containsSpecialChar("abracad&");

    expect(result).toBe(true);
  });

  it("should return true when the password contains a number (1)", () => {
    const result = passwordChecker.containsANumber("abracad1");

    expect(result).toBe(true);
  });

  it("should return true when the password contains a number (2)", () => {
    const result = passwordChecker.containsANumber("abracad2");

    expect(result).toBe(true);
  });

  it("should return false when the password don't contains the string IPL (abracadabra)", () => {
    const result = passwordChecker.containsIPL("abracadabra");

    expect(result).toBe(false);
  });
});
