import { test } from '../fixtures/pages.fixtures';

test('User can begin Checkout Process', async ({
    inventory,
    addtocart,
    checkoutdetails
}) => {

    await inventory.verifyInventoryUrl();

    await inventory.verifyBackpackVisible();

    await inventory.AddProductToCart();

    await inventory.verifyBadge();

    await addtocart.navigateToCart();

    await addtocart.verifyProductinCart();

    await addtocart.verifyURL();

    await checkoutdetails.CheckOut();

});