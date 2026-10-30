# Implementação da proposta

Briefing: solicitação de 30/10/2026 para a Dra. Nathália Azi.

A análise encontrou uma base React/TypeScript/Vite, conteúdo configurável, resolução de idiomas, navegação móvel, FAQ e animações de entrada por observador. Não havia mídias da médica inicialmente; depois foi fornecido o retrato em IMG/.

Implementado: identidade, dados e conteúdo do briefing, nova paleta, fotografia otimizada, marca textual, áreas de cuidado, instruções de agendamento, três unidades, FAQ administrativa, encerramento e rodapé. Sem vídeos ou depoimentos por ausência de materiais. AnimatedContent adapta a entrada existente com conteúdo sempre visível e respeito à redução de movimento.

A estratégia mantém a stack e os utilitários de idioma, retira a galeria sem conteúdo e direciona todos os CTAs gerais à escolha da unidade. Cada card mantém seu destino exato. HCA segue pendente de confirmação, sem correção automática.

Verificações: TypeScript e build Vite, testes unitários de idioma, navegador em 360/390/768/1440 px, links, menu, FAQ, noindex, ausência de overflow e falha do observador. Capturas locais em .qa/.

Sem publicação, push ou mensagens externas. Pendências em PENDENCIAS.md.
