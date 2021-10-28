Feature: SSR

  Scenario: SSR Enabled test
    Given I open "SSR Enabled" page
    And I see comments section
    Then I should not see Loading comment indicator
    And I should see comments loaded

  Scenario: SSR Disabled test
    Given I open "SSR Disabled" page
    And I see comments section
    Then I should see Loading comment indicator
    And I should see comments loaded