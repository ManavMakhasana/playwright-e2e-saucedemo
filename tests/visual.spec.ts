import { test, expect } from '@fixtures/auth.fixture';

test('should match the inventory page visual baseline', async ({ loggedInPage, browserName }) => {
    test.skip(browserName !== 'chromium', 'Visual baselines are only maintained for Chromium to reduce flakiness.');
    await expect(loggedInPage).toHaveScreenshot('inventory-page.png');
});