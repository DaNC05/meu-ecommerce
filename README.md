# E-Commerce | Next.js & Context API

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)](https://styled-components.com/)

> **Acesse o projeto online:** [E-Commerce](https://meu-ecommerce-iota.vercel.app/)

Um front-end de e-commerce completo, focado em performance, SEO e excelente experiência do usuário (UX). Construído do zero para demonstrar a aplicação de conceitos avançados e arquitetura moderna utilizando o ecosistema React/Next.js.

---

## 🎯 Visão Geral do Projeto

Este projeto simula a jornada completa de compra em um e-commerce, desde a visualização do catálogo até a finalização do pedido. O foco principal do desenvolvimento foi criar uma aplicação robusta utilizando gerenciamento de estado global nativo (Context API), estratégias avançadas de renderização do Next.js (App Router) e interfaces interativas complexas.

Os dados dos produtos são consumidos em tempo real a partir da [DummyJSON API](https://dummyjson.com/).

### 📸 Telas da Aplicação
> 
<img width="1353" height="686" alt="image" src="https://github.com/user-attachments/assets/87b92c95-cee6-471c-a155-a8568368bbb6" />
<img width="1351" height="684" alt="image" src="https://github.com/user-attachments/assets/dcc06f15-b88e-44b3-a10b-07d84174c22e" />

---

## ✨ Funcionalidades

* **Catálogo Dinâmico e Promoções:** Listagem de produtos consumidos via API externa com seções de promoções do dia e avaliações visuais.
* **Busca Inteligente:** Barra de pesquisa integrada para encontrar produtos rapidamente utilizando roteamento dinâmico.
* **Navegação por Categorias:** Menu suspenso (dropdown) interativo, desenvolvido do zero, para filtragem do catálogo.
* **Página de Detalhes:** Roteamento dinâmico para visualização individual de cada produto.
* **Carrinho de Compras:** Adição, remoção, alteração de quantidade e cálculo automático de subtotal e total.
* **Autenticação Simulada:** Fluxo de Login/Logout que altera a interface condicionalmente (ex: protegendo a rota de pagamento).
* **Checkout Simples:** Resumo do pedido e simulação de finalização de compra com limpeza de estado.
* **Persistência de Dados:** O carrinho e a sessão do usuário sobrevivem ao recarregamento da página (F5) através do `localStorage`.

---

## 🧠 Destaques Técnicos

Este projeto foi construído com foco em boas práticas da engenharia front-end:

* **Manipulação Avançada de DOM e Eventos:** Implementação de lógica de "Click Outside" (fechar menus flutuantes ao clicar fora) utilizando os Hooks `useRef` e `useEffect`, garantindo uma UX livre de *glitches*.
* **Gerenciamento de Estado Global:** Implementação completa da **Context API** (`CartContext` e `AuthContext`) para gerenciar dados sensíveis e globais da aplicação, provando que é possível criar arquiteturas complexas sem a necessidade de bibliotecas externas.
* **Incremental Static Regeneration (ISR):** A página inicial utiliza a técnica de revalidação estática `fetch(..., { next: { revalidate: 60 } })`. Isso garante um carregamento quase instantâneo (SSG) enquanto mantém o catálogo de produtos sempre atualizado "nos bastidores".
* **Dynamic SEO (Metadados):** Utilização da função `generateMetadata` nas páginas de produtos para otimização de motores de busca. Cada produto gera dinamicamente seu próprio título de página, melhorando o ranqueamento orgânico.
* **CSS-in-JS e Layout Estratégico:** Estilização com `styled-components`. Uso avançado de Flexbox e `position: absolute` para criação de modais e menus dropdown sem quebrar o fluxo (document flow) da página.
* **Navegação Programática:** Utilização do `useRouter` do Next.js para capturar *inputs* de texto e redirecionar dinamicamente para rotas de pesquisa.
* **Hydration Segura e Proteção de Rotas:** Tratamento cuidadoso de *Early Returns* (`typeof window !== 'undefined'`) na integração do `localStorage` com o SSR, além de lógica de bloqueio de interface para usuários não logados.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** Next.js (App Router)
* **Biblioteca UI:** React.js
* **Linguagem:** TypeScript
* **Estilização:** Styled-Components
* **Consumo de API:** Fetch API nativa
* **Deploy:** Vercel

---

## 🚀 Como executar o projeto localmente

Pré-requisitos: Node.js instalado.
```bash
# 1. Clone o repositório
git clone [https://github.com/DaNC05/meu-ecommerce.git](https://github.com/DaNC05/meu-ecommerce.git)

# 2. Acesse a pasta do projeto
cd meu-ecommerce

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
