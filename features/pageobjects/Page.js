class Page {
    /**
     * define selectors using getter methods
     */
    async openWeburl()
    {
    await browser.url('http://tutorialsninja.com/demo/index.php?route=common/home');
    }
}
module.exports = new Page();