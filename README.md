🧪 Desafio Auvo - Automação com Playwright
Projeto de automação de testes web para validar o fluxo de compra no e-commerce fictício SauceDemo, utilizando Playwright com JavaScript e arquitetura Page Object Model (POM).


📚 Tecnologias Utilizadas
Playwright

JavaScript (ESM)

Node.js

Page Object Model (POM)


📁 Estrutura do Projeto
lua
Copiar
Editar
saucedemo-tests/
├── pages/           → Page Objects
├── tests/           → Testes automatizados
├── utils/           → Utilitários (opcional)
├── playwright.config.js → Configurações do Playwright
├── package.json     → Dependências e scripts de execução
├── README.md        → Documentação do projeto
├── .gitignore       → Arquivos ignorados no Git

🚀 Como Rodar o Projeto
1. Clonar o Repositório
bash
Copiar
Editar
git clone https://github.com/KellyPaes/automacao-saucedemo
cd saucedemo-tests
2. Instalar Dependências
bash
Copiar
Editar
npm install
3. Instalar os Navegadores do Playwright
bash
Copiar
Editar
npx playwright install
4. Executar os Testes
Modo headless (sem abrir o navegador):

bash
Copiar
Editar
npm run test
Modo visual (abrindo navegador):

bash
Copiar
Editar
npm run test:headed
Modo debug passo a passo (opcional):

bash
Copiar
Editar
npm run test:debug
5. Gerar Relatório HTML
Após rodar os testes, para abrir o relatório:

bash
Copiar
Editar
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
Utilização da arquitetura Page Object Model (POM) para melhor organização e reuso de código.

Testes estruturados de forma clara e modular.

Relatórios HTML gerados automaticamente após a execução.

Código sem pausas artificiais para performance real de testes automatizados.

⚠️ Observação: 
Se ao rodar `npx playwright show-report` aparecer um erro de "porta já em uso", tente rodar:
npx playwright show-report --port=9324

💬 Observações Finais
Para debug manual ou para inspeção visual dos testes, utilize o comando npm run test:debug.

As ações de validação garantem a execução completa e correta do fluxo de compra.


📎 Repositório
🔗 [https://github.com/KellyPaes]
