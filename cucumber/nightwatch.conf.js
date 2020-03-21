const chromedriver = require('chromedriver');

module.exports = {
  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: 4444,
    cli_args: ['--port=4444'],
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless'],
        },
      },
    },
  },
};
