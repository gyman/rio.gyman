Feature: New member modal popup
    In order to add member
    As a navigator
    I need to open member modal

Scenario: A list contain members
  Given I am on "http://bjj.local/"
   When I click element "a.createNewMember"
   Then I will wait to see "Nowy użytkownik"