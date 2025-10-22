# Projeto Cinemark (Conceitual) - Web Design

![Badge](https://img.shields.io/badge/Status-Concluído-brightgreen)
![Badge](https://img.shields.io/badge/Tecnologia-HTML5%20%7C%20CSS3-blue)

## ⚠️ Contexto Acadêmico

Este projeto é um **trabalho acadêmico** desenvolvido durante a disciplina de Web Design. O objetivo principal foi aplicar e demonstrar os conhecimentos fundamentais de **HTML5** e **CSS3** na construção de uma interface de usuário (UI) estática, moderna e responsiva para um site de cinema.

---

## 🚀 Sobre o Projeto

Este projeto é um protótipo estático da página inicial de um site de venda de ingressos de cinema, com um design inspirado na identidade visual de grandes redes, como o Cinemark.

A página apresenta um tema escuro (dark mode), focado em destacar os pôsteres dos filmes e criar uma experiência de usuário imersiva, que inclui um vídeo de fundo na seção principal.

## ✨ Funcionalidades e Recursos

* **Cabeçalho Fixo (Sticky):** A barra de navegação e o seletor de cidade permanecem visíveis no topo da tela durante a rolagem.
* **Seção Hero Dinâmica:** Um banner principal que utiliza a tag `<video>` do HTML5 para exibir um vídeo em *autoplay*, *loop* e *sem áudio* como fundo.
* **Listagem de Filmes:** Duas seções principais:
    * **Em Cartaz:** Grade com os filmes disponíveis para compra de ingresso.
    * **Em Breve:** Seção destacando futuros lançamentos.
* **Design Responsivo (Mobile-First):** O layout utiliza **CSS Grid Layout** (`repeat(auto-fit, minmax(250px, 1fr))`) para que a grade de filmes se adapte automaticamente a diferentes tamanhos de tela, de celulares a desktops, sem a necessidade de *media queries* complexas.
* **Estilização Moderna:**
    * Uso de **Variáveis CSS (`:root`)** para gerenciamento centralizado do tema (cores primárias, de fundo, texto).
    * **Flexbox** para alinhamento e organização dos componentes do cabeçalho e rodapé.
    * Efeitos de `hover` suaves (`transition` e `transform`) nos cards de filmes, incentivando a interação.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído inteiramente com tecnologias web fundamentais:

* **HTML5:** Utilizado para a estrutura semântica da página (tags como `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>` e `<video>`).
* **CSS3:** Utilizado para toda a estilização, layout e responsividade do site.

## 📂 Estrutura de Arquivos