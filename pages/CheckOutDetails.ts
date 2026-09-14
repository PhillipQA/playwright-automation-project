import { Page, expect } from '@playwright/test';

export class CheckOutDetails {

    constructor(private page: Page) {}

    async CheckOut()
    {
         await this.page.locator('[data-test="checkout"]').click();
        await expect(this.page).toHaveURL(/checkout-step-one/);
    }

    async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);

    await this.page.locator('[data-test="lastName"]').fill(lastName);

    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
}

    async ClickContinue()
{
    await this.page.locator('[data-test="continue"]').click();

    await expect(this.page).toHaveURL(/checkout-step-two/);
}

    async VerifyProductOnCart()
{
    await expect(this.page.locator('[data-test="inventory-item-name"]'))
        .toHaveText('Sauce Labs Backpack');
}

    async ProceedToOrderProduct()
    {
        await this.page.locator('[data-test="finish"]').click();
    }

}
