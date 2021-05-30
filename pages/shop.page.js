const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */

    goToHomePage() {
        super.open('index.php');
    }

    async openTShirtCategory() {
        await super.click('li:nth-child(3) > a[title="T-shirts"]');
    }

    async addItemToCartAndProceed() {
        await super.hover('[itemprop="name"]');
        await super.click('[itemprop="name"]');
        await super.click('#add_to_cart');
        await super.click('[title="Proceed to checkout"]');
    }

    async goToSecondCartStep() {
        await super.click('p > a.button.btn.btn-default.standard-checkout.button-medium');
    }


    async finishOrder() {
        await super.click('#center_column > form > p > button');
        await super.check_checkbox('[name="cgv"]');
        await super.click('#form > p > button');
        await super.click('[title="Pay by bank wire"]');
        await super.click('#cart_navigation > button');
    }

    async openProfileOrders() {
        await super.click('[title="View my customer account"]')
        await super.click('[title="Orders"]')
    }

    async getOrder() {
        const element = $('#order-list > tbody > tr')
        return element;
    }
}

module.exports = new ShopPage();
