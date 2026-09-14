import { test } from '../fixtures/pages.fixtures';


test ('User Can Add Product to Cart @smoke @regression', async ({  inventory, addtocart }) =>
{
await inventory.verifyInventoryUrl();
await inventory.verifyBackpackVisible();
await inventory.AddProductToCart();
await inventory.verifyBadge();

await addtocart.navigateToCart();
await addtocart.verifyProductinCart();
await addtocart.verifyURL();


});