// ========== GOSA Food Truck - Sistema de Pedidos ==========

// ========== CONFIGURACIÓN ==========
// IMPORTANTE: Reemplaza esta URL con la URL de tu Google Apps Script
// Sigue las instrucciones en google-apps-script.js para obtener la URL
const API_URL = 'https://script.google.com/macros/s/AKfycbxVj9EO3hoX4VLMyf75Hv-MkQEXqOyTfxyXr_4z7nuccIxWx4_jji3gMJ5CcMczU316/exec';

// ========== PRODUCTOS DEL MENÚ ==========
const MENU = {
    entradas: [
        { id: 'e1', nombre: 'Aritos Gosa', precio: 7000 },
        { id: 'e2', nombre: 'Bacon Gosa', precio: 7600 },
        { id: 'e3', nombre: 'Tender Gosa', precio: 8000 }
    ],
    perros: [
        { id: 'p1', nombre: 'Perro Ranchero', precio: 10000 },
        { id: 'p2', nombre: 'Tropical Gosa', precio: 12000 },
        { id: 'p6', nombre: 'Gosa Dulcin', precio: 12500 },
        { id: 'p3', nombre: 'Texas BBQ', precio: 13500 },
        { id: 'p4', nombre: 'Perro Burguer', precio: 14000 },
        { id: 'p5', nombre: 'Triple Gosa', precio: 14000 }
    ],
    hamburguesas: [
        { id: 'h1', nombre: 'Gosa Burguer', precio: 10000 },
        { id: 'h1d', nombre: 'Gosa Burguer Doble', precio: 14500 },
        { id: 'h2', nombre: 'Crispy Gosa', precio: 13000 },
        { id: 'h2d', nombre: 'Crispy Gosa Doble', precio: 17500 },
        { id: 'h3', nombre: 'Gosa Balsamica', precio: 13000 },
        { id: 'h3d', nombre: 'Gosa Balsamica Doble', precio: 17500 },
        { id: 'h4', nombre: 'Madurita', precio: 13500 },
        { id: 'h4d', nombre: 'Madurita Doble', precio: 18000 }
    ],
    salchipapas: [
        { id: 's1', nombre: 'Rapi Gosa', precio: 9000 },
        { id: 's2', nombre: 'Salchi Gosa', precio: 14500 },
        { id: 's3', nombre: 'La Gosa Supreme', precio: 25000 }
    ],
    adicionales: [
        { id: 'a1', nombre: 'Salchicha', precio: 1200 },
        { id: 'a2', nombre: 'Tocineta', precio: 1200 },
        { id: 'a3', nombre: 'Agua', precio: 1500 },
        { id: 'a4', nombre: 'Queso Mozzarella', precio: 1500 },
        { id: 'a5', nombre: 'Chorizo', precio: 2000 },
        { id: 'a6', nombre: 'Queso Cheddar', precio: 2000 },
        { id: 'a7', nombre: 'Carne de Hamburguesa', precio: 3000 },
        { id: 'a8', nombre: 'Chicharron', precio: 3500 },
        { id: 'a9', nombre: 'Porcion de Papa', precio: 4000 }
    ],
    combos: [
        { id: 'c1', nombre: 'Gaseosa o Jugo', precio: 2500 },
        { id: 'c2', nombre: 'Porcion de Papa (Combo)', precio: 4000 },
        { id: 'c3', nombre: 'El Combo Completo', precio: 5000 }
    ]
};

// Nombres de categorías para mostrar
const CATEGORIAS_NOMBRES = {
    entradas: 'Entradas',
    perros: 'Perros Calientes',
    hamburguesas: 'Hamburguesas',
    salchipapas: 'Salchipapas',
    adicionales: 'Adicionales',
    combos: 'Combos'
};

// Iconos de categorías
const CATEGORIAS_ICONOS = {
    entradas: 'fa-fire',
    perros: 'fa-hotdog',
    hamburguesas: 'fa-burger',
    salchipapas: 'fa-drumstick-bite',
    adicionales: 'fa-plus',
    combos: 'fa-glass-water'
};

// ========== FUNCIONES DE API ==========

// Verificar si la API está configurada
function apiConfigurada() {
    return API_URL && API_URL !== 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI';
}

