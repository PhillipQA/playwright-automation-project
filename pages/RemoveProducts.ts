import {Page, expect} from '@playwright/test';

export class RemoveProducts
{
    constructor (private page: Page){}

    async Addproduct()
    {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    }
    
    async RemoveProduct()
    {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);
    }


}
