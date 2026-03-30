# Skin Tech Switzerland — Briefing Estratégico

## Especificação completa do projeto para recriação por IA

---

## 1. Visão Geral

Formulário de briefing estratégico multi-etapas para a marca **Skin Tech Switzerland** (equipamentos estéticos). O formulário possui **6 etapas** com barra de progresso, persistência em `localStorage`, animações de transição e exportação para PDF e clipboard.

**Stack**: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + jsPDF + jspdf-autotable

---

## 2. Design System

### Paleta de cores (HSL)

| Token | Valor HSL | Uso |
|---|---|---|
| `--background` | `40 33% 96%` | Fundo geral (creme) |
| `--foreground` | `220 53% 23%` | Texto principal (navy) |
| `--primary` | `220 53% 23%` | Botões primários (navy) |
| `--primary-foreground` | `0 0% 100%` | Texto sobre primário (branco) |
| `--accent` / `--gold` | `42 50% 54%` | Destaques dourados |
| `--border` | `40 20% 88%` | Bordas |
| `--muted-foreground` | `220 20% 46%` | Texto secundário |
| `--ring` | `42 50% 54%` | Foco dos inputs (dourado) |

### Tipografia

- **Display/Títulos**: `DM Serif Display` (serif)
- **Corpo**: `DM Sans` (sans-serif)
- Importar via Google Fonts

### Componentes CSS reutilizáveis

```css
.field-input — Input padrão: w-full, px-4, py-3, bg-card, border, border-radius 10px, ring dourado no focus
.field-textarea — Igual ao field-input mas com resize-none e min-height 100px
.field-label — Label: text-sm, font-semibold, mb-2
.check-option — Botão de checkbox: flex, items-center, gap-3, px-4, py-3, border, border-radius 10px, hover:border-ring
.check-option.selected — border-ring, bg-accent/5, border-width 2px
.radio-option — Igual ao check-option mas para seleção única
.radio-option.selected — Igual ao check-option.selected
.equipment-card — Card de equipamento: bg-card, border, p-6, border-radius 14px
.btn-primary — Botão navy: px-8, py-3, bg-primary, text-white, border-radius 10px
.btn-outline — Botão outline: px-8, py-3, border-2 border-primary, hover inverte cores
.btn-gold — Botão dourado: px-8, py-3, background hsl(var(--gold)), text-white
```

---

## 3. Estrutura de Dados

```typescript
interface Equipment {
  id: string;        // gerado com `eq-${Date.now()}-${++counter}`
  nome: string;
  categoria: string;
  preco: string;
  tratamentos: string;
  diferencial: string;
}

interface BriefingData {
  // Step 1 - Identidade da Marca
  nomeEmpresa: string;
  storytelling: string;
  diferenciais: string;
  tomDeVoz: string[];       // MultiSelect
  publicoAlvo: string[];    // MultiSelect

  // Step 2 - Equipamentos
  equipamentos: Equipment[];  // Lista dinâmica
  frequenciaLancamentos: string;  // RadioSelect
  certificacoes: string;

  // Step 3 - Financiamento
  modalidadesPagamento: string[];  // MultiSelect
  maxParcelas: string;             // RadioSelect
  jurosMinimo: string;
  jurosMaximo: string;
  descontoVista: string;
  entradaMinima: string;

  // Step 4 - Calculadora ROI
  procedimentosDia: string;
  valorSessaoMin: string;
  valorSessaoMax: string;
  tempoRetorno: string;    // RadioSelect
  diasMesUso: string;
  casosSucesso: string;    // RadioSelect
  formatoCalculadora: string;  // RadioSelect

  // Step 5 - Presença Digital
  instagram: string;
  whatsapp: string;
  coresMarca: string;
  canalVendas: string[];   // MultiSelect
  dorCliente: string;
  objecoes: string;
  transformacao: string;
}
```

Todos os campos iniciam vazios (string vazia ou array vazio). Todos são **opcionais**.

---

