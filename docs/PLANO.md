# Plano de implementação

Especificação: solicitação do usuário de 30/10/2026.
Stack preservada: React, TypeScript, Vite e animações CSS existentes.
Decisão: cópia seletiva em pasta irmã, sem histórico, mídias pessoais, referências, dependências, build ou segredos. O original permanece recuperável integralmente na pasta original e no Git.

- [x] Configuração tipada única para identidade, contatos, tema, idiomas, conteúdo e mídias; regras de fallback e seções com testes de comportamento.
- [x] Adaptar componentes existentes e navegação para conteúdo opcional, comprimentos variáveis e ausência de contato; conservar layout e interações.
- [x] Remover materiais pessoais da base por seleção de arquivos; criar arte local abstrata e metadados neutros.
- [x] Documentar personalização e uso independente como template.
- [x] Executar testes unitários, build, testes de navegador desktop/mobile, auditoria de arquivos e comparar estado original.

Riscos a verificar: listas vazias, categoria única, galeria de um ou vários itens, idioma único, tradução parcial, armazenamento indisponível e nenhum contato válido.
Nenhuma publicação, push, criação de remoto ou branch por cliente será executada.
