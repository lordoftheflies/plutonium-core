/* eslint-disable import/no-extraneous-dependencies */
const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        {
          pattern: config.grep ? config.grep : 'dist/**/test/**/*.test.js',
          type: 'module',
        },
      ],
      plugins: ['karma-junit-reporter', 'karma-coverage'],
      esm: {
        nodeResolve: true
      },
      // you can overwrite/extend the config further
      singleRun: true,
      browsers: ['ChromeHeadless'],
      reporters: ['progress', 'junit', 'coverage'],
      junitReporter: {
        outputDir: 'test-results',
        outputFile: 'test-report.xml',
        useBrowserName: true,
        suite: '',
      },
      coverageReporter: {
        dir: 'coverage',
        watermarks: {
          statements: [50, 75],
          functions: [50, 75],
          branches: [50, 75],
          lines: [50, 75],
        },
        reporters: [],
      },
      coverageIstanbulReporter: {
        check: {
          global: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50,
          },
          each: {
            statements: 50,
            branches: 50,
            functions: 50,
            lines: 50,
          },
        },
      },
    })
  );
  return config;
};
