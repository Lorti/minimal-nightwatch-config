# Minimal Nightwatch config w/ Chrome Driver

## Nightwatch

```bash
https://github.com/Lorti/minimal-nightwatch-config
cd nightwatch
npm install
npm run nightwatch
npm run nightwatch:headless
```

```
[Demo] Test Suite
=================
Running:  DuckDuckGo Search

✔ Expected element <body> to be present in 1000ms - element was present in 25ms
✔ Expected element <body> to have attribute "class" which contains: "page-index" - condition was met in 24ms
✔ Expected element <.logo_homepage> text to contain: "DuckDuckGo" - condition was met in 46ms
✔ Expected element <#search_form_input_homepage> to be an input - condition was met in 31ms
✔ Expected element <#search_form_input_homepage> to be visible - condition was met in 32ms
✔ Expected element <#links> text to contain: "Informatik, Kommunikation, Medien" - condition was met in 125ms

OK. 6 assertions passed. (6.536s)
```

## Cucumber

```bash
https://github.com/Lorti/minimal-nightwatch-config
cd cucumber
npm install
npm test
```

```
Feature: DuckDuckGo Search

  Scenario: Searching DuckDuckGo
    Given I open DuckDuckGo’s search page
    Then the title is "DuckDuckGo — Privacy, simplified."
√ Testing if the page title equals "DuckDuckGo — Privacy, simplified."  - 15 ms.
    And the DuckDuckGo search form exists
√ Testing if element <input[name="q"]> is visible  - 41 ms.

  Scenario: Searching DuckDuckGo again
    Given I open DuckDuckGo’s search page
    Then the title is "DuckDuckGo — Privacy, simplified."
√ Testing if the page title equals "DuckDuckGo — Privacy, simplified."  - 13 ms.
    And the DuckDuckGo search form exists
√ Testing if element <input[name="q"]> is visible  - 32 ms.

2 scenarios (2 passed)
6 steps (6 passed)
0m03.936s
```

## Documentation

* [Nightwatch](http://nightwatchjs.org/)
* [Nightwatch API](https://nightwatch-api.netlify.com/)
* [Cucumber](https://cucumber.io/)
