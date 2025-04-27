import { expect } from '@playwright/test';

export class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.inventory_details_name');
    this.description = page.locator('.inventory_details_desc');
    this.price = page.locator('.inventory_details_price');
    this.addToCartButton = page.locator('.inventory_details_desc_container button');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async validateDetails({ expectedTitle, expectedDescription, expectedPrice }) {
    const titleText = await this.title.textContent();
    const descriptionText = await this.description.textContent();
    const priceText = await this.price.textContent();

    console.log('Título encontrado:', titleText.trim());
    console.log('Descrição encontrada:', descriptionText.trim());
    console.log('Preço encontrado:', priceText.trim());

    await expect(this.title).toContainText(expectedTitle);
    await expect(this.description).toContainText(expectedDescription);
    await expect(this.price).toHaveText(expectedPrice);
  }

  async addToCartAndGoToCart() {
    await this.addToCartButton.waitFor({ state: 'visible' });
    await this.addToCartButton.click();
    await this.cartIcon.click();
  }
}
