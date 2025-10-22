// Aguarda o DOM estar completamente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    /*******************************************/
    /* LÓGICA DO MENU HAMBÚRGUER (MODERNO)    */
    /*******************************************/
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            body.classList.toggle('nav-open'); // Para animar o X
        });
    }

    /*******************************************/
    /* LÓGICA DO MODAL DE DETALHES (ROBUSTA)  */
    /*******************************************/
    const modal = document.getElementById('movie-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close');
    
    // Verifica se os elementos do modal existem antes de continuar
    if (modal && modalOverlay && modalCloseBtn) {
        
        const movieCards = document.querySelectorAll('.movie-card');
        const modalPoster = document.getElementById('modal-poster');
        const modalTitle = document.getElementById('modal-title');
        const modalGenres = document.getElementById('modal-genres');
        const modalRating = document.getElementById('modal-rating');

        movieCards.forEach(card => {
            card.addEventListener('click', (event) => {
                // Impede que o link <a> dentro do card seja seguido
                event.preventDefault(); 
                
                // 1. Coleta os dados do card que foi clicado
                const posterSrc = card.querySelector('img').src;
                const title = card.querySelector('h3').textContent;
                
                // Nem todo card tem gêneros ou classificação (ex: Em Breve)
                const genresEl = card.querySelector('.genres');
                const ratingEl = card.querySelector('.rating');

                const genres = genresEl ? genresEl.textContent : "Gênero não informado";
                const rating = ratingEl ? ratingEl.textContent : "Em breve"; 

                // 2. Preenche o modal com os dados coletados
                modalPoster.src = posterSrc;
                modalTitle.textContent = title;
                modalGenres.textContent = genres;
                modalRating.textContent = rating;

                // 3. Exibe o modal e o overlay
                modal.classList.add('active');
                modalOverlay.classList.add('active');
                body.style.overflow = 'hidden'; // Impede o scroll da página ao fundo
            });
        });

        // Função para fechar o modal
        const closeModal = () => {
            modal.classList.remove('active');
            modalOverlay.classList.remove('active');
            body.style.overflow = ''; // Restaura o scroll
        };

        modalCloseBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);
    }

    /*******************************************/
    /* LÓGICA DA ANIMAÇÃO DE SCROLL (FADE-IN) */
    /*******************************************/
    
    // Verifica se o IntersectionObserver é suportado pelo navegador
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1 // A animação começa quando 10% do item estiver visível
        });

        document.querySelectorAll('.movie-card').forEach(card => {
            observer.observe(card);
        });
    } else {
        // Se o Observer não for suportado (navegadores antigos),
        // apenas mostra todos os cards de uma vez.
        document.querySelectorAll('.movie-card').forEach(card => {
            card.classList.add('visible');
        });
    }

});