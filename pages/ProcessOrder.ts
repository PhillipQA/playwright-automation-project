    import { Page, expect } from '@playwright/test';
    
    export class ProcessOrder {
    
        constructor(private page: Page) {}

        async VerifyProductonCart()
        {
            await expect(this.page.locator('[data-test="inventory-item-name"]'))
                .toHaveText('Sauce Labs Backpack');
        }

        async ClickFinish()
        {
            await this.page.locator('[data-test="finish"]').click();
        }

        async VerifyCompletedOrder ()
        {
            await expect(this.page)
                .toHaveURL(/checkout-complete/);
            await expect(this.page.locator('[data-test="complete-header"]'))
                .toHaveText('Thank you for your order!');
        }

        async ReturnToHomePage ()
        {
            await this.page.locator('[data-test="back-to-products"]').click();
            await expect(this.page).toHaveURL(/inventory/);
        }

    }