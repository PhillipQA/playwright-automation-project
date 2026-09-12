import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import 'dotenv/config';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        process.env.SAUCE_USERNAME!,
        process.env.SAUCE_PASSWORD!
    );

    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({
        path: authFile
    });
});