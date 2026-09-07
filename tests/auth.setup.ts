import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('textbox', { name: 'Username' })
        .fill('standard_user');

    await page.getByRole('textbox', { name: 'Password' })
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

    await page.context().storageState({
        path: authFile
    });
});