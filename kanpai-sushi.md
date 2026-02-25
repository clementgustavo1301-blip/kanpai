# Plano de Implementação: Kanpai Sushi Frontend

## 🎨 DESIGN COMMITMENT (ANTI-SAFE HARBOR):
- **Selected Radical Style**: Refined Japanese Elegance & Depth.
- **Why this style?**: O setor de restaurantes japoneses costuma ter sites simples e estáticos ou com temas óbvios em vermelho. Ao elevar a identidade visual fornecida (Seigaiha waves, tipografia clássica) e introduzir camadas e scroll-triggered motion, nós transformamos o site numa experiência tridimensional e memorável. 
- **Risk Factor**: Vamos cruzar o selo (`hanko`) e o sushis principais ao longo das barras de rolagem, quebrando a borda segura "standard hero split" apresentada nas imagens para um layout mais "Layered Depth (Z-axis)", mantendo total fidelidade aos assets originais.
- **Modern Cliché Scan**: Sem mesh gradients. Sem glassmorphism clichê. Sem Bento Grids desnecessários. Uso de bordas afiadas e alto constraste.
- **Palette**: `Deep Charcoal/Black` (#111111), `Sushi Salmon` (Laranja vivo), `Hanko Crimson` (Vermelho #C82A2A), e `Parchment White` (#FAFAFA).

---

## 📋 Breakdown de Navegação e Tarefas

### Fase 1: Setup e Configuração 
- [ ] Inicializar **Next.js** (App Router) ou Vite + React (A confirmar).
- [ ] Configurar o **Tailwind CSS**.
- [ ] Adicionar Tipografias: **Montserrat** (Headings/Sans) e **Merriweather** (Body/Serif).
- [ ] Configurar o design tokens de cores (Primary, Secondary, Accent Crimson).
- [ ] Importar e recriar os vetores/padrões "Seigaiha" baseados na identidade visual.

### Fase 2: Componentes Core e Layouts
- [ ] **Navbar / Header**: Minimalista, fundo escuro ou light (variável), logomarca e tipografia sutil.
- [ ] **Hero Section (Layered Depth)**: Fundo escuro total, foto hero do Sushi destacado. O selo "かんぱい" (Kanpai) aparecendo atrás/interposto ao texto principal usando Parallax leve. 
- [ ] **Menu Section**: Grid quebrado (assimétrico), com ilustrações desenhadas à mão dos Niguiris, Makis, etc, utilizando fundo branco para altíssimo contraste.
- [ ] **À Propos (About Kanpai)**: Sessão escura com layout assimétrico (90/10 tension), foto do Chef, quebrando o "Split Screen".
- [ ] **Footer & Contact**: Padrão de ondas no topo, tipografia limpa, selo no canto inferior direito finalizando a experiência. 

### Fase 3: Motion & Efeitos Premium
- [ ] Entradas (Reveal) acionadas por Scroll para todas as sessoes (Fade-Up com Spring Physics suave).
- [ ] Efeito Hover magnético discreto nos CTAs ("ORDER NOW").
- [ ] Otimização para Mobile-First (Tipografia fluída).

---

## ❓ Questões Socráticas para o Usuário
1. **Stack Tecnológica:** Você prefere usar **Next.js (App Router)** para renderização rápida do lado servidor, ou **Vite + React** para um projeto puramente client-side mais simples? (E qual gerenciador de pacotes: npm, pnpm ou yarn?)
2. **Estilo Dinâmico vs Fiel:** A identidade visual sugere um hero section clássico meio "dividido" (Texto à esq, Imagem à dir). Como Arquiteto Frontend Especialista, sugiro adicionarmos camadas: a imagem sobrepondo sutilmente o texto e o selo rotacionando levemente para dar profundidade e dinamismo. Você aprova essa quebra sutil das limitações estáticas do design para que fique premium na internet?
3. **Animações (Motion):** Uma experiência "WOW" requer movimento. Você topa usarmos a biblioteca `framer-motion` para transições fluídas acionadas pela rolagem da página?

> Aguardando sua aprovação deste plano e as respostas acima para procedermos para a próxima fase.
