import { Page } from '@playwright/test';

export class invalidUser {

    constructor(private page:Page){}

    async invalidUserCredentials(userName: string, password: string)
    {
        await this.page.locator('[data-test="username"]').fill(userName);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    };


}