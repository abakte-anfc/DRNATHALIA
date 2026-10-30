# Template para sites profissionais

Base demonstrativa em React + TypeScript + Vite. Cada cliente deve ter seu próprio repositório e sua própria publicação. Nenhum profissional, registro, contato, depoimento ou resultado é inventado. As artes locais são abstratas.

## Instalação e execução

Requer Node.js 22.12+ e npm. Execute na raiz desta pasta:

```sh
npm ci
npm run dev
npm run build
npm run preview
npm test
npm run test:e2e
```

O build faz a checagem TypeScript e gera `dist/`. O preview serve esse build localmente. Testes de navegador usam Chrome no Windows; configure `CHROME_PATH` para outro executável, ou adapte `playwright.config.ts` para o Chromium do Playwright (`npx playwright install chromium`). Não há lint configurado na origem.

## Estrutura

- `src/site.config.ts`: configuração tipada do cliente, textos, contatos, mídia, tema e idiomas.
- `src/content.ts`: textos fixos de interface ES/PT e seleção de conteúdo válido.
- `src/language.mjs`: resolução de idioma, fallback e geração de WhatsApp.
- `src/main.tsx`: página, seções opcionais, galeria DepthCarousel e reprodução controlada.
- `src/Particles.tsx`: partículas existentes. AnimatedContent corresponde às classes `.reveal` e ao observador de entrada da aplicação original; não existe dependência externa com esse nome.
- `src/style.css`: layout responsivo, perspectiva do carrossel, entrada do título e animações existentes.
- `public/`: somente arquivos que podem ser publicados. Não armazene referências privadas aqui.
- `vite.config.ts`: injeta metadados da configuração no HTML de produção, inclusive antes do JavaScript.
- `tests/`: regras de configuração e cenários no navegador.

## Usar como template

1. Revise esta base e envie-a manualmente ao repositório destinado ao template. Não envie a pasta do site original ou seu histórico.
2. No GitHub, abra Settings > General e habilite **Template repository**. Esta tarefa não habilitou essa opção automaticamente.
3. Para cada cliente use **Use this template > Create a new repository**. Não use branches nem forks por cliente.
4. Clone o novo repositório em uma pasta própria, personalize conforme `PERSONALIZACAO.md` e execute o checklist.
5. Crie uma publicação independente com build `npm run build` e saída `dist`. Não reutilize domínio, variáveis, credenciais ou projeto de hospedagem de outro cliente.

Não há integração de publicação nem credenciais incluídas. A base não foi publicada nem enviada ao GitHub nesta tarefa.

## Preservação

A base foi criada por cópia seletiva em pasta irmã. O site original permanece em sua pasta original, sem alterações. Não foram copiados histórico Git do original, referências, fotos pessoais, vídeos, pacientes, `node_modules`, `dist`, `.env` ou credenciais. As dependências e o build desta base são gerados localmente e ignorados no Git.

## Pendências antes de publicar

Configure contatos reais: sem WhatsApp válido não aparece botão de agendamento. Adicione somente mídias autorizadas; galeria, vídeos e depoimentos estão vazios por padrão. Revise a identidade, credenciais, idiomas e conteúdo demonstrativo. Defina URL canônica, imagem de compartilhamento e `metadata.indexable` somente após a revisão. Confira a prévia dos metadados na hospedagem: algumas plataformas armazenam cache.