## 4. Etapas do Formulário

### Etapa 1 — Identidade da Marca
- **Nome da empresa** — input text, placeholder "Ex: Skin Tech Switzerland"
- **Storytelling da marca** — textarea, placeholder "Conte a história da marca, origem, propósito..."
- **3 principais diferenciais** — textarea, placeholder "Liste os diferenciais competitivos..."
- **Tom de voz da comunicação** — MultiSelect com opções:
  - "Sofisticado/premium", "Técnico/educativo", "Próximo/acolhedor", "Inspirador/aspiracional"
- **Público-alvo principal** — MultiSelect com opções:
  - "Esteticistas", "Clínicas pequeno porte", "Clínicas médicas", "Spas", "Revendedores"

### Etapa 2 — Equipamentos
- **Lista dinâmica de equipamentos** — botão "+ Adicionar equipamento" cria cards com:
  - Nome/Modelo (input text)
  - Categoria (select): "Laser", "Radiofrequência", "Ultrassom", "Criolipólise", "LED/Fototerapia", "Microagulhamento", "HIFU", "Eletroestimulação", "Outros"
  - Preço à vista em R$ (input number)
  - Tratamentos realizados (input text)
  - Diferencial técnico (input text)
  - Botão X para remover equipamento
- **Frequência de lançamentos** — RadioSelect: "A cada 3 meses", "A cada 6 meses", "Anualmente"
- **Certificações e selos** — textarea, placeholder "ANVISA, CE, FDA..."

### Etapa 3 — Financiamento
- **Modalidades de pagamento aceitas** — MultiSelect:
  - "Cartão de crédito", "Boleto bancário", "Pix", "Financiamento bancário", "Consórcio", "Leasing"
- **Máximo de parcelas** — RadioSelect: "12x", "24x", "36x", "48x+", "Varia por equipamento"
- **Juros mínimo (%)** — input number, step 0.01
- **Juros máximo (%)** — input number, step 0.01
- **Desconto à vista** — input text, placeholder "Ex: 10% ou R$ 500"
- **Entrada mínima** — input text, placeholder "Ex: 20% ou R$ 2.000"

### Etapa 4 — Calculadora ROI
- **Procedimentos por dia** — textarea
- **Valor mínimo por sessão (R$)** — input number
- **Valor máximo por sessão (R$)** — input number
- **Tempo estimado de retorno** — RadioSelect: "Até 3 meses", "3 a 6 meses", "6 a 12 meses", "Mais de 12 meses"
- **Dias de uso por mês** — input number, placeholder "Ex: 22"
- **Possui casos de sucesso?** — RadioSelect: "Sim, tenho cases documentados", "Tenho depoimentos informais", "Ainda não tenho"
- **Formato da calculadora no site** — RadioSelect: "Calculadora interativa no site", "Tabela comparativa", "Simulador personalizado"

### Etapa 5 — Presença Digital
- **Instagram** — input text, placeholder "@seuinstagram"
- **WhatsApp** — input text, placeholder "(11) 99999-9999"
- **Cores da marca** — input text, placeholder "Ex: Azul marinho, dourado, branco"
- **Canal de vendas principal** — MultiSelect:
  - "Instagram", "WhatsApp", "Site próprio", "Marketplace", "Representantes comerciais", "Eventos/feiras"
- **Dor do cliente antes da compra** — textarea
- **Objeções comuns na venda** — textarea
- **Transformação entregue ao paciente** — textarea

### Etapa 6 — Resumo
- Exibe todas as respostas agrupadas por seção
- Campos vazios são **ocultados** automaticamente
- Dois botões de ação:
  - **"Copiar briefing"** (btn-gold) — copia texto formatado para clipboard, muda para "Copiado!" com ícone check por 2.5s
  - **"Exportar PDF"** (btn-primary) — gera PDF com jsPDF + autoTable

---

## 5. Componentes Compartilhados

