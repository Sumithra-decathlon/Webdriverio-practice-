

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnMyAccount () {
        return $("//span[normalize-space()='My Account']");
    }

    get btnRegister () {
        return $("//a[normalize-space()='Register']");
    }

    get inputFirstname () {
        return $("//input[@id='input-firstname']");
    }
    get inputLastname () {
        return $("//input[@id='input-lastname']");
    }
    
    get inputEmail () {
        return $("//input[@id='input-email']");
    }

    get inputTelephoneNumber () {
        return $("//input[@id='input-telephone']");
    }

    get inputPassword () {
        return $("//input[@id='input-password']");
    }
    get inputConfirmPassword () {
        return $("//input[@id='input-confirm']");
    }

    get btnPrivacyPolicy () {
        return $("//input[@name='agree']");
    }

    get btnContinue () {
        return $("//input[@value='Continue']");
    }

    get registerMessage()
    {
        return $("//h1[normalize-space()='Your Account Has Been Created!']");
    }
    
    async openWeburl()
    {
        await browser.url("http://tutorialsninja.com/demo/index.php?route=common/home");
        await browser.getUrl();

    }
    async login (firstname, lastname, email, telephone,password,confirmpassword) {
        await this.btnMyAccount.click();
        await this.btnMyAccount.click();
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputTelephoneNumber.setValue(telephone);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmpassword);
        await this.btnPrivacyPolicy.click();
        await this.btnContinue.click();
        
    }
    async getmessage()
    {
        await this.registerMessage.waitForDisplayed();
        await this.registerMessage.getText();
    }


}

module.exports = new LoginPage();
