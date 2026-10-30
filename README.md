# Proposta de site — Dra. Nathália Azi

Demonstração em português brasileiro para mastologia e cirurgia de mama, com atendimento em Salvador e Alagoinhas. Stack preservada: React, TypeScript e Vite.

## Executar

```sh
npm ci
npm run dev
npm run build
npm run preview
npm test
npm run test:e2e
```

O build inclui a checagem TypeScript. Os testes de navegador usam Chrome no Windows; `CHROME_PATH` permite selecionar outro executável. Não há lint configurado.

## Organização

- `src/site.config.ts`: identidade, textos, unidades e destinos exatos, mídia, idiomas e metadados.
- `src/main.tsx`: página, menu acessível e AnimatedContent com aprimoramento progressivo. Todos os CTAs gerais levam a `#locais`; somente os cards abrem o WhatsApp da respectiva unidade.
- `src/content.ts` e `src/language.mjs`: tradução com fallback e resolução de idioma. Apenas português habilitado; seletor oculto.
- `src/style.css`: paleta creme/salmão/rosa, layout móvel e desktop e redução de movimento.
- `public/media/nathalia-azi.webp`: foto fornecida pelo usuário, otimizada com transparência e dimensões 900 × 1200. Original em `IMG/`, fora dos arquivos públicos do Vite.
- `src/Particles.tsx`: partículas decorativas suaves na abertura e no encerramento, desativadas com movimento reduzido.
- `vite.config.ts`: metadados personalizados no HTML gerado, incluindo noindex antes de executar JavaScript.
- `PENDENCIAS.md`: confirmações e autorizações antes de publicação oficial.

Nenhum vídeo, depoimento, formulário, endereço ou horário foi incluído. Não houve publicação nem envio de mensagens.
