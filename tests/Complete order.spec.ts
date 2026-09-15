import { test } from '../fixtures/pages.fixtures';
import { checkoutData } from '../data/checkoutData';

test('Order Completed @smoke @regression', async ({
    inventory,
    addtocart,
    checkoutdetails,
    processorder
}) => 
{

await inventory.verifyBackpackVisible();
await inventory.AddProductToCart();
await inventory.verifyBadge();

await addtocart.navigateToCart();
await addtocart.verifyProductinCart();
await addtocart.verifyURL();

await checkoutdetails.CheckOut();
    
await checkoutdetails.fillCheckoutInformation(
    checkoutData.firstName,
    checkoutData.lastName,
    checkoutData.postalCode
);

await checkoutdetails.ClickContinue();
await checkoutdetails.VerifyProductOnCart();
await checkoutdetails.ProceedToOrderProduct();
    
await processorder.VerifyCompletedOrder();
await processorder.ReturnToHomePage();

});