import { test, expect } from '@fixtures/auth.fixture';
import { InventoryPage } from '@pages/InventoryPage';
import { CheckoutPage } from '@pages/CheckoutPage';
import products from '@data/products.json';

for (const product of products) {
    test(`should complete the end-to-end checkout process for ${product}`, async ({ loggedInPage }) => {
        const inventoryPage = new InventoryPage(loggedInPage);
        const checkoutPage = new CheckoutPage(loggedInPage);
        const { faker } = await import('@faker-js/faker');
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const zipCode = faker.location.zipCode();
        await inventoryPage.addItemToCart(product);
        await inventoryPage.goToCart();
        await checkoutPage.startCheckout();
        await checkoutPage.submitCheckoutInfo(firstName, lastName, zipCode);
        await checkoutPage.finishCheckout();
        await expect(checkoutPage.backHomeButton).toBeVisible();
        await expect(checkoutPage.completeHeader).toContainText(/Thank you for your order!/);
    });
}
