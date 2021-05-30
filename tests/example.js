const RegistrationPage = require('../pages/registration.page');
const ShopPage = require('../pages/shop.page');
const allureReporter = require('@wdio/allure-reporter').default

describe('Shop test', () => {
    it('should be able to buy a T-shirt', async () => {
        ShopPage.goToHomePage();
        allureReporter.startStep('Open T-Shirt category');
        await ShopPage.openTShirtCategory();
        allureReporter.endStep();
        allureReporter.startStep('Open item to cart and proceed');
        await ShopPage.addItemToCartAndProceed();
        allureReporter.endStep();
        allureReporter.startStep('Go to the second cart step');
        await ShopPage.goToSecondCartStep();
        allureReporter.endStep();
        allureReporter.startStep('Register new account');
        await RegistrationPage.register();
        allureReporter.endStep();
        allureReporter.startStep('Finish order after registration');
        await ShopPage.finishOrder();
        allureReporter.endStep();
        allureReporter.startStep('Open profile orders page');
        await ShopPage.openProfileOrders();
        allureReporter.endStep();
        allureReporter.startStep('Check at least 1 order present');
        expect(await ShopPage.getOrder()).toBeDisplayed();
        allureReporter.endStep();
    });
});


