Feature: Verify user can register

  @3
  Scenario: Verify user can register
    Given I am on the home page
    When I login with <firstname>, <lastname>, <email>, <telephone>,<password> and <confirmpassword>
    Then I should see a flash message saying <message>

    Examples:
      | firstname|  |lastname| |email                 | |telephone|  |password | |confirmpassword| |message                       |
      | Sumithra |   |Aradhya| |gnasumithra31@gmai.com| |8073647919| |password | |password       | |Your Account Has Been Created!|
