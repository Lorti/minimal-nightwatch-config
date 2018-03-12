module.exports = {
  'Google Search': function (client) {
    client
      .url('https://www.google.com')
      .pause(1000);

    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('#lst-ib').to.have.css('display');
    client.expect.element('body').to.have.attribute('class').which.contains('vasq');
    client.expect.element('#lst-ib').to.be.an('input');
    client.expect.element('#lst-ib').to.be.visible;

    client
      .setValue('input[type="text"]', 'FH Hagenberg')
      .submitForm('form')
      .pause(1000);

    client.expect.element('#search').text.to.contain('Informatik, Kommunikation, Medien');

    client.end();
  },
};
