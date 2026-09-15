import { test } from '../fixtures/pages.fixtures';

test ('Validate product can be removed @regression', async ({ inventory, removeproducts})=>
{
    await inventory.verifyInventoryUrl();
    await inventory.verifyBackpackVisible();
    await removeproducts.Addproduct();
    await removeproducts.RemoveProduct();
    
});