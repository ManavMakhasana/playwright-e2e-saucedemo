import { test, expect } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { InventoryPage } from '@pages/InventoryPage';
import validUsers from '@data/users.json';

const [standardUser] = validUsers;

test('should block images to speed up page load', async ({ page }) => {
    let blockedCount = 0;
    await page.route('**/*.{png,jpg,jpeg}', route => {
        blockedCount++;
        route.abort();
    });
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login(standardUser);
    await expect(inventoryPage.cartIcon).toBeVisible();
    expect(blockedCount).toBeGreaterThan(0);
});