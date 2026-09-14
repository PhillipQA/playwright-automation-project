import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../data/logindata';

for (const data of loginData) {

    test(`Login validation Test: ${data.error} @regression`, async ({ page }) => {
        const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login(
    data.username,
    data.password );
    
await expect(
    page.locator('[data-test="error"]')
).toContainText(data.error);

});

}