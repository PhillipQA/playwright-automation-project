import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/env';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        env.username,
        env.password
    );

    await expect(page).toHaveURL(/inventory/);

    await page.context().storageState({
        path: authFile
    });
});