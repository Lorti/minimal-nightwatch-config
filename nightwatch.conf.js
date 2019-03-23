const args = ['no-sandbox'];
if (process.argv.includes('--headless')) {
  args.push('headless');
}

module.exports = {
  src_folders: ['tests'],
  globals_path: 'globals.js',

  webdriver: {
    start_process: true,
  },

  test_settings: {
    default: {
      webdriver: {
        port: 9515,
        server_path: 'node_modules/.bin/chromedriver',
        cli_args: ['--verbose'],
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: { args },
        acceptSslCerts: true,
      },
    },
    // ... add GeckoDriver config
    // ... add Microsoft WebDriver config
    // ... add SafariDriver config
  },
};
