# Personalização de um novo cliente

## 1. Configuração principal

Edite `src/site.config.ts`. O tipo `SiteConfig` descreve todos os campos. Não coloque dados do cliente diretamente nos componentes. Identidade, clínica e registro ficam em `identity`; não publique credenciais sem confirmar a documentação do profissional. A base não presume especialidade nem oferece tratamentos reais por padrão.

## 2. Textos e idiomas

Textos variáveis usam `{pt:'...', es:'...'}`. Configure `languages.default` e `languages.available` (uma lista não vazia com `pt`, `es` ou ambos; o idioma padrão deve estar na lista). Navegador define a primeira visita; escolha manual é salva em `languages.storageKey`. Use chave própria por cliente quando várias prévias compartilham a mesma origem.

Sem tradução, o fallback é idioma solicitado > padrão > primeiro texto preenchido > texto vazio. Nunca aparecem chaves técnicas. Com apenas um idioma, o seletor desaparece. Os textos de interface estão em `src/content.ts`.

`content.hero` deve ter três partes para preservar a composição do título. Substitua todos os textos que indicam Demo/Demonstração. Revise também os textos fixos em `src/content.ts`, inclusive avisos legais; a configuração clínica deve ser revisada pelo profissional.

## 3. Cores, fontes e identidade visual

Em `visual.colors`, configure accent, background, surface, text e muted. O layout mantém suas sombras e transparências decorativas; verifique contraste após alterar a paleta. `visual.fonts` define as famílias de corpo e títulos. As fontes padrão são carregadas pelo CSS; para uma nova família, carregue a fonte em `src/style.css` (preferencialmente arquivo local autorizado) e configure seu nome.

`visual.logo` é opcional; vazio oculta a imagem. `visual.portrait` recebe o retrato ou arte de apresentação; vazio omite o retrato. Configure `portraitAlt`. Use `animationIntensity` entre 0 e 1: zero desativa movimento, valores intermediários reduzem partículas e deslocamentos de título e conteúdo. O efeito de profundidade da galeria continua sendo uma interação funcional. A preferência do sistema por movimento reduzido sempre prevalece.

## 4. Contatos

`contacts.whatsapp`: código do país + DDD + número. Aceita pontuação, remove-a e exige 8 a 15 dígitos, sem zero inicial. Confirme o número real: validação de formato não confirma titularidade. `contacts.message` define a mensagem ES/PT. Vazio ou inválido omite todas as ações de WhatsApp.

`instagram` e `mapUrl` aceitam URL HTTPS completa. `email` precisa de formato válido. `address` é localizado. Sem canal válido, a seção de contato desaparece. Sem endereço, localização desaparece; sem URL de mapa, não aparece o link. O mapa abre em página externa, sem incorporar rastreamento de terceiros.

## 5. Conteúdo e seções

Em `sections`, use `true` ou `false` para about, procedures, gallery, videos, testimonials, steps, faq, location e contact. Além da flag, é necessário conteúdo válido. A navegação acompanha as seções disponíveis e não mantém âncoras para conteúdo ausente. Algumas seções secundárias entram no menu móvel; o menu desktop preserva os quatro atalhos principais do layout original.

- `identity.biography`: apresentação profissional.
- `content.procedures`: grupos com nome e lista de serviços, cada qual com nome e descrição. Suporta quantidade variável de grupos.
- `content.gallery`: src, alt e label localizados. Começa vazia; não invente resultados.
- `content.videos`: src, poster e label. Reprodução vertical com controles, sem autoplay; ao iniciar um vídeo os outros pausam. Também pausam em aba oculta e ao abrir a galeria.
- `content.testimonials`: quote e attribution; inclua apenas depoimentos reais autorizados.
- `content.steps`: title e body.
- `content.faq`: question e answer.

Listas vazias ou itens incompletos são omitidos. Não use strings vazias para substituir informações essenciais. Caminhos de mídia devem apontar para arquivos existentes e autorizados: a configuração não verifica a existência de arquivos em tempo de execução.

## 6. Mídias locais

Coloque só materiais publicáveis em `public/media/` e referencie `/media/arquivo.webp`. Troque a arte abstrata de demonstração, sem usar fotografias do projeto original.

- Retrato: WebP/AVIF, cerca de 1400 × 933 px (3:2), pessoa com margem para recorte responsivo. Revise desktop e celular.
- Logo: SVG sem scripts ou WebP transparente, largura aproximada de 400 px.
- Galeria: WebP/AVIF até 1600 px no lado maior, preferencialmente 3:4; imagens completas são exibidas com `object-fit:contain`.
- Vídeos: MP4 H.264 ou WebM, vertical 9:16, 720 × 1280 ou 1080 × 1920; comprima e gere pôster na mesma proporção. Recomendado até 15 MB cada. Não use autoplay.
- Compartilhamento: JPG/PNG 1200 × 630 px, com caminho em `metadata.shareImage`; o SVG abstrato é apenas marcador demonstrativo.
- Favicon: substitua `public/favicon.svg`.

## 7. Metadados e publicação

Configure `metadata.title`, description, siteUrl, shareImage e indexable. O build gera os metadados estáticos a partir da configuração; troca de idioma atualiza título e descrição no navegador. Ative indexação apenas no site revisado. Não há manifesto, service worker ou dados estruturados herdados. Se adicionar JSON-LD, use exclusivamente credenciais e dados verificados do novo cliente.

Execute `npm test`, `npm run build`, `npm run preview` e `npm run test:e2e`. Revise a pasta `dist/`, links de contato e as capturas `.qa/`. Publique cada cliente em projeto próprio de hospedagem. Credenciais ficam no ambiente da hospedagem, nunca em `public/` nem no Git. Variáveis VITE_* são públicas no navegador.
