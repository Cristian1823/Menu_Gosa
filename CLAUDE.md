# GOSA Food Truck - Menú Digital y Sistema de Pedidos

## Descripción del Proyecto

Este es un sitio web completo para **GOSA Food Truck**, un negocio de comida rápida especializado en perros calientes gourmet, hamburguesas artesanales y salchipapas. El proyecto incluye:

1. **Menú Digital** - Carta interactiva para clientes con descripciones y precios
2. **Sistema de Pedidos** - Para toma de pedidos en el punto de venta
3. **Panel de Cocina** - Para que el cocinero vea y gestione pedidos
4. **Cierre de Caja** - Resumen de ventas y estadísticas del día
5. **Panel de Domicilio** - Para gestionar pedidos de entrega a domicilio

## Tecnologías Utilizadas

- **HTML5** - Estructura del sitio web
- **CSS3** - Estilos y diseño visual con animaciones avanzadas
- **JavaScript (Vanilla)** - Sistema de tabs, navegación por teclado y efectos interactivos
- **Font Awesome 6.0.0** - Iconos de redes sociales y categorías del menú
- **Google Fonts (Bebas Neue + Inter)** - Tipografía dual: títulos impactantes y texto legible
- **Google Sheets** - Base de datos para almacenar pedidos
- **Google Apps Script** - Backend/API para gestionar pedidos

## Estructura del Proyecto

```
Gosa/
│
├── index.html              # Página principal del menú (clientes)
├── style.css               # Estilos del menú
├── script.js               # Lógica del menú
│
├── pedidos.html            # Sistema de toma de pedidos (cajero)
├── cocina.html             # Panel de cocina (cocinero)
├── domicilio.html          # Panel de domicilio (entrega)
├── cierre.html             # Cierre de caja (administrador)
├── sistema.js              # Lógica del sistema de pedidos
├── sistema.css             # Estilos del sistema de pedidos
├── google-apps-script.js   # Código para Google Apps Script (copiar a Google)
│
├── Images/
│   ├── logo.jpeg          # Logo del food truck
│   └── Promocion.jpg      # Banner promocional
│
└── videos/
    ├── presentacion.mp4    # Video 1 del carousel
    ├── presentacion_2.mp4  # Video 2 del carousel
    ├── presentacion_3.mp4  # Video 3 del carousel
    └── presentacion_4.mp4  # Video 4 del carousel
```

## Características Principales

### 1. Carousel de Videos
- Carousel circular con 8 slides que muestran videos promocionales
- Animación automática de scroll horizontal infinito
- Videos en autoplay con loop continuo
- Diseño responsive adaptado a dispositivos móviles

### 2. Sistema de Navegación por Tabs
El menú está organizado en categorías navegables con tabs sticky (ordenados por precio de menor a mayor):

- **Entradas** - 3 opciones: Aritos Gosa, Bacon Gosa, Tender Gosa
- **Perros Calientes** - 5 variedades gourmet (Perro Ranchero, Tropical Gosa, Texas BBQ, Perro Burguer, Triple Gosa)
- **Hamburguesas** - 4 tipos artesanales con opciones dobles (Gosa Burguer, Crispy Gosa, Gosa Balsamica, Madurita)
- **Salchipapas** - 3 variedades: Rapi Gosa, Salchi Gosa, La Gosa Supreme
- **Adicionales** - 9 complementos desde $1,200 hasta $4,000 COP
- **Combos** - 3 agrandados especiales (Gaseosa/Jugo, Papa, Combo Completo)

### 3. Diseño Visual

