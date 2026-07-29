import { Page, expect } from '@playwright/test';

export class AddToCartPage {

    constructor(private page: Page) {}

        

        async navigateToCart()
        {
            await this.page.locator('[data-test="shopping-cart-link"]').click();
        }

        async verifyURL()
        {
            await expect(this.page)
                .toHaveURL(/cart/);
        }

        async verifyProductinCart ()
        {
            await expect(this.page.locator('[data-test="inventory-item-name"]'))
                .toHaveText('Sauce Labs Backpack');
        }

      
};

