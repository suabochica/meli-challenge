import type { Config } from 'jest';


const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/routes/(.*)$': '<rootDir>/src/routes/$1',
    '@/controllers/(.*)$': '<rootDir>/src/controllers/$1',
  },
  verbose: true,
};

export default config;
