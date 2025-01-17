export default {
  spec_dir: "/spec",
  spec_files: [
    "/spec/passwordChecker.test.js"
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}