// Función para hacer peticiones usando JSONP (evita CORS)
function apiRequest(params) {
    return new Promise((resolve, reject) => {
        // Crear nombre único para el callback
        const callbackName = 'gosaCallback_' + Date.now();

        // Crear la función callback global
        window[callbackName] = function(data) {
            // Limpiar
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };

        // Agregar callback a los parámetros
        params.callback = callbackName;

        // Construir URL
        const queryString = new URLSearchParams(params).toString();
        const url = `${API_URL}?${queryString}`;

        // Crear script
        const script = document.createElement('script');
        script.src = url;
        script.onerror = function() {
            delete window[callbackName];
            document.body.removeChild(script);
            reject(new Error('Error de conexión'));
        };

        // Timeout de 10 segundos
        setTimeout(() => {
            if (window[callbackName]) {
                delete window[callbackName];
                if (script.parentNode) {
                    document.body.removeChild(script);
                }
                reject(new Error('Timeout'));
            }
        }, 10000);

        document.body.appendChild(script);
    });
}

// Función para hacer peticiones GET
async function apiGet(action, params = {}) {
    if (!apiConfigurada()) {
        throw new Error('API no configurada');
    }

    try {
        return await apiRequest({ action, ...params });
    } catch (error) {
        console.error('Error en API GET:', error);
        throw error;
    }
}

// Función para hacer peticiones POST
async function apiPost(data) {
    if (!apiConfigurada()) {
        throw new Error('API no configurada');
    }

    try {
        return await apiRequest({ payload: JSON.stringify(data) });
    } catch (error) {
        console.error('Error en API POST:', error);
        throw error;
    }
}

// ========== FUNCIONES DE PEDIDOS ==========

// Crear nuevo pedido
async function crearPedido(items, total, notas = '') {
    return await apiPost({
        action: 'nuevoPedido',
        items: items,
        total: total,
        notas: notas
    });
}

// Obtener pedidos pendientes
async function getPedidosPendientes() {
    return await apiGet('getPendientes');
}

// Obtener pedidos de hoy
async function getPedidosHoy() {
    return await apiGet('getHoy');
}

// Obtener pedidos por fecha
async function getPedidosPorFecha(fecha) {
    return await apiGet('getPorFecha', { fecha });
}

// Obtener resumen del día
async function getResumenDia(fecha) {
    return await apiGet('getResumen', { fecha });
}

// Actualizar estado de pedido
async function actualizarEstadoPedido(id, estado) {
    return await apiPost({
        action: 'actualizarEstado',
        id: id,
        estado: estado
    });
}

// Actualizar items y total de un pedido existente
async function actualizarPedido(id, items, total) {
    return await apiPost({
        action: 'actualizarPedido',
        id: id,
        items: items,
        total: total
    });
}

// ========== FUNCIONES DE UTILIDAD ==========

// Formatear precio en pesos colombianos
function formatearPrecio(precio) {
    return '$' + precio.toLocaleString('es-CO');
}

// Formatear fecha
function formatearFecha(fechaStr) {
    const fecha = new Date(fechaStr + 'T00:00:00');
    return fecha.toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Obtener fecha de hoy en formato YYYY-MM-DD
function fechaHoy() {
    const hoy = new Date();
    return hoy.toISOString().split('T')[0];
}

// Mostrar mensaje
function mostrarMensaje(container, mensaje, tipo = 'info') {
    const div = document.createElement('div');
    div.className = `mensaje ${tipo}`;
    div.textContent = mensaje;

    container.insertBefore(div, container.firstChild);

    // Auto-remover después de 5 segundos
    setTimeout(() => {
        div.remove();
    }, 5000);
}

// Mostrar loading
function mostrarLoading(container) {
    container.innerHTML = '<div class="loading">Cargando</div>';
}

// Mostrar sin datos
function mostrarSinDatos(container, mensaje = 'No hay datos para mostrar') {
    container.innerHTML = `
        <div class="sin-datos">
            <i class="fas fa-inbox"></i>
            ${mensaje}
        </div>
    `;
}

// Mostrar aviso de configuración pendiente
function mostrarConfigPendiente(container) {
    container.innerHTML = `
        <div class="config-warning">
            <h2><i class="fas fa-exclamation-triangle"></i> Configuracion Pendiente</h2>
            <p>Para usar el sistema de pedidos, necesitas configurar Google Sheets:</p>
            <ol>
                <li>Abre el archivo <strong>google-apps-script.js</strong> en tu proyecto</li>
                <li>Sigue las instrucciones para crear la hoja de calculo</li>
                <li>Copia el codigo a Google Apps Script</li>
                <li>Despliega como aplicacion web y copia la URL</li>
                <li>Abre <strong>sistema.js</strong> y reemplaza <code>TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI</code> con tu URL</li>
                <li>Recarga esta pagina</li>
            </ol>
        </div>
    `;
}

// Vibrar dispositivo (para feedback táctil)
function vibrar(duracion = 50) {
    if ('vibrate' in navigator) {
        navigator.vibrate(duracion);
    }
}

// Reproducir sonido de notificación (campana suave)
function reproducirSonido(tipo = 'success') {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const currentTime = audioContext.currentTime;

    // Frecuencias para cada tipo
    const frecuencias = {
        success: [523, 659],  // Do5 y Mi5 - acorde mayor suave
        nuevo: [440, 554]     // La4 y Do#5 - alerta suave
    };

    const freqs = frecuencias[tipo] || frecuencias.success;
    const duracion = tipo === 'nuevo' ? 0.4 : 0.3;

    freqs.forEach((freq, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Tipo de onda suave (sine = campana)
        oscillator.type = 'sine';
        oscillator.frequency.value = freq;

        // Envelope tipo campana: ataque rápido, decay suave
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.25, currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + duracion);

        // Pequeño delay para el segundo tono (efecto campana)
        const delay = index * 0.05;
        oscillator.start(currentTime + delay);
        oscillator.stop(currentTime + duracion + delay);
    });
}

