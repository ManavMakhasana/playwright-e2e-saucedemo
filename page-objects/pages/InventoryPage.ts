import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartIcon = page.getByTestId("shopping-cart-link");
    }

    async addItemToCart(itemName: string): Promise<void> {
        const item = itemName.replaceAll(' ','-').toLowerCase();
        await this.page.getByTestId(`add-to-cart-${item}`).click();
    }

    async goToCart(): Promise<void> {
        await this.cartIcon.click();
    }
}