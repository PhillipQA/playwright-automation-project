import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { AddToCartPage } from '../pages/AddToCartPage';
import { CheckOutDetails } from '../pages/CheckOutDetails';
import { expect } from '@playwright/test';
import {ProcessOrder} from '../pages/ProcessOrder';

type Fixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    addtocart: AddToCartPage;
    checkoutdetails: CheckOutDetails;
    processorder: ProcessOrder;
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
    addtocart: async ({ page }, use) => {
        await use(new AddToCartPage(page));
    },
    checkoutdetails: async ({ page }, use) => {
        await use(new CheckOutDetails(page));
    },
    processorder: async ({ page }, use) => {
        await use(new ProcessOrder(page));
    }
});