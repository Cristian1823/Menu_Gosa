# GOSA Food Truck - Menú Digital y Sistema de Pedidos

## Descripción del Proyecto

Este es un sitio web completo para **GOSA Food Truck**, un negocio de comida rápida especializado en perros calientes gourmet, hamburguesas artesanales y salchipapas. El proyecto incluye:

1. **Menú Digital** - Carta interactiva para clientes con descripciones y precios
2. **Sistema de Pedidos** - Para toma de pedidos en el punto de venta
3. **Panel de Cocina** - Para que el cocinero vea y gestione pedidos
4. **Cierre de Caja** - Resumen de ventas, costos, ganancia del día + reporte mensual con gráficas y control de sueldos
5. **Panel Para Pago** - Para cobrar pedidos listos (reemplazó Domicilio)
6. **Clientes Frecuentes** - Tarjeta de sellos y programa de fidelización
7. **Inventario** - Control de stock de ingredientes con deducción por consumo y reposición

## Tecnologías Utilizadas

- **HTML5** - Estructura del sitio web
- **CSS3** - Estilos y diseño visual con animaciones avanzadas
- **JavaScript (Vanilla)** - Sistema de tabs, navegación por teclado y efectos interactivos
- **Font Awesome 6.0.0** - Iconos de redes sociales y categorías del menú
- **Google Fonts (Bebas Neue + Inter)** - Tipografía dual: títulos impactantes y texto legible
- **Google Sheets** - Base de datos para almacenar pedidos, sueldos e inventario
- **Google Apps Script** - Backend/API para gestionar pedidos
- **Chart.js 4.4** - Gráficas de barras y línea en el reporte mensual

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
├── domicilio.html          # Panel Para Pago (cobrar pedidos listos)
├── cierre.html             # Cierre de caja (administrador)
├── clientes.html           # Gestión de clientes frecuentes (cajero)
├── tarjeta.html            # Tarjeta de sellos del cliente (se abre desde QR)
├── inventario.html         # Control de inventario de ingredientes (administrador)
├── sistema.js              # Lógica del sistema de pedidos
├── sistema.css             # Estilos del sistema de pedidos
├── google-apps-script.js   # Código para Google Apps Script (copiar a Google)
│
├── images/
│   ├── logo.jpeg           # Logo del food truck
│   ├── Promocion.jpeg      # Banner promocional (slide 1)
│   ├── Promocion2.jpeg     # Banner promocional infantil (slide 2)
│   └── fondo_tarjeta.PNG   # Fondo de imagen para tarjeta.html
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

- **Entradas** - 4 opciones: Aritos Gosa, Bacon Gosa, Totopos Gosa, Tender Gosa
- **Perros Calientes** - 5 variedades gourmet (Perro Ranchero, Chori Gosa, Tropical Gosa, Texas BBQ, Triple Gosa)
- **Hamburguesas** - 5 tipos artesanales con opciones dobles (Gosa Burguer, Crispy Gosa, Gosa Balsamica, Madurita, Alfa Pretzel) — todas tienen versión doble (La Indomable retirada del menú público)
- **Salchipapas** - 3 variedades: Rapi Gosa, Salchi Gosa, La Gosa Supreme
- **Adicionales** - 9 complementos desde $1,000 hasta $4,000 COP
- **Combos** - 3 agrandados especiales + Menú Infantil (Gaseosa/Jugo, Papa, Combo Completo, Menú Infantil)
- **Combo del Mes** - Combo especial con 3 opciones de precio ($35,000 / $38,000 / $42,000)

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

**Repositorio:** https://github.com/Cristian1823/Menu_Gosa

## Archivos Principales

### index.html
Contiene toda la estructura del sitio:
- Header con logo y títulos (líneas 12-16)
- Carousel de videos con 8 slides (líneas 18-46)
- Banner promocional con badge animado (líneas 48-57) — imagen: images/Promocion.jpeg
- Sistema de tabs de navegación (líneas 64-92)
- Contenido de tabs con 7 categorías (líneas 94-327)
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
3. Totopos Gosa: $7,600
4. Tender Gosa: $8,000

