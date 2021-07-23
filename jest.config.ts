import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.ts"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.(js|jsx)$/": "<rootDir>/node_modules/babel-jest",
    "/^.+.(css|less|scss|sass)$/": "identity-obj-proxy",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$/": "identity-obj-proxy",
  },
};

export default config;
