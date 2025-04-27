import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { ProductsPage } from '../pages/productsPage.js';
import { ProductDetailsPage } from '../pages/productDetailsPage.js';
import { CartPage } from '../pages/cartPage.js';
import { CheckoutPage } from '../pages/checkoutPage.js';

test('Fluxo completo de compra na Saucedemo', async ({ page }) => {
  // Instanciação das páginas seguindo o padrão Page Object Model (POM)
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const productDetails = new ProductDetailsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  // 1. Acessar a página inicial e realizar login
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  // 2. Selecionar o produto "Sauce Labs Backpack" na lista de produtos
  await products.selectProduct('Sauce Labs Backpack');

  // 3. Validar informações do produto selecionado
  await productDetails.validateDetails({
    expectedTitle: 'Sauce Labs Backpack',
    expectedDescription: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    expectedPrice: '$29.99'
  });

  // 4. Adicionar o produto ao carrinho e navegar até o carrinho
  await productDetails.addToCartAndGoToCart();

  // 5. Avançar para o checkout
  await cart.proceedToCheckout();

  // 6. Preencher informações de checkout
  await checkout.fillCheckoutInfo({
    firstName: 'João',
    lastName: 'Silva',
    postalCode: '12345-678'
  });

  // 7. Finalizar a compra e validar a mensagem de sucesso
  await checkout.finishPurchase();
});
