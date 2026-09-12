import {test, expect} from '@playwright/test';
import { invalidUser } from '../pages/Invalid_user';


test ('Login With Invalid User', async ({page})=>
{
    const invaliduser = new invalidUser(page);

await page.goto('https://www.saucedemo.com/');

await invaliduser.invalidUserCredentials('locked_out_user','secret_sauce');

await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');

});