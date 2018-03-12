const args = ['no-sandbox'];
if (process.argv.includes('--headless')) {
  args.push('headless');
}

module.exports = {
  src_folders: ['tests'],
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