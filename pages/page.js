/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
const allureReporter = require('@wdio/allure-reporter').default

module.exports = class Page {

    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    constructor() {
        this.timeout = 15000;
    }

    open(path) {
        return browser.url(`http://automationpractice.com/${path}`)
    }

    async click(locator, timeout = this.timeout) {
        allureReporter.startStep(`Click element - ${locator}`);
        const element = await this.waitForElementClickable(locator, timeout);
        await element.click();
        allureReporter.endStep();
    }

    async check_checkbox(locator, timeout = this.timeout) {
        allureReporter.startStep(`Check checkbox - ${locator}`);
        const element = await $(locator);
        await element.click();
        allureReporter.endStep();
    }

    async hover(locator, timeout = this.timeout) {
        allureReporter.startStep(`Hover element - ${locator}`)
        const element = await this.waitForElementClickable(locator, timeout);
        await element.moveTo();
        allureReporter.endStep();
    }

    async type(locator, text, timeout = this.timeout) {
        allureReporter.startStep(`Type text "${text}" into element - ${locator}`);
        const element = await this.waitForElementClickable(locator, timeout);
        await element.setValue(text);
        allureReporter.endStep();
    }

    async selectByText(locator, option, timeout = this.timeout) {
        allureReporter.startStep(`Select option by text "${option}" from element - ${locator}`);
        const element = await $(locator);
        await element.selectByVisibleText(option);
        allureReporter.endStep();
    }

    async selectByValue(locator, option, timeout = this.timeout) {
        const allure = await allureReporter;
        allureReporter.startStep(`Select option by value "${option}" from element - ${locator}`);
        const element = await $(locator);
        await element.selectByAttribute('value', option);
        allureReporter.endStep();
    }

    async waitForElementClickable(locator, timeout = this.timeout) {
        const element = await $(locator);
        await element.waitForClickable({timeout: timeout});
        return element
    }
}
