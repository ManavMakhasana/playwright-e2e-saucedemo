import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly backHomeButton: Locator;
    readonly completeHeader: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.getByTestId("checkout");
        this.firstNameInput = page.getByTestId("firstName");
        this.lastNameInput = page.getByTestId("lastName");
        this.postalCodeInput = page.getByTestId("postalCode");
        this.continueButton = page.getByTestId("continue");
        this.finishButton = page.getByTestId("finish");
        this.backHomeButton = page.getByTestId("back-to-products");
        this.completeHeader = page.getByTestId("complete-header");
    }

    async startCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async submitCheckoutInfo(firstName: string, lastName: string, postalCode: string): Promise<void> {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async finishCheckout(): Promise<void> {
        await this.finishButton.click();
    }
}