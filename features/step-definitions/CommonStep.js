const { Given ,When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login');
const Page = require('../pageobjects/Page');
const RegisterPage = require('../pageobjects/Register');
const AddToCart = require('../pageobjects/AddToCart');
const RemoveFromCart = require('../pageobjects/RemoveFromCart.js');

Given(/^I am on the Loginhome page$/, async () => {
   await Page.openWeburl();
});

When(/^I login with (.+)and (.+)$/, async (loginEmail,loginPassword) => {
    await LoginPage.login(loginEmail,loginPassword)
});
When(/^I register with (.+),(.+), (.+), (.+),(.+)and (.+)$/, async (firstname, lastname, email, telephone,password,confirmpassword) => {
    await RegisterPage.register(firstname, lastname, email, telephone,password,confirmpassword)
});
When(/^I click on Add to cart button$/, async () => {
   await AddToCart.clickOnAddToCart();
});

When(/^I click on shopping cart button$/, async () => {
    await AddToCart.clickOnAddToCart();
});
Then(/^the item should removed from cart$/,async()=>
{
    await RemoveFromCart.clickOnRemoveFromCart();
});

Then(/^I should see a Cart message saying (.+)$/, async (cartMessage) => {
    expect(AddToCart.getCartmessage).toBeExisting();
    expect(AddToCart.getCartmessage).toHaveTextContaining(cartMessage);
});
Then(/^I should see a Regsiter message saying (.+)$/, async (registermessage) => {
    expect(RegisterPage.getRegistermessage).toBeExisting();
    expect(RegisterPage.getRegistermessage).toHaveTextContaining(registermessage);
});
Then(/^I should see a Account message saying (.+)$/, async (accountmessage) => {
    expect(LoginPage.getAccountmessage).toBeExisting(accountmessage);
    expect(LoginPage.getAccountmessage).toHaveTextContaining(accountmessage);
});