Feature: Member modal popup
    In order to edit member
    As a navigator
    I need to open member modal

Scenario: A list contain members
  Given I am on "http://bjj.local/"
   When I click element "a.editMember"
   Then I will wait to see "Edycja użytkownika"

Scenario: Check delete button
    When I click element "input#deleteUserCheckbox"
    Then I will wait to see "Usuń"

Scenario: Uncheck delete button
    When I click element "input#deleteUserCheckbox"
    Then I will wait to see "Zapisz"