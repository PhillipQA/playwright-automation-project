import { test } from '../fixtures/pages.fixtures';


test ('Order Completed', async ({page, loginPage, inventoryPage, addtocart, checkoutdetails, processorder}) =>
{

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

await checkoutdetails.CheckOut();
    
await checkoutdetails.InputFirstName();
await checkoutdetails.InputLastName();
await checkoutdetails.InputPostalCode();
await checkoutdetails.ClickContinue();
await checkoutdetails.VerifyProductOnCart();
await checkoutdetails.ProceedToOrderProduct();
    
await processorder.VerifyCompletedOrder();
await processorder.ReturnToHomePage();

});