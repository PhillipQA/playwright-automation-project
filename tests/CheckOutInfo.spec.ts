
import { test } from '../fixtures/pages.fixtures';

import { CheckOutDetails } from '../pages/CheckOutDetails';

test ('User can Checkout Order @regression', async ({page, loginPage, inventoryPage, addtocart, checkoutdetails}) =>
{

    const checkout = new CheckOutDetails(page);

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

await checkout.CheckOut();
    
await checkout.fillCheckoutInformation(
        'Phillip',
        'Cabalo',
        '6500'
    );
await checkout.ClickContinue();
await checkout.VerifyProductOnCart();
await checkout.ProceedToOrderProduct();
    
});