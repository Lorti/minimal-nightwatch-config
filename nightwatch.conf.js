require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'tests/step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    'tests/features',
  ],
});

const args = ['no-sandbox'];
if (process.argv.includes('--headless')) {
  args.push('headless');
}

module.exports = {
  globals_path: 'globals.js',

  selenium: {
    start_process: false,
  },

  test_settings: {
    default: {
      selenium_port: 9515,
      selenium_host: 'localhost',
      default_path_prefix: '',

      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args,
        },
        acceptSslCerts: true,
      },
    },
  },
};
