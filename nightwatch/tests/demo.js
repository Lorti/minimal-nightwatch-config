module.exports = {
  'DuckDuckGo Search': (client) => {
    client
      .url('https://duckduckgo.com/')
      .pause(1000);

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('body').to.have.attribute('class').which.contains('page-index');
    client.expect.element('.logo_homepage').text.to.contain('DuckDuckGo');
    client.expect.element('#search_form_input_homepage').to.be.an('input');
    client.expect.element('#search_form_input_homepage').to.be.visible;

    client
      .setValue('input[type="text"]', 'FH Hagenberg')
      .submitForm('form')
      .pause(1000);

    client.expect.element('#links').text.to.contain('Informatik, Kommunikation, Medien');

    client.end();
  },
};
