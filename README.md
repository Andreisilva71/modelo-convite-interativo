# 🎉 Convite Digital Interativo

Um convite digital elegante e moderno desenvolvido para celebrações de aniversário, otimizado para dispositivos móveis com design premium e experiência de usuário refinada.

---

## 📱 Visão Geral

Este projeto é um convite digital responsivo e interativo, criado com foco total em **Mobile First**. Ele foi projetado para ser compartilhado como um link direto pelo WhatsApp, redes sociais ou qualquer canal digital, proporcionando ao convidado uma experiência visual impactante e informativa logo ao abrir.

### ✨ Características Principais

- 🖼️ **Hero full-bleed** com imagem floral e tipografia elegante diretamente sobre a foto
- 📅 **Informações do evento** em grade de 3 colunas compacta (Data, Horário, Local)
- 📲 **Confirmar Presença** via WhatsApp com mensagem automática pré-configurada
- 🗺️ **Ver Localização** com link direto para o Google Maps
- 🎁 **Modal de Sugestões de Presentes** com lista elegante e cópia de chave PIX
- 🌸 **Animação de pétalas** flutuando no fundo (canvas)
- 🎞️ **Animações de entrada** suaves ao rolar a página (Intersection Observer)

---

## 🗂️ Estrutura de Arquivos

```
stitch_convite_digital_interativo/
│
├── index.html       # Estrutura semântica HTML5 — sem estilos inline
├── style.css        # Design system completo com variáveis CSS e Mobile First
├── script.js        # Toda a interatividade em Vanilla JavaScript puro
└── README.md        # Este arquivo
```

---

## ⚙️ Como Personalizar

Todas as configurações do evento estão centralizadas no início do arquivo [`script.js`](script.js). Edite apenas as variáveis do objeto `CONFIG`:

```js
const CONFIG = {
  // Número do WhatsApp (código do país + DDD + número, sem espaços)
  whatsappNumber: '5500000000000',

  // Mensagem automática enviada ao clicar em "Confirmar Presença"
  whatsappMessage: 'Olá! Estou confirmando minha presença no aniversário de Ana Luísa.',

  // Link para a localização (Google Maps ou Waze)
  googleMapsUrl: 'https://maps.app.goo.gl/Hu7PBUov5WkNzxAi8',

  // Chave PIX para o botão de cópia na lista de presentes
  pixKey: '12.345.678/0001-90'
};
```

### 🎨 Outros Dados para Personalizar

No arquivo [`index.html`](index.html), localize e edite os seguintes campos:

| Campo | Localização no HTML |
|---|---|
| Nome da aniversariante | `<h1 class="hero-title">Ana Luísa</h1>` |
| Data e horário no hero | `<p class="hero-date">15 de Outubro • 19h</p>` |
| Data na grade | `<span class="... value">15 de Outubro</span>` |
| Horário na grade | `<span class="... value">19:00</span>` |
| Nome do local | `<span class="... value">Espaço das Rosas</span>` |
| Endereço do local | `<span class="... subvalue">Rua das Flores, 123</span>` |
| Mensagem de boas-vindas | `<p class="card-header-message ...">` |
| Sugestões de presentes | Itens 1 a 5 dentro de `.gift-list` |
| Imagem principal (hero) | Atributo `src` na `<img class="hero-image">` |

---

## 🎨 Design System

O projeto utiliza variáveis CSS centralizadas em `:root` no arquivo [`style.css`](style.css), inspiradas no sistema de cores **"Serene Celebration"** definido em `DESIGN.md`.

### Paleta de Cores Principal

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#041632` | Textos principais, botão RSVP |
| `--color-secondary` | `#43617d` | Labels, ícones secundários |
| `--color-background` | `#f9f9f9` | Fundo da página |
| `--color-surface` | `#ffffff` | Cards e modais |

### Tipografia

| Fonte | Uso |
|---|---|
| **EB Garamond** | Títulos, nome da aniversariante |
| **Manrope** | Corpo de texto, labels, botões |

---

## 📐 Responsividade

Layout desenvolvido com abordagem **Mobile First**:

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | 320px – 767px | Layout vertical, botões de largura total, info em 3 colunas |
| Tablet | 768px – 1023px | Botões em linha, padding ampliado |
| Desktop | 1024px+ | Container centralizado com max-width de 760px |

---

## 🚀 Como Publicar

Este projeto é composto apenas de arquivos estáticos. Pode ser publicado gratuitamente em:

- **[GitHub Pages](https://pages.github.com/)** — Gratuito, HTTPS automático
- **[Netlify](https://www.netlify.com/)** — Deploy por drag-and-drop
- **[Vercel](https://vercel.com/)** — Deploy automático via Git
- **Qualquer hospedagem de arquivos estáticos** (cPanel, S3, etc.)

### Passos básicos (GitHub Pages)

```bash
# 1. Crie um repositório no GitHub
# 2. Envie os arquivos
git init
git add .
git commit -m "Convite digital"
git push origin main

# 3. Ative o GitHub Pages nas configurações do repositório
# Acesse: Settings → Pages → Source: main branch
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| HTML5 | — | Estrutura semântica |
| CSS3 | — | Estilos, variáveis, animações, media queries |
| JavaScript (Vanilla) | ES6+ | Interatividade, modal, animações, configuração |
| Google Fonts | — | EB Garamond + Manrope |
| Material Symbols | — | Ícones (outline) |

> ⚠️ **Nenhuma dependência externa de framework** (sem Tailwind, sem Bootstrap, sem jQuery).

---

## 📋 Funcionalidades Interativas

### Confirmar Presença (WhatsApp)
Ao clicar, abre o WhatsApp com o número e mensagem configurados em `CONFIG.whatsappNumber` e `CONFIG.whatsappMessage`.

### Ver Localização (Google Maps)
Abre o link configurado em `CONFIG.googleMapsUrl` em uma nova aba.

### Modal de Presentes
- Abre com animação suave de escala
- Fecha ao clicar fora ou no botão "X"
- Fecha com a tecla `Escape`
- Botão de cópia para a chave PIX com feedback visual (toast)

### Animação de Pétalas
Partículas suaves em tons de azul e branco caem pelo fundo da tela. No mobile, a quantidade é reduzida automaticamente para não impactar a performance.

---

## ♿ Acessibilidade

- Atributos `aria-label` em todos os botões interativos
- `aria-hidden="true"` em ícones decorativos
- Modal com `role="dialog"` e `aria-labelledby`
- Foco visível (`:focus-visible`) para navegação por teclado
- Contraste de cores adequado (padrão WCAG AA)

---

## 👤 Autor

Desenvolvido por **Andrei Silva Dev**  
© 2026 — Feito com 💙

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para adaptá-lo para outros convites e eventos.
