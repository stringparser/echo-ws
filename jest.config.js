module.exports = {
    rootDir: '.',

    clearMocks: true, // used to better isolate tests
    resetMocks: true, // used to better isolate tests

    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },

    testMatch: ['**/test/**/?(*.)+(spec|test).+(ts|tsx|js)'],
    moduleNameMapper: { '@/(.*)': '<rootDir>/$1' },
    testPathIgnorePatterns: ['/build/', '/node_modules/'],

    collectCoverage: true,
    coverageReporters: ['text', 'html'],
    collectCoverageFrom: ['./src/**/?*.{js,ts}', '!./src/index.ts'],
};
