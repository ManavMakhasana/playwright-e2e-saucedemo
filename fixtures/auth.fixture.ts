import { test as base, Page } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import validUsers from '@data/users.json';

const [standardUser] = validUsers;

type MyFixtures = {
    loggedInPage: Page;
}

export const test = base.extend<MyFixtures>({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(standardUser);
        await use(page);
    }
});

export { expect } from '@playwright/test';