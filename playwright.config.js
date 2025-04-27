import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000, // 60 segundos para cada teste
  use: {
    headless: false,      // Mostrar o navegador
    baseURL: 'https://www.saucedemo.com',
    screenshot: 'only-on-failure',
    actionTimeout: 3000,   // Tempo entre as ações (3 segundos)
    navigationTimeout: 30000, // Tempo de carregamento de páginas
    trace: 'on-first-retry', // Rastrear problemas se falhar
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
