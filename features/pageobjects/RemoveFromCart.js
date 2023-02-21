class RemoveFromCart {

    get btnRemoveFromCart () {
        return $("//button[@class='btn btn-danger']");
    }

    async clickOnRemoveFromCart() {
       await this.btnRemoveFromCart.waitForClickable();
       await this.btnRemoveFromCart.click();
        
    }

}

module.exports = new RemoveFromCart();