### MultiSelect
- Grid 1 coluna (mobile) / 2 colunas (sm+)
- Cada opção é um botão com checkbox visual (quadrado 20x20, borda dourada quando selecionado, fundo dourado com checkmark SVG branco)
- Classe CSS: `check-option` / `check-option selected`

### RadioSelect
- Grid 1 coluna (mobile) / 2 colunas (sm+)
- Cada opção é um botão com radio visual (círculo 20x20, borda dourada quando selecionado, dot dourado 10x10 interno)
- Classe CSS: `radio-option` / `radio-option selected`

### ProgressBar
- 6 steps com labels: "Identidade", "Equipamentos", "Financiamento", "ROI", "Digital", "Resumo"
- Linha horizontal cinza de fundo, linha dourada animada até o step atual
- Círculos numerados: step atual = bg-gold com scale animation, visitados = bg-primary, futuros = bg-card com borda
- Animação com Framer Motion

---

## 6. Comportamentos

### Navegação
- Botão "Anterior" (btn-outline, desabilitado na etapa 1)
- Botão "Próximo" (btn-primary, oculto na etapa 6)
- Transição com Framer Motion: slide horizontal 80px + fade, direção baseada em avançar/voltar
- `window.scrollTo({ top: 0, behavior: "smooth" })` ao trocar de etapa

### Persistência
- Dados salvos em `localStorage` com chave `"skintech-briefing"`
- Carregados no mount, salvos a cada alteração via `useEffect`

### Header
- Título: "Skin Tech" + "Switzerland" (em dourado)
- Subtítulo: "Briefing Estratégico"
- Fundo bg-card com border-bottom

---

## 7. Exportação PDF

Usa `jsPDF` + `jspdf-autotable`:

- **Header**: Retângulo navy (RGB 26,46,90) full-width, texto branco "Skin Tech Switzerland" + "Briefing Estratégico"
- **Seções**: Banner dourado (RGB 201,168,76) com título em branco, seguido de tabela com colunas "Pergunta" e "Resposta"
- **Tabela**: Header navy, linhas alternadas em creme (#F8F7F4), coluna pergunta em bold com 55px de largura
- **Paginação**: Quebra de página automática quando y > 260
- **Nome do arquivo**: `briefing-skintech.pdf`

---

## 8. Layout Responsivo

- Container principal: `max-w-3xl mx-auto px-4`
- Card do formulário: border-radius 14px, padding 6 (mobile) / 10 (sm+)
- Grids de inputs: 1 coluna mobile, 2 colunas em `sm:`
- Progress bar: `max-w-3xl mx-auto`

---

## 9. Dependências Necessárias

```json
{
  "react": "^18",
  "react-dom": "^18",
  "typescript": "^5",
  "vite": "^5",
  "tailwindcss": "^3",
  "framer-motion": "^12",
  "jspdf": "^4",
  "jspdf-autotable": "^5",
  "lucide-react": "^0.462"
}
```

Ícones usados do Lucide: `Plus`, `X`, `Check`, `Copy`, `FileDown`

---

## 10. Estrutura de Arquivos

```
src/
├── pages/
│   └── Index.tsx              # Renderiza <BriefingForm />
├── components/
│   └── briefing/
│       ├── types.ts           # Equipment, BriefingData, initialData
│       ├── utils.ts           # v4Id() gerador de IDs
│       ├── BriefingForm.tsx   # Componente principal com estado e navegação
│       ├── ProgressBar.tsx    # Barra de progresso com 6 steps
│       ├── MultiSelect.tsx    # Seleção múltipla com checkboxes visuais
│       ├── RadioSelect.tsx    # Seleção única com radios visuais
│       └── steps/
│           ├── Step1Identity.tsx
│           ├── Step2Equipment.tsx
│           ├── Step3Financing.tsx
│           ├── Step4ROI.tsx
│           ├── Step5Digital.tsx
│           └── Step6Summary.tsx  # Resumo + Copiar + Exportar PDF
└── index.css                  # Design tokens e componentes CSS
```
