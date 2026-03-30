# 🚀 GUÍA DE PRUEBA - PrepApp

## 3 FORMAS DE PROBAR LA APLICACIÓN

### 1️⃣ PRUEBA LOCAL (RECOMENDADO PARA DESARROLLO)

#### Opción A: Python (la más simple)
```bash
cd /home/bok/repos/opo/test-opo
python3 -m http.server 8000
```
Luego abre: **http://localhost:8000**

#### Opción B: Node.js (si tienes http-server)
```bash
npm install -g http-server
cd /home/bok/repos/opo/test-opo
http-server -p 8000
```
Luego abre: **http://localhost:8000**

#### Opción C: Live Server en VS Code
1. Instala la extensión "Live Server" (Ritchie Chen)
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abrirá automáticamente en el navegador

**Ventaja**: Se actualiza automáticamente mientras editas

---

### 2️⃣ GITHUB PAGES (PRODUCCIÓN)

#### Paso 1: Habilitar GitHub Pages en el repositorio
1. Ve a: **https://github.com/csernam/test-opo**
2. Entra en **Settings** (Configuración)
3. En la izquierda, busca **Pages**
4. En "Build and deployment":
   - **Source**: Selecciona "Deploy from a branch"
   - **Branch**: Selecciona `main` y `/root` (o `/`)
5. Haz clic en **Save**

#### Paso 2: Espera a que GitHub genere el sitio
- GitHub Pages tardará 1-2 minutos en generar el sitio
- Verás un enlace como: `https://csernam.github.io/test-opo/`

#### Paso 3: Accede a tu app en GitHub Pages
- URL: **https://csernam.github.io/test-opo/**

**Nota**: Cada vez que hagas `git push`, GitHub Pages se actualizará automáticamente

---

### 3️⃣ TESTING EN MÓVIL

#### A. Desde tu red local
Si tienes una red Wi-Fi con el servidor corriendo:
```bash
# Desde tu laptop:
python3 -m http.server 8000

# Desde el móvil, abre:
# http://[IP_DE_TU_LAPTOP]:8000
# Ejemplo: http://192.168.1.100:8000
```

#### B. Desde GitHub Pages
Solo accede a: **https://csernam.github.io/test-opo/**

**Ventaja**: Funciona desde cualquier lugar con internet

---

## ⚡ CONFIGURACIÓN RECOMENDADA PARA DESARROLLO

### Setup ideal para trabajar en otro equipo:

```bash
# 1. Clona el repo
git clone https://github.com/csernam/test-opo.git
cd test-opo

# 2. Abre en VS Code
code .

# 3. Instala Live Server (si no lo tienes)
# Extensions → Busca "Live Server" → Install

# 4. Click derecho en index.html → "Open with Live Server"

# 5. Haz cambios y verás actualizaciones en tiempo real
```

---

## 🧪 QUÉ PROBAR

### Funcionalidades principales:

- ✅ **Preguntas y respuestas**: Responde preguntas, ve si muestra correcto/incorrecto
- ✅ **Navegación**: Botones Anterior/Siguiente (con debounce de 300ms)
- ✅ **Selección de temas**: ⚙️ TEMAS → selecciona qué temas estudiar
- ✅ **Modo aleatorio**: 📋 ORDEN → aleatoria vs orden
- ✅ **Modo repaso**: REPASO: OFF → muestra solo preguntas que fallaste
- ✅ **Estadísticas**: 📊 STATS → ver desempeño por tema
- ✅ **Búsqueda**: Buscador de preguntas por texto
- ✅ **Dark Mode**: 🌙 para modo oscuro (si tu equipo lo agrega)
- ✅ **Swipe móvil**: En móvil, desliza para anterior/siguiente
- ✅ **PWA**: Funciona sin conexión después de la primera carga

---

## 🔍 VERIFICAR QUE TODO FUNCIONA

### En la consola del navegador (F12):

```javascript
// Debería devolver true
typeof db !== 'undefined'

// Debería devolver el número de preguntas
db.length  // Debe ser 315

// Ver estadísticas
estadisticas.getResumen()

// Ver sesión actual
estadisticas.getSessionResumen()
```

---

## 📱 PRUEBA EN MÚLTIPLES DISPOSITIVOS

| Dispositivo | Cómo acceder |
|-----------|------------|
| **Laptop (localhost)** | http://localhost:8000 |
| **Laptop (GitHub Pages)** | https://csernam.github.io/test-opo/ |
| **Móvil (red local)** | http://192.168.X.X:8000 |
| **Móvil (GitHub Pages)** | https://csernam.github.io/test-opo/ |
| **Tablet (red local)** | http://192.168.X.X:8000 |
| **Tablet (GitHub Pages)** | https://csernam.github.io/test-opo/ |

---

## ✨ NEXT STEPS

### Para trabajar en otro equipo:

1. **Clone en el nuevo equipo**:
   ```bash
   git clone https://github.com/csernam/test-opo.git
   cd test-opo
   ```

2. **Abre Live Server** (o `python3 -m http.server 8000`)

3. **Haz cambios y test**

4. **Push cuando termines**:
   ```bash
   git add -A
   git commit -m "Descripción del cambio"
   git push origin main
   ```

5. **Verifica en GitHub Pages**: https://csernam.github.io/test-opo/

---

**¡Listo para probar! 🎉**
