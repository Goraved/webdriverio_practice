const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {


    async register() {
        let rand = Math.random().toString(36).substring(7);
        await super.click('#email_create');
        await super.type('#email_create', `goraved@${rand}.com`);
        await super.click('#SubmitCreate');
        await super.click('[name="id_gender"]');
        await super.type('[name="customer_firstname"]', 'Test')
        await super.type('[name="customer_lastname"]', 'Goraved')
        await super.type('[name="passwd"]', '123asd');
        await super.selectByValue('#days', '1');
        await super.selectByValue('#months', '1');
        await super.selectByValue('#years', '2020');
        await super.check_checkbox('[name="optin"]');
        await super.check_checkbox('#newsletter');
        await super.type('[name="address1"]', 'street');
        await super.type('#city', 'test');
        await super.selectByValue('#id_state', '1');
        await super.type('#postcode', '11111');
        await super.type('#other', '123');
        await super.type('#phone_mobile', '123');
        await super.click('#alias');
        await super.click('#alias');
        await super.click('#alias');
        await super.click('#submitAccount');
    }
}

module.exports = new RegistrationPage();
