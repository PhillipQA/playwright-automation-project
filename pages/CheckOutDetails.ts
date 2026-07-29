import { Page, expect } from '@playwright/test';

export class CheckOutDetails {

    constructor(private page: Page) {}

    async CheckOut()
    {
         await this.page.locator('[data-test="checkout"]').click();
        await expect(this.page).toHaveURL(/checkout-step-one/);
    }



    async InputFirstName()
    {
        await this.page.locator('[data-test="firstName"]')
            .fill('test');
    }

    async InputLastName()
    {
        await this.page.locator('[data-test="lastName"]')
            .fill('last')
    }

    async InputPostalCode()
    {
        await this.page.locator('[data-test="postalCode"]')
            .fill('1234');
    }

    async ClickContinue()
    {
        await this.page.locator('[data-test="continue"]').click();
    }

    async VerifyProductOnCart()
    {
        await expect(this.page).toHaveURL(/checkout-step-two/);
        await expect(this.page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
    }

    async ProceedToOrderProduct()
    {
        await this.page.locator('[data-test="finish"]').click();
    }

}
