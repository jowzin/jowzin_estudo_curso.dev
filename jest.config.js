const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });
const nextJest = require("next/jest");

const CreateJestConfig = nextJest({
  dir: ".",
});
const jestConfig = CreateJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

module.exports = jestConfig;
