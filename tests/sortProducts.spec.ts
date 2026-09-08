import {test, expect} from '@playwright/test';


// test.beforeEach(async({page})=>
// {
//     // const login = new LoginPage(page);

//     // await login.goto();
//     // await login.login('standard_user','secret_sauce')



// });


test('Sort A to Z', async ({ page }) => {

    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory/);

    await page.locator('[data-test="product-sort-container"]')
        .selectOption('az');

    await expect(
        page.locator('[data-test="active-option"]')
    ).toContainText('Name (A to Z)');

    await expect(
        page.locator('[data-test="inventory-item-name"]').first()
    ).toContainText('Sauce Labs Backpack');

});

test ('Sort Z to A', async ({page})=>
{

await page.goto('/inventory.html');

await expect(page).toHaveURL(/inventory/);
await page.locator('[data-test="product-sort-container"]').selectOption('za')
await expect(page.locator('[data-test="active-option"]')).toContainText('Name (Z to A)')
await expect(page.locator('[data-test="inventory-item-name"]').first()).toContainText('Test.allTheThings() T-Shirt (Red)')


});

test ('Sort High to Low', async ({page})=>
{
await page.goto('/inventory.html');

await expect(page).toHaveURL(/inventory/);
await page.locator('[data-test="product-sort-container"]').selectOption('hilo')
await expect(page.locator('[data-test="active-option"]')).toContainText('Price (high to low)')
await expect(page.locator('[data-test="inventory-item-price"]').first()).toContainText('49.99')

});

test ('Sort Low to High', async ({page})=>
{

await page.goto('/inventory.html');

await expect(page).toHaveURL(/inventory/);
await page.locator('[data-test="product-sort-container"]').selectOption('lohi')
await expect(page.locator('[data-test="active-option"]')).toContainText('Price (low to high)')
await expect(page.locator('[data-test="inventory-item-price"]').first()).toContainText('7.99')

}
);