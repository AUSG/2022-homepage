/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  projects: ['<rootDir>/'],
  testRegex: '\\.test\\.(ts|js)x?$',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/data/(.*)$': '<rootDir>/data/$1',
  }
};
