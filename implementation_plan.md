# Plan de Implementación - Bloque de Examen Práctico

Este plan detalla los cambios técnicos y de diseño para agregar la sección del **Examen Práctico** como un bloque independiente del actual examen de teoría, manteniendo la persistencia y estadísticas separadas, y permitiendo escalar a futuros bloques de forma sencilla.

---

## Preguntas y Aclaraciones
No hay preguntas críticas pendientes. Hemos analizado los archivos PDF extraídos (`T1.txt` a `T4.txt` y `Soluciones.txt`), comprobado que las preguntas y respuestas suman un total exacto de **216 preguntas** y **4 temas**, y que las hemos parseado correctamente en `preguntas_practico.js` y `temas_practico.js`.

---

## Cambios Propuestos

### 1. Backend y Preparación de Datos (Completado)
Ya hemos extraído el texto de los PDFs e implementado el parser en Python ([generate_practico.py](file:///d:/Documents/GitHub/test-opo/scripts/generate_practico.py)). Esto generó los siguientes archivos de datos:
- [preguntas_practico.js](file:///d:/Documents/GitHub/test-opo/preguntas_practico.js): Contiene la base de datos `dbPractico` con 216 preguntas prácticas mapeadas con sus soluciones.
- [temas_practico.js](file:///d:/Documents/GitHub/test-opo/temas_practico.js): Contiene los 4 temas del examen práctico y sus descripciones completas.

---

### 2. Núcleo de la Aplicación (Gestión de Estadísticas)

#### [MODIFY] [estadisticas.js](file:///d:/Documents/GitHub/test-opo/estadisticas.js)
Modificaremos la clase `EstadisticasManager` para admitir la inicialización dinámica por bloque de estudio. Esto evitará que se mezclen las estadísticas e intentos de la parte teórica y la práctica.
- Añadir el método `setBlock(blockId)` que actualiza dinámicamente `this.storageKey` y `this.sessionKey` usando el ID del bloque (ej. `malaga_stats_teorico` y `malaga_stats_practico`).
- Recargar el estado (`this.stats` y `this.sessionStats`) al cambiar de bloque.

---

### 3. Interfaz de Usuario y Lógica

#### [MODIFY] [index.html](file:///d:/Documents/GitHub/test-opo/index.html)
Actualizaremos la UI principal para incluir:
- **Carga de nuevos scripts**: Importar `preguntas_practico.js` y `temas_practico.js`.
- **Selector de Bloques**: Crear una pantalla de inicio con tarjetas visualmente atractivas (usando degradados de Tailwind, sombras suaves, micro-animaciones en hover y badges con progreso actual) para seleccionar entre "Temario General (Teoría)" y "Examen Práctico".
- **Botón Cambiar Bloque**: Añadir un botón `🔄 Bloques` en la barra de herramientas superior para que el usuario pueda volver a la pantalla de selección cuando quiera.
- **Adaptación de variables globales**: Cambiar el acceso directo al array `db` y `temasData` por variables de estado dinámicas (`currentDb` y `currentTemasData`) que apuntarán al bloque activo seleccionado.
- **Persistencia de Filtros e Intentos**: Adaptar las funciones de carga de `fails`, `failsCount` y `selectedTemas` de `localStorage` para que utilicen sufijos basados en el bloque activo (ej. `malaga_fails_practico`).

---

### 4. Modo Offline y PWA

#### [MODIFY] [sw.js](file:///d:/Documents/GitHub/test-opo/sw.js)
Actualizaremos el Service Worker para incluir los nuevos archivos y actualizar la versión del caché.
- Modificar `CACHE_NAME` a `prepapp-malaga-v3`.
- Añadir `./preguntas_practico.js` y `./temas_practico.js` a la lista `urlsToCache`.

---

## Plan de Verificación

### Pruebas Manuales
1. **Flujo de selección**:
   - Abrir la aplicación y verificar que se muestra la pantalla de selección de bloques si no hay selección previa.
   - Verificar que al pulsar "Temario General (Teoría)" se inicia el test clásico (315 preguntas) y se muestran los temas teóricos (1-16) en el panel de filtros.
   - Verificar que al pulsar "Examen Práctico" se inicia el test de supuestos (216 preguntas) y se muestran los temas prácticos (1-4) en los filtros.
2. **Independencia de datos**:
   - Responder preguntas en el bloque práctico y verificar que las estadísticas dadas en el modal son exclusivamente de esa sesión.
   - Cambiar al bloque de teoría y confirmar que mantiene estadísticas separadas.
   - Comprobar que en `localStorage` existen entradas diferenciadas: `malaga_stats_teorico` y `malaga_stats_practico`.
3. **PWA e inicio offline**:
   - Verificar que el service worker se registra correctamente y que los recursos prácticos se añaden a la caché offline.
