const { defaults } = require("jest-config");
module.exports = {
  // setupTestFrameworkScriptFile: require.resolve("./jest.setup.js"),
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/*.config.{js,jsx}",
    "!**/*.setup.{js,jsx}",
    "!serviceWorker.js",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/vendor/**"
  ],
  coveragePathIgnorePatterns: ["/node_modules", "/coverage"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 92,
      functions: 92,
      lines: 92,
      statements: 92
    },
    "./src/components/": {
      branches: 98,
      statements: 98
    },
    "./src/reducers/**/*.js": {
      statements: 98
    }
  },
  timers: "fake",
  verbose: true,
};
