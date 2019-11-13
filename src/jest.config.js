import { defaults } from "jest-config";
export const setupFilesAfterEnv = [
  "babel-polyfill",
  "react-testing-library/cleanup-after-each"
  // ... other setup files ...
];
export const moduleFileExtensions = [
  ...defaults.moduleFileExtensions,
  "ts",
  "tsx"
];
export const collectCoverageFrom = [
  "**/*.{js,jsx}",
  "!**/*.config.{js,jsx}",
  "!**/*.setup.{js,jsx}",
  "!serviceWorker.js",
  "!**/node_modules/**",
  "!**/coverage/**",
  "!**/vendor/**"
];
export const coveragePathIgnorePatterns = ["/node_modules", "/coverage"];
export const collectCoverage = true;
export const coverageThreshold = {
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
};
export const timers = "fake";
export const verbose = true;
export const testMatch = ["<rootDir>/**/*.test.js"];
export const snapshotSerializers = ["jss-snapshot-serializer"];