// ========== ALMACENAMIENTO LOCAL (BACKUP) ==========

// Guardar pedido localmente (por si falla la conexión)
function guardarPedidoLocal(pedido) {
    const pedidosLocales = JSON.parse(localStorage.getItem('gosa_pedidos_pendientes') || '[]');
    pedidosLocales.push({
        ...pedido,
        timestamp: Date.now(),
        sincronizado: false
    });
    localStorage.setItem('gosa_pedidos_pendientes', JSON.stringify(pedidosLocales));
}

// Obtener pedidos locales no sincronizados
function getPedidosLocalesNoSincronizados() {
    const pedidosLocales = JSON.parse(localStorage.getItem('gosa_pedidos_pendientes') || '[]');
    return pedidosLocales.filter(p => !p.sincronizado);
}

// Marcar pedido local como sincronizado
function marcarPedidoLocalSincronizado(timestamp) {
    const pedidosLocales = JSON.parse(localStorage.getItem('gosa_pedidos_pendientes') || '[]');
    const index = pedidosLocales.findIndex(p => p.timestamp === timestamp);
    if (index !== -1) {
        pedidosLocales[index].sincronizado = true;
        localStorage.setItem('gosa_pedidos_pendientes', JSON.stringify(pedidosLocales));
    }
}

// Sincronizar pedidos locales con el servidor
async function sincronizarPedidosLocales() {
    const pendientes = getPedidosLocalesNoSincronizados();

    for (const pedido of pendientes) {
        try {
            await crearPedido(pedido.items, pedido.total, pedido.notas);
            marcarPedidoLocalSincronizado(pedido.timestamp);
            console.log('Pedido sincronizado:', pedido.timestamp);
        } catch (error) {
            console.error('Error sincronizando pedido:', error);
        }
    }
}

// ========== EXPORTAR FUNCIONES ==========
// (Para uso en las páginas HTML)

window.GOSA = {
    // Configuración
    API_URL,
    MENU,
    CATEGORIAS_NOMBRES,
    CATEGORIAS_ICONOS,
    apiConfigurada,

    // API
    crearPedido,
    getPedidosPendientes,
    getPedidosHoy,
    getPedidosPorFecha,
    getResumenDia,
    actualizarEstadoPedido,
    actualizarPedido,

    // Utilidades
    formatearPrecio,
    formatearFecha,
    fechaHoy,
    mostrarMensaje,
    mostrarLoading,
    mostrarSinDatos,
    mostrarConfigPendiente,
    vibrar,
    reproducirSonido,

    // Local storage
    guardarPedidoLocal,
    getPedidosLocalesNoSincronizados,
    sincronizarPedidosLocales
};

console.log('%c🍔 GOSA Sistema de Pedidos', 'color: #FFD700; font-size: 16px; font-weight: bold;');
console.log('%cVersion 1.0.0', 'color: #E0E0E0; font-size: 12px;');
