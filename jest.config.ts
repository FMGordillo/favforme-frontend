// jest.config.ts
import type { Config } from "@jest/types";

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    clearMocks: true,
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts", "!**/node_modules/**"],
    coverageDirectory: ".coverage",
    // we need to create this file
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: ["/node_modules/"],
  };
};
