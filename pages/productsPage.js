
export class ProductsPage {
    constructor(page) {
      this.page = page;
    }
  
    async selectProduct(productName) {
      await this.page.locator(`.inventory_item:has-text("${productName}") >> text=Add to cart`).click();
      await this.page.locator(`.inventory_item_name`, { hasText: productName }).click();
    }
  }
  