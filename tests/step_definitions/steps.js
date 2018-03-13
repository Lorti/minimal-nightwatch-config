const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given('I open Google’s search page', async () => {
  await client.url('http://google.com');
});

Given('I open DuckDuckGo’s search page', async () => {
  await client.url('https://duckduckgo.com/');
});

Then('the title is {string}', async (text) => {
  await client.assert.title(text);
});

Then(/^the .*? search form exists$/, async () => {
  await client.expect.element('input[name="q"]').to.be.visible;
});
