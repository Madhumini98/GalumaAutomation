const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Increase default timeout values to handle slow loading elements
    defaultCommandTimeout: 15000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 180000,
    // Retry configuration for flaky tests
    retries: {
      runMode: 2,
      openMode: 0
    }
  },
});
