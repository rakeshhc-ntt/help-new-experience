Feature: Navigation

  Scenario: Try to navigate to SSR page
    When I open homepage
    And I click on header button "SSR"
    Then I should be navigated to url ending with "ssr-enabled"

  Scenario: Try to navigate to SSR Disabled page
    When I open homepage
    And I click on header button "SSR Disabled"
    Then I should be navigated to url ending with "ssr-disabled"