Feature: Verify user can register

@1
Scenario Outline: Verify that use can add a product to their cart
  Given I am on the Loginhome page
  When I click on Add to cart button
  When I click on shopping cart button
  Then I should see a Cart message saying <cartMessage>
Examples:
    |cartMessage|
    |Shopping Cart|

@2
Scenario Outline: Verify user can remove a product from the cart
  Given I am on the Loginhome page
  When I click on Add to cart button
  When I click on shopping cart button
  Then the item should removed from cart

@3
  Scenario Outline: Verify user can register
    Given I am on the Loginhome page
    When I register with <firstname>, <lastname>, <email>, <telephone>,<password> and <confirmpassword>
    Then I should see a Regsiter message saying <message>

    Examples:
      | firstname |lastname |email                  |telephone  |password |confirmpassword|message|
      | SumithraV |Aradhya  |gnasumithra319h@gmail.com| 8073647910|password7| password7     |Your Account Has Been Created!|


@4
  Scenario Outline: Verify user can login
    Given I am on the Loginhome page
    When I login with <loginEmail> and <loginPassword>
    Then I should see a Account message saying <message>

    Examples:
      | email                  | password |message|
      | gnasumithra12@gmail.com| Sumi@3107| My Account|

