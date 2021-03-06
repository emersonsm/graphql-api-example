export default {
    testPathIgnorePatterns: ['node_modules/'],
    clearMocks: true,
    setupFilesAfterEnv: ['./jest.setup.mjs'],
    verbose: true,
    testEnvironment: 'jest-environment-node',
    transform: {},
    testRegex: '(/test/.*(test|spec)).(mjs?|jsx?|js?|tsx?|ts?)$',
    moduleFileExtensions: [ 'js', 'jsx', 'mjs' ],
    collectCoverage: true,
    collectCoverageFrom: ['src/**'],
    coverageDirectory: 'test/coverage',
    coverageProvider: 'v8',
    coverageReporters: [ 'json', 'html' ],
    coveragePathIgnorePatterns: [
        'node_modules',
        'migrations',
        'seeds',
    ],
};
