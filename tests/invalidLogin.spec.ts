import {test, expect} from '@playwright/test';
import { invalidUser } from '../pages/Invalid_user';
import { LoginPage } from '../pages/LoginPage';
let loginPage: LoginPage;

test.beforeEach(async ({page})=>
{
    loginPage = new LoginPage(page);

    await loginPage.goto();
})


test ('No Password', async ({page})=>
{
    const invaliduser = new invalidUser(page);


    await invaliduser.invalidUserCredentials('standard','');

    await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Password is required');


});

test ('No UserName', async ({page})=>
{
    const invaliduser = new invalidUser(page);
    

    await invaliduser.invalidUserCredentials('','secret_sauce');

    await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username is required');


});

test ('Wrong UserName', async ({page})=>
{
    const invaliduser = new invalidUser(page);
   
    await invaliduser.invalidUserCredentials('123','secret_sauce');

    await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username and password do not match any user in this service');


});

test ('Wrong Password', async ({page})=>
{
    const invaliduser = new invalidUser(page);

    await invaliduser.invalidUserCredentials('standard_user','123');

    await expect(page.locator('[data-test="error"]'))
    .toContainText('Epic sadface: Username and password do not match any user in this service');


});