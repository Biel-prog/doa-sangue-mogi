# Doe Sangue, Salve Vidas — Mogi das Cruzes / SP

> **Portal institucional, informativo e responsivo de alto padrão dedicado à conscientização e orientação sobre a doação voluntária de sangue em Mogi das Cruzes, São Paulo.**

Desenvolvido como **Projeto de Extensão Universitária** pela **Universidade UMC** (Curso de Análise e Desenvolvimento de Sistemas), de autoria de **Gabriel Rodrigues**.

---

## 🩸 Conceito e Objetivo

O portal reúne em um único ambiente público e acolhedor todas as informações essenciais para transformar a intenção de doar em ação real:
- **Como funciona o procedimento** (as 5 etapas explicadas de forma didática e humanizada);
- **Quem pode doar** (requisitos básicos, impedimentos temporários e definitivos);
- **Impacto social** (como uma única doação pode beneficiar até quatro pessoas através do fracionamento de hemácias, plaquetas, plasma e crioprecipitado);
- **Direito trabalhista** (dispensa remunerada de 1 dia a cada 12 meses prevista no Artigo 473, inciso IV da CLT);
- **Onde doar em Mogi das Cruzes** (endereços verificados, telefones diretos, horários, instruções de agendamento e mapa interativo com rotas no Google Maps);
- **Perguntas frequentes (FAQ)** em formato de acordeão acessível;
- **Fontes oficiais e canais governamentais**.

---

## 🏥 Unidades de Coleta em Mogi das Cruzes

### 1. Hemocentro Transfusão — Santa Casa de Misericórdia
- **Endereço:** Rua Barão de Jaceguai, 1.148 — Centro, Mogi das Cruzes/SP (CEP 08710-100)
- **Telefone:** (11) 4752-9999
- **Agendamento:** A instituição informa a necessidade de agendamento prévio por telefone.
- **Horário:** Confirmar diretamente com a unidade antes de comparecer.
- **Site oficial:** [Santa Casa de Mogi das Cruzes](https://santacasamc.com.br/servicos/banco-de-sangue/)

### 2. Centrho — Centro de Hematologia e Hemoterapia
- **Endereço:** Rua Dona Afife Nassif Jafet, 223 — Vila Industrial, Mogi das Cruzes/SP (CEP 08770-070)
- **Telefone:** (11) 4799-2892
- **Horário em cadastros públicos:** Segunda a sexta-feira, das 7h30 às 12h (sujeito à confirmação prévia).
- **Agendamento:** Confirmar diretamente com a unidade antes de comparecer.
- **Site oficial:** [Centrho](https://centrho.com.br/)

> **Aviso de Responsabilidade:** Os dados foram verificados com base no levantamento editorial em **Novembro de 2026**. O portal esclarece com transparência que outros hospitais da cidade realizam transfusões, mas não mantêm posto de coleta aberto ao público em geral. A aptidão médica definitiva cabe exclusivamente à equipe de triagem clínica na data da coleta.

---

## 🎨 Identidade Visual e Direção de Arte

- **Burgundy Primário:** `#7F1728`
- **Vermelho Destaque / Ação:** `#B3263A`
- **Base Off-white Suave:** `#FAF8F8`
- **Branco Puro:** `#FFFFFF`
- **Cinza Neutro Editorial:** `#62666D`
- **Tipografia:** *Outfit* (títulos de display) e *Plus Jakarta Sans* (textos institucionais e interfaces).
- **Design Editorial:** Espaçamentos equilibrados, contrastes validados, microinterações, mapa interativo estilizado sem dependência de chaves de API pagas.

---

## 🛠️ Stack Tecnológica

- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite 8
- **Estilização:** Tailwind CSS 3.4 com modern CSS (`interpolate-size: allow-keywords`)
- **Ícones:** Lucide React
- **Mapas:** Leaflet (OpenStreetMap tiles com marcadores estilizados)
- **Linter & Qualidade:** Oxlint (0 erros, 0 warnings)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ (testado em Node.js v22.18.0)
- npm ou pnpm

### Instalação das dependências
```bash
npm install
```

### Executar em modo de desenvolvimento
```bash
npm run dev
```

### Compilar para produção
```bash
npm run build
```

### Visualizar o build de produção localmente
```bash
npm run preview
```

---

## 📜 Licença e Créditos

- **Desenvolvido por:** Gabriel Rodrigues
- **Instituição:** Universidade UMC (Projeto de Extensão Universitária — Análise e Desenvolvimento de Sistemas)
- **Campanha:** Doe Sangue, Salve Vidas — Mogi das Cruzes / SP
