import {Page} from '@playwright/test';

export class RemoveProducts
{
    constructor (private page: Page){}

    async Addproduct()
    {
        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }
    
    async RemoveProduct()
    {
        await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    }


}
