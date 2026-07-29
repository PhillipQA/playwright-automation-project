import { Page, expect } from '@playwright/test';

export class InventoryPage {

    constructor(private page: Page) {}

    async verifyInventoryUrl() {
        await expect(this.page)
            .toHaveURL(/inventory/);
    }

    async verifyBackpackVisible() {
        await expect(
            this.page
                .locator('[data-test="inventory-item-name"]')
                .first()
        ).toHaveText('Sauce Labs Backpack');
    }

    async AddProductToCart()
        {
            await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        }

    async verifyBadge()
    {
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    }
}