// nightwatch.config.js

module.exports = {
  selenium: {
    start_process: false,
  },
  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'chrome',
    },
  },
};
