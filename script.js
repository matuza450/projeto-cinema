// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    /*******************************************/
    /* LÓGICA DO MODAL DE DETALHES        */
    /*******************************************/

    // Seleciona todos os elementos necessários para o modal
    const movieCards = document.querySelectorAll('.movie-card');
    const modal = document.getElementById('movie-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close');
    
    // Seleciona as áreas de conteúdo dentro do modal
    const modalPoster = document.getElementById('modal-poster');
    const modalTitle = document.getElementById('modal-title');
    const modalGenres = document.getElementById('modal-genres');
    const modalRating = document.getElementById('modal-rating');

    // Adiciona um evento de clique para CADA card de filme
    movieCards.forEach(card => {
        card.addEventListener('click', (event) => {
            // Impede que o link <a> dentro do card seja seguido
            event.preventDefault(); 
            
            // 1. Coleta os dados do card que foi clicado
            const posterSrc = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const genres = card.querySelector('.genres').textContent;
            
            // A classificação (.rating) só existe nos cards "Em Cartaz"
            const ratingEl = card.querySelector('.rating');
            const rating = ratingEl ? ratingEl.textContent : "Em breve"; // Valor padrão se não houver classificação

            // 2. Preenche o modal com os dados coletados
            modalPoster.src = posterSrc;
            modalTitle.textContent = title;
            modalGenres.textContent = genres;
            modalRating.textContent = rating;

            // 3. Exibe o modal e o overlay
            modal.classList.add('active');
            modalOverlay.classList.add('active');
        });
    });

    // Função para fechar o modal
    const closeModal = () => {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
    };

    // Adiciona eventos para fechar o modal (no botão 'X' e no overlay)
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);


    /*******************************************/
    /* LÓGICA DA ANIMAÇÃO DE SCROLL (FADE-IN) */
    /*******************************************/

    // O Intersection Observer é a forma moderna de detectar quando um elemento entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' ao card quando ele aparece na tela
                entry.target.classList.add('visible');
                // Opcional: para a animação acontecer só uma vez
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% do item estiver visível
    });

    // Pede ao observer para "observar" todos os movie-cards
    // Usamos .querySelectorAll de novo caso os de cima não estivessem prontos
    document.querySelectorAll('.movie-card').forEach(card => {
        observer.observe(card);
    });

});