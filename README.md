# 🍱 Ai que Fome Mobile Web

Uma aplicação Mobile First moderna de delivery focado em experiências gastronômicas, desenvolvido com **Next.js 15 (App Router)**, **TypeScript**, **styled-components** e uma abordagem modular centrada na usabilidade e escalabilidade. Ideal para restaurantes e clientes que desejam uma interface rápida, intuitiva e altamente customizável.

---

## 📸 Visão Geral

![image](https://github.com/user-attachments/assets/dfea4ac1-7fe1-41b1-9a5b-1a5125fbdcf0)

A plataforma simula uma jornada completa de um app de delivery com:

- Listagem de lojas (com status de aberto/fechado)
- Página detalhada de cada loja
- Sistema de carrinho com itens personalizáveis
- Página de checkout
- Sistema de categorias e opções adicionais (bebidas, extras, utensílios)
- Armazenamento local dos dados (localStorage)
- Interface adaptada para dispositivos móveis

---

## 🚀 Tecnologias Utilizadas

| Tecnologia         | Descrição                                    |
|--------------------|----------------------------------------------|
| **Next.js 14**     | App Router + Server/Client Components        |
| **React 18**       | Componentização moderna                      |
| **TypeScript**     | Tipagem estática para segurança e legibilidade |
| **styled-components** | Estilização com escopo local e tema customizável |
| **React Icons**    | Ícones modernos e responsivos                |
| **localStorage**   | Persistência de carrinho no navegador        |

---

## 🧩 Arquitetura do Projeto

├── .next/</br>
├── node_modules/</br>
├── public/</br>
│   ├── icons/</br>
│   ├── img/</br>
│   ├── stores/</br>
│   └── banner.webp</br>
├── src/</br>
│   ├── app/</br>
│   │   ├── components/</br>
│   │   │   ├── Icon/</br>
│   │   │   ├── PageBody/</br>
│   │   │   ├── SearchBar/</br>
│   │   │   └── StoreList/</br>
│   │   ├── store/</br>
│   │   │   └── [id]/</br>
│   │   │       ├── cart/</br>
│   │   │       └── item/</br>
│   │   │           └── [itemId]/</br>
│   │   │               ├── ItemClient.tsx</br>
│   │   │               ├── page.tsx</br>
│   │   │               └── styles.ts</br>
│   │   │       ├── page.tsx</br>
│   │   │       └── styles.ts</br>
│   ├── data/</br>
│   ├── styles/</br>
│   │   ├── global.ts</br>
│   │   ├── styled.d.ts</br>
│   │   └── theme.ts</br>
│   └── types/</br>
├── .gitignore</br>
├── eslint.config.mjs</br>
├── next-env.d.ts</br>
├── next.config.ts</br>
├── package-lock.json</br>
├── tsconfig.json</br>
├── favicon.ico</br>
├── globals.css</br>
├── layout.tsx</br>
├── page.module.css</br>
└── page.tsx</br>


## 🛠️ Funcionalidades Implementadas

- 🔍 **Barra de busca inteligente**: filtra lojas por nome ou tipo de culinária, em tempo real.
- 🛒 **Carrinho dinâmico**: cada item pode ser personalizado com tamanho, acompanhamentos, bebidas, extras e observações.
- 📦 **Página de checkout limpa e moderna**: permite ajustes finais antes da confirmação.
- 🧠 **Separação entre Server e Client Components**: permite uso eficiente de `params` com interação total via `useState`, `useMemo` e eventos.
- 🎨 **Estilo responsivo e elegante**: pensado para dispositivos móveis e adaptado para desktop.

---

## ⚙️ Como rodar localmente

1. **Clone o projeto:**

```bash
git clone https://github.com/brunoholanda/aiqfome-challenge.git
cd aiqfome-challenge
npm install
npm run dev
```

## 🚀 Acesse o Projeto 
https://aiqfome-challenge-git-main-brunoholandas-projects.vercel.app/
---

## ⚙️ Figma Base
```bash
https://www.figma.com/design/mgLRWavLkkZnDTVKOKQPie/-aiqfome--teste-front-end---MOBILE?node-id=2455-3699&t=WO8Ru3y3gTb7ADZE-0
```
## 🚀 Performance
![image](https://github.com/user-attachments/assets/3e546edb-0c93-43b7-8d65-f8f86a8c7630)
---

## 📸 Outras Telas
![Sem título](https://github.com/user-attachments/assets/6c010400-cd4a-4822-a864-3ca85a5ce387)
![image](https://github.com/user-attachments/assets/c547b8ec-a8ac-4743-962f-c1370f59d784)
![Sem título](https://github.com/user-attachments/assets/55658126-65b2-446e-8003-86fbe0dbdd45)
![Sem título-1](https://github.com/user-attachments/assets/e7cbf3ee-524d-41f0-84dd-edaa4ed1fc38)
`
---
