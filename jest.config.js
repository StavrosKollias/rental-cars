module.exports = {
  // eslint-disable-next-line linebreak-style
  roots: ['<rootDir>'],
  setupFilesAfterEnv: [
    '<rootDir>/src/test_utils/setupTests.ts',
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react',
  ],
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.jsx', '!src/index.jsx', 'src/**/*.ts', 'src/**/*.tsx'],
  verbose: true,
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  modulePaths: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/', '<rootDir>/test_utils'],
  transform: {
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