### Perros Calientes
1. Perro Ranchero: $10,000
2. Chori Gosa: $11,500
3. Tropical Gosa: $12,000
4. Texas BBQ: $13,500 ⭐ **PREMIUM**
5. Triple Gosa: $14,000 ⭐ **POPULAR**

### Hamburguesas (con opciones dobles)
1. Gosa Burguer: $10,000 → Doble: $14,500
2. Crispy Gosa: $13,000 → Doble: $17,500
3. Gosa Balsamica: $13,000 → Doble: $17,500
4. Madurita: $13,500 → Doble: $18,000 ⭐ **ESPECIAL**
5. Alfa Pretzel: $16,000 → Doble: $22,000 ⭐ **NUEVO**

### Salchipapas
1. Rapi Gosa: $9,000
2. Salchi Gosa: $14,500
3. La Gosa Supreme: $25,000 ⭐ **LA REINA**

### Adicionales
1. Salchicha: $1,200
2. Tocineta: $1,200
3. Agua: $1,000
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
4. Menú Infantil: $14,500 ⭐ **NUEVO**

### Combo del Mes
1. Combo del Mes: $35,000 ⭐ **DEL MES**
2. Combo del Mes (1 Doble): $38,000
3. Combo del Mes (2 Dobles): $42,000

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
   - Protección con PIN de 4 dígitos para más páginas del sistema (pedidos, cocina, domicilio) — cierre ya tiene PIN
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
- **7 categorías con iconos:**
  - 🔥 Entradas
  - 🌭 Perros
  - 🍔 Hamburguesas
  - 🍗 Salchipapas
  - ➕ Adicionales
  - 🥤 Combos
  - 👑 Combo del Mes
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
- **DEL MES:** Para Combo del Mes (combo especial del mes)
- **Diseño:** Rotación -2°, gradiente dorado, sombra proyectada

### 🍔 Sistema de Opciones Dobles en Hamburguesas
- **Funcionalidad:** Todas las hamburguesas tienen opción de versión doble
- **Diseño:** Separador con borde superior, nombre en tipografía Bebas Neue 1.8em
- **Precios dobles (menú público index.html):**
  - Gosa Burguer Doble: +$4,500 (total $14,500)
  - Crispy Gosa Doble: +$4,500 (total $17,500)
  - Gosa Balsamica Doble: +$4,500 (total $17,500)
  - Madurita Doble: +$4,500 (total $18,000)
- **Nota:** La Indomable retirada del menú público (index.html) pero sigue activa en pedidos.html vía hoja Productos de Sheets (Activo=TRUE/FALSE)
- **Ubicación:** Debajo de la descripción de cada hamburguesa (index.html)
- **Estilos CSS:** `.double-option`, `.double-name`, `.double-price` (style.css:404-431)

## Sistema de Pedidos

### Backend (Google Sheets + Apps Script)
- **Almacenamiento:** Google Sheets (hojas: Pedidos, Productos, Clientes, Ingredientes, Sueldos)
- **Comunicación:** JSONP (inyección de script tag) para evitar CORS
- **Estados del pedido:** `pendiente` → `preparando` → `listo` → `entregado`
- **Hojas de Google Sheets:**
  - `Pedidos` — Columnas: ID | Fecha | Hora | Items (JSON) | Total | Estado | Notas
  - `Productos` — Columnas: ID | Nombre | Categoria | PrecioVenta | Costo | GastoOperativo | Activo (TRUE/FALSE)
  - `Clientes` — Columnas: ID | Nombre | Teléfono | Sellos | Canjes | FechaRegistro | UltimoSello
  - `Ingredientes` — Columnas: ID | Nombre | Unidad | Stock | StockMinimo | UltimaActualizacion
  - `Sueldos` — Columnas: ID | Fecha | Nombre | Valor | Nota (auto-creada al registrar el primer sueldo)
