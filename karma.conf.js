/* global module*/
module.exports = function (config) {
  "use strict";

  config.set({

    frameworks: ['ui5'],

    ui5: {
      type: "application",
      htmlrunner: false,
      url: "https://sapui5.hana.ondemand.com/1.63.1/",
      config: {
        theme: 'sap_belize',
        language: 'EN',
        animation: false,
        compatVersion: 'edge',
        async: true,
        resourceroots: {
          'soldtoparty-ui': './webapp'
        }
      },
      tests: [
        'soldtoparty-ui/test/unit/AllTests.js',
      ]
    },

    client: {
      clearContext: true,
      qunit: {
        showUI: true
      }
    },
    preprocessors: {
      "./*.js": ["coverage"],
      "./!(test|localService)/**/*.js": ["coverage"]
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    reporters: ["progress", "coverage", "junit"],
    coverageReporter: {
      dir: "./target/coverage",
      includeAllSources: true,
      reporters: [{
        type: "cobertura", file: "cobertura-coverage.xml"
      }]
    },
    junitReporter: {
      outputDir: "./target/karma",
      outputFile: "TEST-qunit.xml",
      suite: "",
      useBrowserName: true
    },
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // level of browser logging
    browserConsoleLogOptions: {
      level: 'warn'
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    //browsers: ['ChromeHeadless'],
    browsers: ['ChromeHeadless'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    captureTimeout: 180000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 60000,
    reportSlowerThan: 90,
    browserDisconnectTimeout: 60000
  });
};
