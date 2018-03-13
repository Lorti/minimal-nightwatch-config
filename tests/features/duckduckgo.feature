Feature: DuckDuckGo Search

  Scenario: Searching DuckDuckGo

    Given I open DuckDuckGo’s search page
    Then the title is "DuckDuckGo Search Engine"
    And the DuckDuckGo search form exists

  Scenario: Searching DuckDuckGo again

    Given I open DuckDuckGo’s search page
    Then the title is "DuckDuckGo Search Engine"
    And the DuckDuckGo search form exists