- **API Actions disponibles:**
  - `nuevoPedido` — Crea un pedido nuevo (appends row)
  - `actualizarEstado` — Cambia el estado (columna 6)
  - `actualizarPedido` — Actualiza items, total y notas de un pedido existente (columnas 4, 5 y 7)
  - `getPendientes` — Retorna pedidos con estado pendiente/preparando
  - `getHoy` — Retorna pedidos del día actual (filtra por fecha de hoy)
  - `getPorFecha` — Retorna pedidos de una fecha específica
  - `getResumen` — Resumen del día: totalVentas, totalCosto, totalGastoOp, gananciaNeta, ticketPromedio, productos con ingreso/costo/ganancia por ítem
  - `getResumenMes` — Resumen de un mes: ventas/costos/ganancia por día y por producto (param `mes` formato YYYY-MM)
  - `getResumenMesCompleto` — Llamada única que retorna `{ resumen, sueldos, empleados }` para el reporte mensual
  - `getProductos` — Retorna catálogo de la hoja Productos (solo activos)
  - `registrarCliente` — Registra nuevo cliente en hoja Clientes
  - `getCliente` — Busca cliente por ID
  - `buscarClientes` — Busca clientes por nombre o ID (query mínimo 2 chars, max 8 resultados)
  - `agregarSello` — Suma 1 sello al cliente y actualiza UltimoSello
  - `quitarSello` — Resta 1 sello (para correcciones)
  - `canjearPremio` — Reinicia sellos a 0 y suma 1 a Canjes (requiere ≥6 sellos)
  - `getInventario` — Retorna stock actual de todos los ingredientes
  - `inicializarInventario` — Crea y puebla la hoja Ingredientes con los 16 ingredientes base
  - `descontarConsumo` — Lee pedidos de una fecha, aplica recetas y descuenta stock (POST con `fecha`)
  - `reponerIngrediente` — Suma cantidad al stock de un ingrediente (POST con `id` y `cantidad`)
  - `registrarSueldo` — Agrega fila en hoja Sueldos (POST con `fecha`, `nombre`, `valor`, `nota`)
  - `eliminarSueldo` — Elimina fila por ID de la hoja Sueldos (POST con `id`)
  - `getSueldosFecha` — Retorna sueldos de una fecha específica (param `fecha`)
  - `getSueldosMes` — Retorna sueldos de un mes completo (param `mes` formato YYYY-MM)
  - `getEmpleados` — Retorna lista única de nombres de empleados de la hoja Sueldos
- **Configuración:** La URL de la web app de Apps Script se define en `sistema.js` variable `API_URL`. Al modificar el código en Apps Script se debe hacer "Editar implementación" para mantener la misma URL.

### 🚲 Panel de Domicilio (domicilio.html)
- **Flujo completo:**
  1. El cajero toma el pedido en pedidos.html y marca el checkbox "Es para domicilio"
  2. Se agrega automáticamente el marcador `[DOMICILIO]` al campo Notas del pedido
  3. El chef prepara el pedido en cocina.html y lo marca como listo
  4. El pedido aparece automáticamente en domicilio.html
  5. El encargado de entrega lo marca como entregado desde ahí
- **Filtrado:** Client-side sobre `getPedidosHoy()`, filtra por fecha de hoy, `estado === 'listo'` y `notas.includes('[DOMICILIO]')`
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
  - Sección de opciones: checkbox "Es para domicilio" y textarea de notas editables
  - Footer fijo: total actualizado en tiempo real + botones Guardar/Cancelar
- **Guarda:** Actualiza Items (columna 4), Total (columna 5) y Notas (columna 7) en Google Sheets via acción `actualizarPedido`
- **Domicilio desde cocina:** Si se olvidó marcar domicilio al tomar el pedido, se puede agregar/quitar el marcador `[DOMICILIO]` desde el modal de edición
- **Impacto:** El nuevo total, items y notas se reflejan automáticamente en domicilio.html y cierre.html porque leen la misma fila de Sheets

### 📱 Pedidos Responsive (pedidos.html en móvil)
- **Panel de pedido:** Bottom sheet fijo en móvil (≤900px), 72px visibles por defecto, se expande al hacer tap
- **Toggle:** Barra sticky que muestra cantidad de items y total sin expandir el panel
- **Productos:** Grid de 2 columnas con botones de mínimo 80px de altura (≤600px) para facilitar el tap
- **Checkbox domicilio:** Toggle visual con estilo cyan que prependa `[DOMICILIO]` a las notas al enviar

