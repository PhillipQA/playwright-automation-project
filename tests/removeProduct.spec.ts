import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RemoveProducts } from '../pages/RemoveProducts';


test.beforeEach(async({page})=>
{
    const login = new LoginPage(page);

    await login.goto()
    await login.login('standard_user','secret_sauce')
});

test ('Validate product can be removed @regression', async ({page})=>
{
    const product = new RemoveProducts(page);

    await product.Addproduct();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

    await product.RemoveProduct();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);

});