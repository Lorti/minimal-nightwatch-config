/* eslint-disable arrow-body-style */

const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given('I open Google`s search page', async () => {
  await client.url('http://google.com');
});

Given('I open DuckDuckGo search page', async () => {
  await client.url('https://duckduckgo.com/');
});

Then('the title is {string}', async (text) => {
  await client.assert.title(text);
});

Then('the Google search form exists', async () => {
  await client.assert.visible('input[name="q"]');
});

Then('the DuckDuckGo search form exists', async () => {
  await client.assert.visible('input[name="q"]');
});
