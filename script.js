// ========== GOSA Food Truck - Menu Interactivo ==========

document.addEventListener('DOMContentLoaded', function() {

    // ========== Sistema de Tabs ==========
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remover clase active de todos los botones y paneles
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            // Agregar clase active al botón clickeado
            this.classList.add('active');

            // Mostrar el panel correspondiente
            const targetPanel = document.getElementById(targetTab);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }

            // Scroll suave hacia el inicio del menú
            const main = document.querySelector('main');
            if (main) {
                const offsetTop = main.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========== Teclado de navegación ==========
    let currentTabIndex = 0;

    document.addEventListener('keydown', function(e) {
        // Navegar con flechas izquierda/derecha
        if (e.key === 'ArrowRight') {
            currentTabIndex = (currentTabIndex + 1) % tabButtons.length;
            tabButtons[currentTabIndex].click();
        } else if (e.key === 'ArrowLeft') {
            currentTabIndex = (currentTabIndex - 1 + tabButtons.length) % tabButtons.length;
            tabButtons[currentTabIndex].click();
        }
    });

    // ========== Animación de entrada para tarjetas ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas del menú
    const menuCards = document.querySelectorAll('.menu-card, .extra-item, .combo-card');
    menuCards.forEach(card => observer.observe(card));

    // ========== Scroll reveal para tabs ==========
    let lastScrollTop = 0;
    const tabsContainer = document.querySelector('.tabs-container');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Si hacemos scroll hacia abajo y pasamos cierto punto
        if (scrollTop > 400) {
            tabsContainer.style.boxShadow = '0 4px 20px rgba(255, 215, 0, 0.2)';
        } else {
            tabsContainer.style.boxShadow = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // ========== Prevenir zoom en mobile en tabs ==========
    tabButtons.forEach(button => {
        button.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        }, { passive: false });
    });

    // ========== Contador de items por categoría ==========
    function updateTabCounters() {
        tabButtons.forEach(button => {
            const tabId = button.getAttribute('data-tab');
            const panel = document.getElementById(tabId);

            if (panel) {
                const itemsCount = panel.querySelectorAll('.menu-card, .extra-item, .combo-card').length;

                // Crear badge con contador (opcional)
                // Puedes descomentar esto si quieres mostrar el número de items
                /*
                const existingBadge = button.querySelector('.count-badge');
                if (existingBadge) {
                    existingBadge.remove();
                }

                const countBadge = document.createElement('span');
                countBadge.className = 'count-badge';
                countBadge.textContent = itemsCount;
                button.appendChild(countBadge);
                */
            }
        });
    }

    updateTabCounters();

    // ========== Easter Egg: Konami Code ==========
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(e) {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;

            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        // Efecto especial cuando se activa el código
        const logo = document.querySelector('header img');
        if (logo) {
            logo.style.animation = 'spin 1s ease-in-out';
            setTimeout(() => {
                logo.style.animation = '';
            }, 1000);
        }

        // Añadir animación spin
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                from { transform: rotate(0deg) scale(1); }
                50% { transform: rotate(180deg) scale(1.2); }
                to { transform: rotate(360deg) scale(1); }
            }
        `;
        document.head.appendChild(style);

        console.log('🎉 ¡GOSA POWER ACTIVATED! 🎉');
    }

    // ========== Swipe gestures para mobile ==========
    let touchStartX = 0;
    let touchEndX = 0;

    const tabsContent = document.querySelector('.tabs-content');

    tabsContent.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    tabsContent.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe izquierda - siguiente tab
                currentTabIndex = (currentTabIndex + 1) % tabButtons.length;
                tabButtons[currentTabIndex].click();
            } else {
                // Swipe derecha - tab anterior
                currentTabIndex = (currentTabIndex - 1 + tabButtons.length) % tabButtons.length;
                tabButtons[currentTabIndex].click();
            }
        }
    }

    // ========== Animación de atención para WhatsApp ==========
    setTimeout(() => {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.style.animation = 'float-bounce 3s ease-in-out infinite, shake 0.5s ease-in-out';

            // Agregar animación shake al CSS dinámicamente
            const style = document.createElement('style');
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-5px) rotate(-5deg); }
                    75% { transform: translateY(-5px) rotate(5deg); }
                }
            `;
            document.head.appendChild(style);

            // Volver a la animación normal después de 3 segundos
            setTimeout(() => {
                whatsappBtn.style.animation = 'float-bounce 3s ease-in-out infinite';
            }, 3000);
        }
    }, 2000);

    // ========== Click tracking para WhatsApp ==========
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            console.log('📱 Redirigiendo a WhatsApp...');
        });
    }

    // ========== Log de inicio ==========
    console.log('%c🍔 GOSA Food Truck - Menú Digital 🍔', 'color: #FFD700; font-size: 20px; font-weight: bold;');
    console.log('%cDesarrollado con ❤️ para GOSA', 'color: #E0E0E0; font-size: 12px;');
    console.log('%c💡 Tip: Usa las flechas ← → para navegar entre categorías', 'color: #FFC107; font-style: italic;');
    console.log('%c💡 Tip: Desliza en móvil para cambiar de categoría', 'color: #FFC107; font-style: italic;');
    console.log('%c📱 Tip: Haz clic en el botón de WhatsApp para hacer tu pedido', 'color: #25D366; font-style: italic;');
});
