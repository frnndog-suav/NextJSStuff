module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.ts(x)'],
    setupFilesAfterEnv: ['<rootDir>/.jest/jestSetup.ts'],
};
