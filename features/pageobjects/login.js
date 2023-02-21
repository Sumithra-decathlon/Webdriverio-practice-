

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get btnMyAccount () {
        return $("//span[normalize-space()='My Account']");
    }

    get btnLogin () {
        return $("//a[normalize-space()='Login']");
    }

    get inputEmailAddress () {
        return $("//input[@id='input-email']");
    }
    get inputPassword () {
        return $("//input[@id='input-password']");
    }
    
    get btnforLogin () {
        return $("//input[@value='Login']");
    }

    get AccountMessage()
    {
        return $("//*[@id='content']/h2[1]")
    }

    async login (loginEmail, loginPassword) {
        await this.btnMyAccount.click();
        await this.btnLogin.click();
        await this.inputEmailAddress.setValue(loginEmail);
        await this.inputPassword.setValue(loginPassword);
        await this.btnforLogin.click();
        
    }
    async getAccountmessage()
    {
        await this.AccountMessage.waitForDisplayed();
        await this.AccountMessage.getText();
    }

}

module.exports = new LoginPage();
