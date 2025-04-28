🧪 Desafio Auvo - Automação com Playwright

Projeto de automação de testes web para validar o fluxo de compra no e-commerce fictício **SauceDemo**, utilizando **Playwright** com **JavaScript** e arquitetura **Page Object Model (POM)**.

---

📚 Tecnologias Utilizadas

- Playwright
- JavaScript (ESM)
- Node.js
- Page Object Model (POM)

---

📁 Estrutura do Projeto

```plaintext
automacao-auvo/
├── .vscode/               → Configurações do VSCode (opcional)
├── node_modules/          → Dependências instaladas
├── pages/                 → Page Objects
├── playwright-report/     → Relatórios de testes
├── test-results/          → Resultados de testes (temporário)
├── tests/                 → Testes automatizados
├── utils/                 → Utilitários (ex: massa de dados)
├── .gitignore             → Arquivos ignorados pelo Git
├── .prettierrc            → Configuração do Prettier
├── LICENSE                → Licença do projeto
├── package-lock.json      → Controle de versões das dependências
├── package.json           → Dependências e scripts de execução
├── playwright.config.js   → Configurações do Playwright
└── README.md              → Documentação do projeto

🚀 Como Rodar o Projeto

1. Clonar o Repositório
git clone https://github.com/KellyPaes/automacao-saucedemo
cd automacao-auvo

2. Instalar Dependências
npm install

3. Instalar os Navegadores do Playwright
npx playwright install

4. Executar os Testes
Modo headless (sem abrir navegador):
npm run test

Modo visual (com navegador aberto):
npm run test:headed

Modo debug (passo a passo):
npm run test:debug

5. Gerar Relatório HTML
npm run report

🔐 Credenciais de Acesso
Usuário: standard_user
Senha: secret_sauce

🧱 Fluxo Automatizado
Acesso à página de login.

Login com credenciais fornecidas.

Navegação e seleção do produto "Sauce Labs Backpack".

Validação de título, descrição e preço.

Adição do produto ao carrinho.

Acesso ao carrinho e checkout.

Preenchimento dos dados de checkout.

Finalização da compra.

Validação da mensagem de sucesso: "Thank you for your order!"

📄 Considerações Técnicas
Uso da arquitetura Page Object Model (POM) para organização.

Testes modulares e claros.

Relatórios HTML gerados automaticamente.

Código otimizado, sem pausas artificiais.

⚠️ Observação: Se ao rodar npx playwright show-report aparecer erro de "porta já em uso", execute:
npx playwright show-report --port=9324

📎 Repositório
🔗 https://github.com/KellyPaes/automacao-saucedemo