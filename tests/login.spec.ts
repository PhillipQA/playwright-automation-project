import { test } from '../fixtures/pages.fixtures';
import { expect } from '@playwright/test';


test ('standard user can login', async ({ loginPage, inventoryPage }) =>
{

await loginPage.goto();

await loginPage.login(
    'standard_user',
    'secret_sauce'
);

await inventoryPage.verifyInventoryUrl();
});