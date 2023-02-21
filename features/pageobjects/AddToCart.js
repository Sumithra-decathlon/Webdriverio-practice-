

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCart {
    /**
     * define selectors using getter methods
     */
    get btnAddToCart () {
        return $("//div[@id='content']//div[1]//div[1]//div[3]//button[1]");
    }

    get btnShoppingCart() {
        return $("//span[normalize-space()='Shopping Cart']");
    }

    get cartText()
    {
        return $("//a[contains(text(),'Shopping Cart')]");
    }

    async clickOnAddToCart() {
       await this.btnAddToCart.waitForClickable(); 
       await this.btnAddToCart.click();
        
    }
    async clickOnShoppingCart()
    {
        await this.btnShoppingCart.waitForClickable();
        await this.btnShoppingCart.click();
    }

    async getCartmessage()
    {
        await this.cartText.waitForDisplayed();
        await this.cartText.getText();
    }

}

module.exports = new AddToCart();
