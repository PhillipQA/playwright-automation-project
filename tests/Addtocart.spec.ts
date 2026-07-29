import { test } from '../fixtures/pages.fixtures';
import { AddToCartPage } from '../pages/AddToCartPage';


test ('User Can Add Product to Cart', async ({ page, loginPage, inventoryPage }) =>
{
    const addtocart = new AddToCartPage(page);


await loginPage.goto();

await loginPage.login(
    'standard_user',
    'secret_sauce'
);

await inventoryPage.verifyInventoryUrl();
await inventoryPage.verifyBackpackVisible();
await inventoryPage.AddProductToCart();
await inventoryPage.verifyBadge();

await addtocart.navigateToCart();
await addtocart.verifyProductinCart();
await addtocart.verifyURL();


});