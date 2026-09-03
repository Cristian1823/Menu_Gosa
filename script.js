// ========== GOSA Food Truck - Menu Interactivo ==========

document.addEventListener('DOMContentLoaded', function() {

    // ========== Sistema de Acordeón ==========
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionItems = document.querySelectorAll('.accordion-item');

    // Establecer el primer acordeón abierto por defecto
    if (accordionItems.length > 0) {
        accordionItems[0].classList.add('active');
    }

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            const isActive = accordionItem.classList.contains('active');

            // Cerrar todos los acordeones
            accordionItems.forEach(item => {
                item.classList.remove('active');
            });

            // Abrir el acordeón clickeado si no estaba abierto
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });

    // ========== Navegación con teclado (Arriba/Abajo) ==========
    let currentAccordionIndex = 0;

    document.addEventListener('keydown', function(e) {
        // Navegar con flechas arriba/abajo en acordeones
        if (e.key === 'ArrowDown') {
            currentAccordionIndex = (currentAccordionIndex + 1) % accordionItems.length;
            accordionHeaders[currentAccordionIndex].click();
        } else if (e.key === 'ArrowUp') {
            currentAccordionIndex = (currentAccordionIndex - 1 + accordionItems.length) % accordionItems.length;
            accordionHeaders[currentAccordionIndex].click();
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

    // ========== Actualizar precios desde Google Sheets ==========
    const API_URL_MENU = 'https://script.google.com/macros/s/AKfycbxVj9EO3hoX4VLMyf75Hv-MkQEXqOyTfxyXr_4z7nuccIxWx4_jji3gMJ5CcMczU316/exec';

    function normalizarNombre(nombre) {
        return nombre.toUpperCase()
            .replace(/[ÁÀÂÄ]/g, 'A').replace(/[ÉÈÊË]/g, 'E')
            .replace(/[ÍÌÎÏ]/g, 'I').replace(/[ÓÒÔÖ]/g, 'O')
            .replace(/[ÚÙÛÜ]/g, 'U').replace(/Ñ/g, 'N')
            .replace(/\s*\(COMBO\)\s*/g, '')
            .trim();
    }

    function formatearPrecio(precio) {
        return '$' + Number(precio).toLocaleString('es-CO');
    }

    function actualizarPreciosMenu() {
        const callbackName = 'menuPreciosCallback_' + Date.now();
        const script = document.createElement('script');

        window[callbackName] = function(data) {
            delete window[callbackName];
            if (script.parentNode) script.parentNode.removeChild(script);
            if (!data || !data.productos || data.error) return;

            const precios = {};
            data.productos.forEach(p => {
                precios[normalizarNombre(p.nombre)] = p.precio;
            });

            // .card-header h3 + .price
            document.querySelectorAll('.card-header h3').forEach(h3 => {
                const precio = precios[normalizarNombre(h3.textContent)];
                if (precio !== undefined) {
                    const el = h3.parentElement.querySelector('.price');
                    if (el) el.textContent = formatearPrecio(precio);
                }
            });

            // .double-name + .double-price
            document.querySelectorAll('.double-name').forEach(nameEl => {
                const precio = precios[normalizarNombre(nameEl.textContent)];
                if (precio !== undefined) {
                    const el = nameEl.parentElement.querySelector('.double-price');
                    if (el) el.textContent = formatearPrecio(precio);
                }
            });

            // .extra-name + .extra-price (adicionales)
            document.querySelectorAll('.extra-name').forEach(nameEl => {
                const precio = precios[normalizarNombre(nameEl.textContent)];
                if (precio !== undefined) {
                    const el = nameEl.parentElement.querySelector('.extra-price');
                    if (el) el.textContent = formatearPrecio(precio);
                }
            });

            // .combo-card h3 + .combo-price (agrandados)
            document.querySelectorAll('.combo-card h3').forEach(h3 => {
                const precio = precios[normalizarNombre(h3.textContent)];
                if (precio !== undefined) {
                    const el = h3.closest('.combo-card').querySelector('.combo-price');
                    if (el) el.textContent = formatearPrecio(precio);
                }
            });
        };

        script.src = API_URL_MENU + '?action=getProductos&callback=' + callbackName;
        script.onerror = function() {
            delete window[callbackName];
            if (script.parentNode) script.parentNode.removeChild(script);
        };
        setTimeout(() => {
            if (window[callbackName]) {
                delete window[callbackName];
                if (script.parentNode) script.parentNode.removeChild(script);
            }
        }, 10000);
        document.body.appendChild(script);
    }

    actualizarPreciosMenu();

    // ========== Slider Promocional ==========
    const promoSlides = document.querySelectorAll('.promo-slide');
    const promoDots   = document.querySelectorAll('.promo-dot');
    let promoActual   = 0;

    function irAPromo(index) {
        promoSlides[promoActual].classList.remove('active');
        promoDots[promoActual].classList.remove('active');
        promoActual = (index + promoSlides.length) % promoSlides.length;
        promoSlides[promoActual].classList.add('active');
        promoDots[promoActual].classList.add('active');
        const badgeText = document.getElementById('promoBadgeText');
        if (badgeText) badgeText.textContent = promoSlides[promoActual].dataset.badge || 'PROMOCIÓN';
    }

    const prevBtn = document.getElementById('promo-prev');
    const nextBtn = document.getElementById('promo-next');
    if (prevBtn) prevBtn.addEventListener('click', () => irAPromo(promoActual - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => irAPromo(promoActual + 1));
    promoDots.forEach((dot, i) => dot.addEventListener('click', () => irAPromo(i)));

    // ========== Log de inicio ==========
    console.log('%c🍔 GOSA Food Truck - Menú Digital 🍔', 'color: #FFD700; font-size: 20px; font-weight: bold;');
    console.log('%cDesarrollado con ❤️ para GOSA', 'color: #E0E0E0; font-size: 12px;');
    console.log('%c💡 Tip: Usa las flechas ↑ ↓ para navegar entre categorías', 'color: #FFC107; font-style: italic;');
    console.log('%c📱 Tip: Haz clic en el botón de WhatsApp para hacer tu pedido', 'color: #25D366; font-style: italic;');
});