**Paleta de Colores:**
- Fondo: Negro (#000000)
- Texto: Blanco (#FFFFFF)
- Acentos: Dorado (#FFD700, #FFC107)
- Texto secundario: Gris claro (#E0E0E0)

**Características de diseño:**
- Fondo con logo en marca de agua (opacidad 0.05)
- Bordes circulares dorados para imágenes y videos
- Tipografía elegante con "Bebas Neue"
- Animaciones suaves y transiciones
- Diseño responsive optimizado para móviles

### 4. Redes Sociales
- Enlaces a TikTok: [@gosa.food.truck](https://www.tiktok.com/@gosa.food.truck)
- Enlaces a Instagram: [@gosa_ft](https://www.instagram.com/gosa_ft)
- Iconos interactivos con efectos hover

## Cómo Usar el Proyecto

### Opción 1: Abrir Directamente
1. Navega a la carpeta del proyecto
2. Haz doble clic en `index.html`
3. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Usar un Servidor Local
```bash
# Opción A: Con Python
python -m http.server 8000

# Opción B: Con Node.js (npx)
npx serve

# Opción C: Con Live Server (VS Code extension)
# Click derecho en index.html > Open with Live Server
```

### Opción 3: Desplegar en Hosting
El proyecto puede desplegarse en servicios gratuitos como:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Cloudflare Pages**

## Archivos Principales

### index.html
Contiene toda la estructura del sitio:
- Header con logo y títulos (líneas 12-16)
- Carousel de videos con 8 slides (líneas 18-46)
- Banner promocional con badge animado (líneas 48-57)
- Sistema de tabs de navegación (líneas 64-89)
- Contenido de tabs con 6 categorías (líneas 92-308)
- Footer con redes sociales (líneas 312-323)
- Botón flotante de WhatsApp (líneas 325-333)
- Enlace a script.js (línea 335)

### style.css
Define todos los estilos visuales:
- Variables CSS y reset global (líneas 1-44)
- Header mejorado con efectos hover (líneas 46-86)
- Carousel optimizado con animación infinita (líneas 87-127)
- Banner promocional con badge animado (líneas 128-198)
- Sistema de tabs sticky (líneas 218-295)
- Opciones dobles en hamburguesas (líneas 404-431)
- Grid de menú, extras y combos (líneas 297-526)
- Footer con iconos sociales (líneas 528-579)
- Media queries responsive (líneas 581-694)
- Animaciones y scrollbar personalizado (líneas 696-731)
- Botón flotante de WhatsApp (líneas 733-821)

### script.js
Lógica interactiva y funcionalidades:
- Sistema de tabs interactivo (líneas 5-36)
- Navegación con teclado (flechas ← →) (líneas 38-50)
- Animaciones de entrada con Intersection Observer (líneas 52-77)
- Efectos de scroll en tabs container (líneas 79-94)
- Prevención de zoom en mobile (líneas 96-102)
- Contador de items por categoría (líneas 104-131)
- Easter egg con Konami Code (líneas 132-171)
- Animación de atención para WhatsApp (líneas 173-195)
- Click tracking y console logs (líneas 197-210)

## Funcionalidades JavaScript

### Sistema de Tabs Interactivo
```javascript
// Navegación por tabs con smooth scroll
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');

        // Remover clase active de todos los botones y paneles
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Activar tab seleccionado
        this.classList.add('active');
        document.getElementById(targetTab).classList.add('active');

        // Scroll suave hacia el menú
        window.scrollTo({
            top: main.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});
```

### Navegación con Teclado
```javascript
// Navegación con flechas ← →
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        currentTabIndex = (currentTabIndex + 1) % tabButtons.length;
        tabButtons[currentTabIndex].click();
    } else if (e.key === 'ArrowLeft') {
        currentTabIndex = (currentTabIndex - 1 + tabButtons.length) % tabButtons.length;
        tabButtons[currentTabIndex].click();
    }
});
```

### Animaciones con Intersection Observer
```javascript
// Animación de entrada para tarjetas cuando entran en viewport
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});
```

## Optimizaciones Móviles

- Videos con atributo `playsinline` para iOS
- Breakpoints responsive: 768px (móvil) y 1024px (tablet)
- Tabs solo con iconos en dispositivos móviles (ahorro de espacio)
- Prevención de zoom en touch events
- Ajustes de tamaño de fuente y padding dinámicos
- Carousel adaptado con tamaños reducidos en móvil (150px vs 180px)
- Imágenes responsivas con `max-width`
- Grid de menú en una sola columna en móvil
- Botón de WhatsApp optimizado para pantallas pequeñas

## Precios del Menú (COP)

**Nota:** Todos los productos están organizados por precio de menor a mayor en cada categoría.

### Entradas
1. Aritos Gosa: $7,000
2. Bacon Gosa: $7,600
3. Tender Gosa: $8,000

### Perros Calientes
1. Perro Ranchero: $10,000
2. Tropical Gosa: $12,000
3. Gosa Dulcin: $12,500
4. Texas BBQ: $13,500 ⭐ **PREMIUM**
5. Perro Burguer: $14,000
6. Triple Gosa: $14,000 ⭐ **POPULAR**

### Hamburguesas (con opciones dobles)
1. Gosa Burguer: $10,000 → Doble: $14,500
2. Crispy Gosa: $13,000 → Doble: $17,500
3. Gosa Balsamica: $13,000 → Doble: $17,500
4. Madurita: $13,500 → Doble: $18,000 ⭐ **ESPECIAL**

### Salchipapas
1. Rapi Gosa: $9,000
2. Salchi Gosa: $14,500
3. La Gosa Supreme: $25,000 ⭐ **LA REINA**

### Adicionales
1. Salchicha: $1,200
2. Tocineta: $1,200
3. Agua: $1,500
4. Queso Mozzarella: $1,500
5. Chorizo: $2,000
6. Queso Cheddar: $2,000
7. Carne de Hamburguesa: $3,000
8. Chicharrón: $3,500
9. Porción de Papa: $4,000

### Combos (Agrandados)
1. Gaseosa o Jugo: $2,500
2. Porción de Papa: $4,000
3. El Combo Completo (Papa + Bebida): $5,000 ⭐ **AHORRA**

## Mejoras Futuras Sugeridas

1. **Optimización de Videos**
   - Comprimir videos para reducir tiempo de carga
   - Implementar lazy loading progresivo
   - Considerar usar formatos modernos (WebM, AVIF)
   - Añadir controles de reproducción opcionales

2. **SEO y Metadatos**
   - Agregar meta description y keywords
   - Implementar Open Graph para redes sociales
   - Añadir favicon personalizado
   - Schema markup para restaurante

3. **Funcionalidades Adicionales**
   - Protección con PIN de 4 dígitos para páginas del sistema (pedidos, cocina, domicilio, cierre)
   - Sistema de pedidos online integrado
   - Carrito de compras virtual
   - Modo oscuro/claro toggle
   - Sección de testimonios de clientes
   - Integración con Google Maps

4. **Rendimiento**
   - Minificar CSS y JavaScript
   - Optimizar imágenes (convertir a WebP)
   - Implementar Service Worker para caché
   - Analítica de rendimiento

5. **Accesibilidad**
   - Mejorar atributos ARIA existentes
   - Añadir skip links
   - Mejorar navegación para screen readers
   - Soporte completo de navegación por teclado

6. **Funcionalidades Avanzadas**
   - Sistema de reseñas y calificaciones
   - Notificaciones push para promociones
   - Programa de fidelización
   - Histórico de pedidos

## Funcionalidades Especiales

### 📱 Botón de Pedidos por WhatsApp
- **Ubicación:** Botón flotante fijo en esquina inferior derecha
- **Número de contacto:** +57 315 417 0484
- **Mensaje predefinido:** "Hola GOSA! Quiero hacer un pedido"
- **Diseño:** Gradiente verde característico de WhatsApp (#25D366 → #128C7E)
- **Animaciones:**
  - Rebote continuo (float-bounce) durante 3 segundos
  - Shake de atención 2 segundos después de cargar
  - Escala al 115% en hover
  - Tooltip "Haz tu pedido aquí" con animación de slide
- **Responsive:** Tamaño reducido en móvil (60px vs 65px)

### 🎯 Sistema de Navegación por Tabs
- **Tabs sticky:** Se mantiene visible al hacer scroll con backdrop-filter blur
- **6 categorías con iconos:**
  - 🔥 Entradas
  - 🌭 Perros
  - 🍔 Hamburguesas
  - 🍗 Salchipapas
  - ➕ Adicionales
  - 🥤 Combos
- **Navegación avanzada:**
  - Click en tabs para cambiar categoría
  - Flechas ← → del teclado
  - Scroll automático suave al cambiar de categoría
- **Diseño responsive:** Solo iconos en móvil, texto completo en desktop
- **Efectos visuales:** Border dorado animado, sombra en hover, gradiente en tab activo

### ⭐ Promoción del Mes
- **Badge animado:** Efecto pulse-glow continuo con estrellas giratorias
- **Imagen responsive:** Max 450px con border dorado y sombra
- **Texto informativo:** "¡Oferta válida todo el mes! No te la pierdas"
- **Efectos hover:** Elevación y aumento de sombra

### 🎮 Easter Egg - Konami Code
- **Código secreto:** ↑ ↑ ↓ ↓ ← → ← → B A
- **Efecto:** Logo gira 360° con animación de escala
- **Console log:** "🎉 ¡GOSA POWER ACTIVATED! 🎉"

### 🎨 Animaciones de Entrada
- **Intersection Observer:** Detecta cuando elementos entran en viewport
- **Efecto:** Fade in + slide up suave en todas las tarjetas del menú
- **Performance:** Observer se desconecta después de animar

### 📊 Badges de Productos Destacados
- **PREMIUM:** Para Texas BBQ (el perro más exclusivo)
- **POPULAR:** Para Triple Gosa (el favorito de los clientes)
- **ESPECIAL:** Para Madurita (hamburguesa especial con plátano maduro)
- **LA REINA:** Para La Gosa Supreme (el combo más completo)
- **AHORRA:** Para El Combo Completo (mejor precio en combo)
- **Diseño:** Rotación -2°, gradiente dorado, sombra proyectada

### 🍔 Sistema de Opciones Dobles en Hamburguesas
- **Funcionalidad:** Todas las hamburguesas tienen opción de versión doble
- **Diseño:** Separador con borde superior, nombre en tipografía Bebas Neue 1.8em
- **Precios dobles:**
  - Gosa Burguer Doble: +$4,500 (total $14,500)
  - Crispy Gosa Doble: +$4,500 (total $17,500)
  - Gosa Balsamica Doble: +$4,500 (total $17,500)
  - Madurita Doble: +$4,500 (total $18,000)
- **Ubicación:** Debajo de la descripción de cada hamburguesa (index.html)
- **Estilos CSS:** `.double-option`, `.double-name`, `.double-price` (style.css:404-431)

## Sistema de Pedidos

### Backend (Google Sheets + Apps Script)
- **Almacenamiento:** Google Sheets, hoja "Pedidos"
- **Columnas:** ID | Fecha | Hora | Items (JSON) | Total | Estado | Notas
- **Comunicación:** JSONP (inyección de script tag) para evitar CORS
- **Estados del pedido:** `pendiente` → `preparando` → `listo` → `entregado`
- **API Actions disponibles:**
  - `nuevoPedido` — Crea un pedido nuevo (appends row)
  - `actualizarEstado` — Cambia el estado (columna 6)
  - `actualizarPedido` — Actualiza items y total de un pedido existente (columnas 4 y 5)
  - `getPendientes` — Retorna pedidos con estado pendiente/preparando
  - `getHoy` — Retorna todos los pedidos
  - `getPorFecha` — Retorna pedidos de una fecha específica
  - `getResumen` — Resumen de ventas por día (totales, productos vendidos)
- **Configuración:** La URL de la web app de Apps Script se define en `sistema.js` variable `API_URL`. Al modificar el código en Apps Script se debe hacer "Editar implementación" para mantener la misma URL.

### 🚲 Panel de Domicilio (domicilio.html)
- **Flujo completo:**
  1. El cajero toma el pedido en pedidos.html y marca el checkbox "Es para domicilio"
  2. Se agrega automáticamente el marcador `[DOMICILIO]` al campo Notas del pedido
  3. El chef prepara el pedido en cocina.html y lo marca como listo
  4. El pedido aparece automáticamente en domicilio.html
  5. El encargado de entrega lo marca como entregado desde ahí
- **Filtrado:** Client-side sobre `getPedidosHoy()`, filtra `estado === 'listo'` y `notas.includes('[DOMICILIO]')`
- **Marcador:** El `[DOMICILIO]` se elimina visualmente con `formatearNotas()` antes de mostrar las notas
- **Stats:** Listos para entregar y entregados hoy
- **Auto-refresh:** Cada 5 segundos, notificación de sonido + vibración al aparecer pedidos nuevos
- **Tiempo de espera:** Minutos transcurridos desde el pedido, se marca urgente a los 20 min

### ✏️ Editar Pedidos (cocina.html)
- **Disponible en:** Pedidos con estado `pendiente` o `preparando` (no en `listo`, la comida ya está lista)
- **Acceso:** Botón lápiz dorado en cada card de cocina
- **Modal (bottom sheet):**
  - Sección superior: items actuales del pedido con controles +/- de cantidad (elimina al llegar a 0)
  - Sección inferior: grid completo de productos del menú agrupados por categoría para agregar nuevos
  - Footer fijo: total actualizado en tiempo real + botones Guardar/Cancelar
- **Guarda:** Actualiza Items (columna 4) y Total (columna 5) en Google Sheets via acción `actualizarPedido`
- **Impacto:** El nuevo total y los items se reflejan automáticamente en domicilio.html y cierre.html porque leen la misma fila de Sheets

### 📱 Pedidos Responsive (pedidos.html en móvil)
- **Panel de pedido:** Bottom sheet fijo en móvil (≤900px), 72px visibles por defecto, se expande al hacer tap
- **Toggle:** Barra sticky que muestra cantidad de items y total sin expandir el panel
- **Productos:** Grid de 2 columnas con botones de mínimo 80px de altura (≤600px) para facilitar el tap
- **Checkbox domicilio:** Toggle visual con estilo cyan que prependa `[DOMICILIO]` a las notas al enviar

## Contacto y Redes Sociales

- **WhatsApp:** +57 315 417 0484
- **TikTok:** [@gosa.food.truck](https://www.tiktok.com/@gosa.food.truck)
- **Instagram:** [@gosa_ft](https://www.instagram.com/gosa_ft)

## Tips de Desarrollo y Mantenimiento

### Agregar un Nuevo Producto
1. Editar `index.html` en el tab correspondiente
2. Seguir la estructura de `.menu-card`
3. Agregar badge `.featured-badge` si es destacado
4. Para hamburguesas, agregar opción doble usando estructura `.double-option`
5. Organizar por precio (menor a mayor) dentro de la categoría
6. Actualizar precios en este archivo CLAUDE.md

### Agregar Opción Doble a una Hamburguesa
```html
<div class="double-option">
    <span class="double-name">Nombre Hamburguesa Doble</span>
    <span class="double-price">$XX,XXX</span>
</div>
```
**Nota:** Colocar después del párrafo de descripción, dentro del `.menu-card`

### Cambiar Colores del Tema
1. Modificar variables CSS en `style.css` (líneas 4-14)
2. Variables principales: `--gold`, `--gold-dark`, `--black`, `--white`

### Agregar Nueva Categoría al Menú
1. Añadir botón en `.tabs-container` con `data-tab="nombre"`
2. Crear `.tab-panel` con `id="nombre"`
3. JavaScript detectará automáticamente la nueva tab

### Personalizar Animaciones
- Velocidad del carousel: modificar duración en `@keyframes scroll` (línea 99 style.css)
- Efecto de rebote WhatsApp: ajustar `@keyframes float-bounce` (línea 797 style.css)
- Tiempo de shake: modificar setTimeout en script.js (línea 174)

### Debugging
- Consola del navegador muestra logs útiles al cargar la página
- Easter egg de prueba: ↑ ↑ ↓ ↓ ← → ← → B A
- Verificar responsive con DevTools (F12 → Toggle device toolbar)

### Compatibilidad de Navegadores
- Chrome/Edge: 100% compatible
- Firefox: 100% compatible
- Safari: 100% compatible (playsinline para videos)
- IE11: No soportado (usar navegador moderno)

## Licencia

Este proyecto es propiedad de GOSA Food Truck.

---

**Última actualización:** Febrero 2026
**Versión:** 3.3.0 - Domicilio, edición de pedidos y responsive móvil

## Changelog

### v3.3.0 (Febrero 2026) - ACTUAL
**Nuevas funcionalidades:**
- Panel de Domicilio (`domicilio.html`): sección dedicada para gestionar pedidos de entrega
- Checkbox "Es para domicilio" en pedidos.html con marcador `[DOMICILIO]` automático en notas
- Edición de pedidos desde cocina: modal con items editables y grid de productos para agregar
- Nueva acción API `actualizarPedido` en Google Apps Script para actualizar items y total

**Mejoras de UX móvil:**
- pedidos.html responsive: panel de pedido como bottom sheet con toggle sticky
- Botones de producto con mínimo 80px de altura para facilitar el tap
- Grid de 2 columnas en móvil

**Reescritura del backend:**
- google-apps-script.js reescrito con if/else, manejo de JSONP callback, y helpers de formateo de fechas/horas de Google Sheets

### v3.2.0 (Febrero 2026)
**Cambios:**
- Eliminados swipe gestures de script.js (navegación táctil entre tabs)
- Ajustada opacidad de marca de agua del fondo: 0.1 → 0.05
- Actualizada documentación de líneas de referencia en todos los archivos

### v3.1.0 (Enero 2026)
**Nuevas funcionalidades:**
- Sistema de opciones "doble" en todas las hamburguesas
- Nueva hamburguesa: **Madurita** ($13,500) con badge ESPECIAL
- Nueva salchipapa: **Rapi Gosa** ($9,000)
- Cambio de nombre: "Gosa Claus" → "Gosa Balsamica"

**Actualizaciones de productos:**
- Salchi Gosa: nueva descripción y precio ($14,500)
- Eliminado "Queso Doble Crema" de adicionales
- Todos los productos organizados por precio (menor a mayor)

**Mejoras de diseño:**
- Opciones dobles con tipografía Bebas Neue (igual que títulos principales)
- Badge "ESPECIAL" movido de Gosa Balsamica a Madurita
- Mejor organización visual por categorías de precio

### v3.0.0 (Enero 2026)
- Sistema de tabs interactivo reemplazando acordeón
- Navegación por teclado con flechas
- Swipe gestures para dispositivos móviles
- Botón flotante de WhatsApp con animaciones
- Easter egg Konami Code
- Animaciones con Intersection Observer
- Badges para productos destacados
- Tabs sticky con blur backdrop
- Mejoras significativas en UX/UI

### v2.0.0 (Diciembre 2025)
- Rediseño completo del sitio
- Sistema de acordeón para categorías
- Carousel de videos

### v1.0.0
- Lanzamiento inicial