### 🔒 Protección con PIN (cierre.html e inventario.html)
- **PIN:** 1130
- **Páginas protegidas:** `cierre.html` e `inventario.html`
- **Pantalla de bloqueo:** Cubre todo el contenido hasta ingresar el PIN correcto
- **4 campos de entrada:** Auto-avanza al siguiente campo, inputmode numérico para teclado móvil
- **Feedback visual:** Animación shake + mensaje "PIN incorrecto" si falla, limpia campos automáticamente
- **Seguridad:** El contenido no se carga hasta validar el PIN

### 🤝 Modo Al Costo (pedidos.html)
- **Propósito:** Para clientes con precio preferencial, muestra precios al costo de producción
- **Activación:** Cuarto botón del toggle de tipo de pedido (naranja)
- **Marcador en notas:** `[AL COSTO]` se agrega automáticamente al pedido
- **Comportamiento:**
  - Al activar: todos los items del carrito cambian a precio costo
  - Al desactivar: vuelven al precio de venta
  - Al limpiar pedido: se resetea el modo
- **Fuente de costos:** Columna `Costo` de la hoja Productos en Sheets (cargada al inicio)
- **CSS:** `.tipo-check-costo.activo` con colores naranjas (#ff6b35)
- **Banner informativo:** Aparece en naranja bajo el toggle cuando está activo

### 📦 Inventario de Ingredientes (inventario.html)
- **Protección:** PIN 1130 (igual que cierre.html)
- **Ingredientes:** 16 ingredientes base (ING01–ING16) cubriendo todos los productos del menú
- **Hoja:** `Ingredientes` en Google Sheets — ID | Nombre | Unidad | Stock | StockMinimo | UltimaActualizacion
- **Estados de stock:** AGOTADO (stock≤0), CRÍTICO (stock<mínimo), BAJO (stock≤mínimo×1.5), OK
- **Flujo de uso:**
  1. Al inicio del día: reponer ingredientes con el botón "+ Reponer" por ingrediente
  2. Al cierre: presionar "Descontar Consumo" seleccionando la fecha del día
  3. El sistema lee los pedidos, aplica las recetas y descuenta automáticamente
- **Recetas:** `RECETAS_DEFAULT` hardcodeado en Apps Script como fallback; soporta hoja opcional "Recetas"
- **Botón "Crear hoja automáticamente":** Aparece si la hoja Ingredientes no existe; llama a `inicializarInventario` desde la UI
- **Ordenamiento:** Tabla ordenada por urgencia (agotado → crítico → bajo → ok)

### ⚡ Cache de Precios (pedidos.html y cocina.html)
- **Mecanismo:** localStorage con TTL de 24 horas (`gosa_productos_cache`)
- **Comportamiento:** Primera carga del día consulta Sheets; las siguientes usan cache (instantáneo)
- **Botón 🔄:** En el nav de pedidos.html y cocina.html — fuerza actualización desde Sheets
- **COSTOS:** Se construye desde el mismo array cacheado (un solo llamado a la API al día)
- **Fallback:** Si falla la API, usa precios hardcodeados en sistema.js

### 📊 Reporte Mensual (cierre.html)
- **Acceso:** Sección "Reporte Mensual" al final de cierre.html (protegida con PIN 1130)
- **Selector de mes:** Input `month` con botón 🔄 para forzar refresco ignorando cache
- **Tarjetas de resumen (7 cards):**
  - Total Vendido, Total Pedidos, Ticket Promedio
  - Ganancia luego de costos (verde), Total Costos (rojo)
  - Total Sueldos (naranja), Ganancia Real (turquesa — después de costos Y sueldos)
- **Producto Estrella:** Producto más vendido del mes con icono 🏆, unidades vendidas e ingreso total
- **Gráfica (Chart.js 4.4):** Gráfica mixta — barras doradas (Ventas), barras verdes (Ganancia costos), línea turquesa (Ganancia Real)
- **Tabla de días:** Columnas Día | Ventas | Costos | Ganancia costos | Sueldos | Ganancia Real — columnas de sueldos/gananciaReal solo aparecen si hay datos de sueldos en el mes
- **Performance:**
  - Llamada única `getResumenMesCompleto` (merges resumen + sueldos + empleados en 1 request)
  - Cache localStorage: 30 min para mes actual (`gosa_mes_YYYY-MM`), 7 días para meses anteriores
  - Botón 🔄 invalida cache y reconsulta desde Sheets

### 💰 Sueldos del Día (cierre.html)
- **Propósito:** Registrar lo pagado a empleados para calcular la Ganancia Real
- **Flujo:** El administrador ingresa nombre + valor + nota opcional → se guarda en hoja Sueldos de Sheets
- **Dropdown de empleados:** Se puebla automáticamente con nombres únicos históricos de la hoja Sueldos; incluye opción "➕ Nuevo empleado..." para escribir nombre nuevo
- **Comportamiento del dropdown:**
  - Primera vez (hoja vacía): solo muestra "➕ Nuevo empleado..." → aparece campo de texto
  - Veces siguientes: lista de empleados previos + opción de nuevo
- **Eliminar sueldo:** Botón ✕ por registro con confirmación; invalida cache del mes automáticamente
- **Total del día:** Se muestra suma de sueldos del día en tiempo real
- **Integración con reporte mensual:** Los sueldos del día se reflejan en la columna Sueldos y Ganancia Real de la tabla mensual
- **CSS:** Color naranja `#ff6b35` para sueldos, turquesa `#00d4aa` para Ganancia Real

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

**Última actualización:** Abril 2026
**Versión:** 4.2.0 - Reporte mensual + Sueldos + Gráficas en cierre de caja

## Changelog

### v4.2.0 (Abril 2026) - ACTUAL

**Reporte mensual en cierre.html:**
- Selector de mes con 7 tarjetas: Total Vendido, Pedidos, Ticket Promedio, Ganancia costos, Total Costos, Total Sueldos, Ganancia Real
- Producto estrella del mes con icono 🏆 y métricas de unidades e ingreso
- Gráfica mixta Chart.js 4.4: barras doradas (Ventas) + barras verdes (Ganancia costos) + línea turquesa (Ganancia Real)
- Tabla de días con columnas de sueldos y gananciaReal que aparecen solo si hay datos

**Control de sueldos del día:**
- Sección interactiva en cierre.html para registrar pagos a empleados
- Dropdown dinámico de empleados poblado desde historial de hoja Sueldos; opción "➕ Nuevo empleado..."
- Hoja `Sueldos` en Google Sheets: ID | Fecha | Nombre | Valor | Nota — auto-creada al primer registro
- Eliminar sueldos con confirmación; invalida cache del mes automáticamente

**Ganancia Real:**
- Dos niveles de ganancia: "Ganancia luego de costos" (solo costos productos) vs "Ganancia Real" (costos + sueldos)
- Se reflejan en las tarjetas del reporte mensual y en la gráfica de línea

**Performance del reporte mensual:**
- Llamada única `getResumenMesCompleto` (resumen + sueldos + empleados en 1 JSONP request)
- Cache localStorage: 30 min mes actual, 7 días meses anteriores (`gosa_mes_YYYY-MM`)
- Botón 🔄 fuerza reconsulta invalidando cache

**Nuevas API actions:**
- `getResumenMes`, `getResumenMesCompleto`, `getSueldosFecha`, `getSueldosMes`, `getEmpleados` (GET)
- `registrarSueldo`, `eliminarSueldo` (POST)

### v4.1.0 (Abril 2026)

**Nuevos productos:**
- `Totopos Gosa` ($7,600) agregado a Entradas — totopos de maíz bañados en salsa cheddar
- `Alfa Pretzel` ($16,000) + `Alfa Pretzel Doble` ($22,000) agregados a Hamburguesas con badge NUEVO
- `Menu Infantil Hamburguesa` y `Menu Infantil Nuggets` ($14,500 c/u) en Combos — separados para inventario correcto

**Menú Infantil — opción dual:**
- Se divide en dos productos separados (Hamburguesa / Nuggets) para que el inventario descuente los ingredientes correctos según lo que pida el cliente
- Recetas independientes: Hamburguesa usa ING19+ING14+ING06+ING03+ING02; Nuggets usa ING20×6+ING02
- En Sheets `Productos`: dos filas c4h y c4n, mismo precio

**Slider promocional (index.html):**
- Sección de promoción reemplazada por slider lateral con 2 slides
- Slide 1: Promoción del Mes (`images/Promocion.jpeg`)
- Slide 2: Promoción Infantil (`images/combo infantil.jpeg`)
- Badge dinámico: cambia entre "PROMOCIÓN DEL MES" y "PROMOCIÓN INFANTIL" según el slide activo
- Navegación con flechas `‹ ›` y dots indicadores clickeables
- Animación fade al cambiar slide
- CSS: `.promo-slider`, `.promo-slide`, `.promo-nav`, `.promo-arrow`, `.promo-dots`, `.promo-dot`
- JS: función `irAPromo(index)` en `script.js`

**Nuevos ingredientes (ING17–ING20):**
- ING17: Pan de pretzel
- ING18: Queso amarillo
- ING19: Pan pequeño
- ING20: Nuggets
- Agregados en `RECETAS_DEFAULT` y en `inicializarInventario` de `google-apps-script.js`
- Agregados manualmente en hoja `Ingredientes` de Sheets

### v4.0.0 (Marzo 2026)

**Inventario de ingredientes:**
- `inventario.html`: Nueva página con PIN 1130, tabla de stock ordenada por urgencia, botón "Descontar Consumo" con selector de fecha y botones de reposición por ingrediente
- `google-apps-script.js`: 4 nuevas acciones — `getInventario`, `inicializarInventario`, `descontarConsumo`, `reponerIngrediente`
- `RECETAS_DEFAULT`: mapa hardcodeado en Apps Script con las recetas de los 26 productos del menú
- Botón "Crear hoja automáticamente" en inventario.html aparece ante cualquier error de carga
- Hoja `Ingredientes` en Google Sheets: ID | Nombre | Unidad | Stock | StockMinimo | UltimaActualizacion

**Modo Al Costo en pedidos.html:**
- Cuarto botón en el toggle de tipo de pedido (naranja) para clientes con precio preferencial
- Activa precios de costo de producción en todo el carrito; se puede activar/desactivar en cualquier momento
- Marcador `[AL COSTO]` en notas del pedido
- `sistema.css`: layout del toggle cambiado a CSS grid 2×2 (`grid-template-columns: 1fr 1fr`) para evitar desbordamiento

**Cache localStorage 24h para precios:**
- `sistema.js`: `cargarProductos(forzar)` usa cache `gosa_productos_cache` con TTL de 24h
- Primera carga del día llama a Sheets; siguientes cargas usan cache (instantáneo)
- Botón 🔄 en nav de `pedidos.html` y `cocina.html` para forzar actualización manual
- Elimina llamada duplicada a `getProductos` en `pedidos.html` (ahora una sola llamada al día)

**Menú público (index.html):**
- La Indomable y La Indomable Doble retiradas del menú público (siguen en pedidos vía Sheets)

**Navegación:**
- Enlace "Inventario" agregado al nav de pedidos.html, cocina.html, domicilio.html, cierre.html, clientes.html

### v3.8.0 (Marzo 2026)

**Domicilio como tercera opción del toggle:**
- `pedidos.html` y `cocina.html`: Toggle ahora tiene 3 opciones: Para llevar, Para comer acá, Domicilio
- Marcador `[DOMICILIO]` disponible desde el toggle (antes solo se ponía manualmente en notas)
- `limpiarPedido()` también resetea el label de Domicilio

**Sello al Cliente integrado en pedidos.html:**
- Sección colapsable "Sello al Cliente" al final del panel de pedido
- El cajero busca el cliente por nombre o ID sin salir de la pantalla de pedidos
- Muestra sellos actuales con iconos 🌭 y permite agregar sello con un botón
- Si la tarjeta está completa (6 sellos), muestra banner naranja para canjear en clientes.html
- Usa `buscarClientes` y `agregarSello` de la API directamente

**Sistema de Clientes integrado con Google Sheets:**
- `clientes.html` y `tarjeta.html` ahora usan llamadas JSONP a la API (ya no localStorage)
- `google-apps-script.js` incluye todas las acciones de clientes: `registrarCliente`, `getCliente`, `buscarClientes`, `agregarSello`, `quitarSello`, `canjearPremio`
- Hoja "Clientes" en Google Sheets: ID | Nombre | Teléfono | Sellos | Canjes | FechaRegistro | UltimoSello

**Hoja Productos y carga dinámica de precios:**
- Nueva hoja "Productos" en Google Sheets: ID | Nombre | Categoria | PrecioVenta | Costo | GastoOperativo | Activo
- `getProductos` en Apps Script retorna productos activos de esa hoja
- `cargarProductos()` en `sistema.js` actualiza el objeto `MENU` desde Sheets al cargar pedidos.html y cocina.html
- Si falla la carga, usa los precios hardcodeados en `sistema.js` como respaldo

**getResumen con métricas de costos:**
- `getResumen` ahora retorna: `totalVentas`, `totalCosto`, `totalGastoOp`, `gananciaNeta`, `ticketPromedio`
- Por producto: `ingreso`, `costo`, `gastoOperativo`, `gananciaNeta`
- Para Combo del Mes: calcula costos sumando los sub-productos de la composición (formato `"Combo del Mes: ProductoA + ProductoB"`)

### v3.7.0 (Marzo 2026)

**Toggle Para llevar / Para comer acá (2 opciones iniciales — expandido a 3 en v3.8.0):**
- `pedidos.html`: Reemplazado checkbox de domicilio por toggle doble "Para llevar" / "Para comer acá"
  - Marcadores en notas: `[PARA LLEVAR]` / `[PARA COMER ACA]`
  - Click nuevamente en el activo lo deselecciona (ninguno = sin tipo)
- `cocina.html`: Modal de edición actualizado con el mismo toggle
  - Cards muestran badge dorado (Para comer acá) o verde (Para llevar)
  - Las notas se muestran limpias sin el marcador
- `sistema.css`: Nuevas clases `.tipo-pedido-toggle`, `.tipo-check`, `.tipo-badge`, `.tipo-badge.llevar`, `.tipo-badge.comer`

**Sección Para Pago (reemplaza Domicilio):**
- `domicilio.html`: Renombrada internamente como "Para Pago" — muestra TODOS los pedidos con estado `listo` del día
- Badge de tipo en cada card (Para llevar / Para comer acá)
- Botón verde **"COBRADO"** → marca pedido como `entregado`
- Stats: "Por cobrar" (listos) y "Cobrados hoy" (entregados)
- Auto-refresh cada 5s con notificación de sonido + vibración
- Navegación en todos los archivos actualizada: "Domicilio" → "Para Pago"

### v3.6.1 (Marzo 2026) - ✅ INTEGRADO CON GOOGLE SHEETS

**Sistema de Tarjeta de Sellos — Cliente Frecuente:**
- `clientes.html`: Página nueva para el cajero — registrar clientes y escanear QR
  - Tab "Registrar": formulario nombre + teléfono, genera QR con link a tarjeta del cliente
  - Tab "Escanear QR": cámara para escanear QR + buscador por nombre/ID
  - Al encontrar cliente: muestra tarjeta con sellos y botones de acción
  - Botón **"Agregar Sello"** (dorado) + botón **"✕ Quitar"** (para corregir errores)
  - Al llegar a 6 sellos: botón naranja pulsante **"Canjear Perro Gratis"** → reinicia a 0 y suma canjes
  - Premio mostrado en banner: **"🌭 PERRO RANCHERO O RAPI GOSA GRATIS"**
  - Badge de canjes previos (dorado) visible en el panel del cliente si ya ha canjeado antes
- `tarjeta.html`: Página del cliente (se abre desde el QR)
  - Muestra 6 slots de sellos 🌭, barra de progreso y premio
  - Al completar 6: pantalla naranja animada **"¡Premio Listo!"** para mostrar al cajero
  - Auto-refresh cada 4 segundos para ver sellos en tiempo real
  - Muestra badge de canjes previos (🎁 X canjes previos) si el cliente ya ha canjeado antes
  - Fondo: imagen `images/fondo_tarjeta.PNG` con overlay rgba(0,0,0,0.72)
- **Premio:** Perro Ranchero o Rapi Gosa Gratis al completar 6 sellos
- **IDs de cliente:** formato `GOSA-XXXXXX` (6 caracteres alfanuméricos)

**Estado actual — integrado con Google Sheets:**
- Los datos se guardan en la hoja "Clientes" de Google Sheets
- El QR contiene la URL completa de `tarjeta.html?id=GOSA-XXXXXX`
- Las acciones `registrarCliente`, `getCliente`, `agregarSello`, `quitarSello`, `canjearPremio` están en `google-apps-script.js`
- `tarjeta.html` y `clientes.html` usan llamadas JSONP a la API (mismo mecanismo que el resto del sistema)

**Pendiente:**
- Alojar `tarjeta.html` en GitHub Pages para que el QR funcione desde cualquier celular (actualmente solo funciona en red local)

### v3.6.0 (Marzo 2026)
**Actualización de menú:**
- `index.html` + `sistema.js`: Retirados **Gosa Dulcin** y **Perro Burguer** de Perros Calientes
- Nuevo perro: **Chori Gosa** ($11,500) — chorizo de cerdo envuelto en tocineta, queso doble crema, papa ripio y salsa de la casa
- Nueva hamburguesa: **La Indomable** ($13,500) — pan brioche morado artesanal, queso crema philadelphia, chutney de frutos rojos, tocineta crocante, vegetales frescos y salsa de la casa

**Modal Combo del Mes:**
- `pedidos.html`: Al seleccionar Combo del Mes se abre un modal para armar la composición del combo
- El cajero selecciona los productos que pidió el cliente (informativo para cocina)
- El precio queda fijo ($35,000 / $38,000 / $42,000) sin importar los productos seleccionados

**Repositorio GitHub:** https://github.com/Cristian1823/Menu_Gosa
- Carpeta renombrada `Images/` → `images/` para compatibilidad con servidores Linux
- Corregida extensión `Promocion.jpg` → `Promocion.jpeg`

### v3.5.0 (Febrero 2026)
**Corrección de zona horaria (client-side):**
- `sistema.js`: `fechaHoy()` ahora usa `toLocaleDateString('en-CA', { timeZone: 'America/Bogota' })` en vez de `toISOString()` que usaba UTC. Esto causaba que después de las 7PM Colombia (medianoche UTC) el sistema mostrara la fecha del día siguiente y dejara de mostrar pedidos.

**Nuevo producto - Combo del Mes:**
- `index.html`: Nuevo tab "Combo del Mes" con icono de corona y 3 opciones de precio con estilo de opciones dobles
- `sistema.js`: Nueva categoría `comboDelMes` en el objeto MENU con 3 variantes: Combo del Mes ($35,000), 1 Doble ($38,000), 2 Dobles ($42,000)
- Aparece automáticamente en pedidos.html y en el modal de edición de cocina.html

**Protección con PIN en Cierre de Caja:**
- `cierre.html`: Pantalla de bloqueo con PIN de 4 dígitos (1130) antes de acceder al contenido
- Inputs con auto-avance, animación shake en error, inputmode numérico para móvil

**Edición de domicilio y notas desde cocina:**
- `cocina.html`: Modal de edición ahora incluye checkbox "Es para domicilio" y textarea de notas
- `google-apps-script.js`: `actualizarPedido()` ahora acepta y guarda notas (columna 7)
- `sistema.js`: `actualizarPedido()` envía notas al backend
- Permite marcar/desmarcar domicilio y modificar notas de pedidos existentes

**Actualización de precios:**
- Agua: $1,500 → $1,000 (en index.html y sistema.js)

### v3.4.0 (Febrero 2026)
**Corrección de filtrado por fecha:**
- `google-apps-script.js`: La función `getPedidosHoy()` ahora filtra correctamente por fecha actual (zona horaria Colombia)
- `cocina.html`: Las estadísticas (Pendientes, Preparando, Listos Hoy) ahora filtran solo pedidos del día actual
- `domicilio.html`: Filtra pedidos por fecha de hoy para "Listos para entregar" y "Entregados Hoy"
- `cierre.html`: Por defecto muestra el resumen del día actual en vez de todos los pedidos

**Nota:** Se agregó filtrado client-side en cocina y domicilio como respaldo, independiente de si el backend está actualizado.

### v3.3.0 (Febrero 2026)
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
