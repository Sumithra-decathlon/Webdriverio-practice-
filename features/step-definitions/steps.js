const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/Register');



Given(/^I am on the home page$/, async (page) => {
     await LoginPage.openWeburl;
});

When(/^I login with (.+),(.+), (.+), (.+),(.+)and (.+)$/, async (irstname, lastname, email, telephone,password,confirmpassword) => {
    await LoginPage.login(irstname, lastname, email, telephone,password,confirmpassword)
});

Then(/^I should see a flash message saying (.+)$/, async (message) => {
    expect(LoginPage.getmessage).toBeExisting();
    expect(LoginPage.getmessage).toHaveTextContaining(message);
});

