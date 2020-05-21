Feature: Trash Day
  The Grouch Trash Service Google action should tell me when trash pick up is

  Scenario: There is trash pickup this week
    Given I ask when trash pickup is
    When asking Grouch Trash Service
    Then I am told when trash pickup is this week
