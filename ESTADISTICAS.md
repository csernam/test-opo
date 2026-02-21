# 📊 Sistema de Estadísticas - PrepApp

## Descripción General

El sistema de estadísticas de PrepApp registra y analiza el desempeño del usuario en tres niveles:

1. **Sesión Actual**: Datos de la sesión activa (desde que se abrió la página)
2. **Hoy**: Estadísticas acumuladas durante el día actual
3. **General**: Histórico completo de todas las sesiones

## Características

### 📈 Métricas Registradas

Para cada respuesta se registra:
- ✅ Pregunta ID
- ✅ Tema asociado
- ✅ Respuesta seleccionada
- ✅ Si es correcta o incorrecta
- ✅ Timestamp exacto

### 📊 Estadísticas Generadas

#### Por Sesión
- Total de preguntas respondidas
- Preguntas correctas e incorrectas
- Porcentaje de acierto
- Duración de la sesión
- Desglose por tema

#### Diarias
- Total de respuestas del día
- Aciertos y fallos por día
- Porcentaje diario
- Desempeño por tema cada día

#### Generales
- Total histórico de respuestas
- Racha máxima conseguida
- Desempeño por tema (ordenado por peor desempeño)
- Porcentaje global de acierto

## Almacenamiento

- **localStorage**: Estadísticas acumuladas (persistente entre sesiones)
- **sessionStorage**: Datos de la sesión actual (se limpian al cerrar pestaña)

## API de Uso

### Instancia Global
```javascript
// Ya está disponible globalmente
estadisticas
```

### Métodos Principales

#### Registrar una respuesta
```javascript
estadisticas.registrarRespuesta(pregunta, respuesta, esCorrecta);
// pregunta: objeto con {id, tema, tema_title, ...}
// respuesta: 'a', 'b', 'c' o 'd'
// esCorrecta: boolean
```

#### Obtener datos de la sesión actual
```javascript
const sessionData = estadisticas.getSessionResumen();
// Devuelve: {totalCorrectas, totalIncorrectas, total, porcentaje, temas, duracion}
```

#### Obtener datos de hoy
```javascript
const todayData = estadisticas.getHoyStats();
// Devuelve: {fecha, temas, total, acertadas, falladas}
```

#### Obtener resumen general
```javascript
const generalData = estadisticas.getResumen();
// Devuelve: {totalPreguntas, totalAcertadas, totalFalladas, racha, rachaMaxima, porcentaje}
```

#### Obtener temas ordenados por desempeño
```javascript
const temas = estadisticas.getTemasByPerformance();
// Devuelve array ordenado de peor a mejor desempeño
```

### Gestión de Datos

#### Exportar estadísticas
```javascript
const json = estadisticas.exportar();
// Devuelve string JSON con todos los datos
```

#### Importar estadísticas
```javascript
estadisticas.importar(jsonString);
// Importa datos desde un JSON previo
```

#### Limpiar estadísticas
```javascript
estadisticas.limpiarTodo();
// Borra todo después de confirmación
```

## Interfaz Visual

### Botón de Estadísticas
Un botón "📊 STATS" en la barra superior abre el modal de estadísticas.

### Modal de Estadísticas
Tres pestañas:

1. **Sesión Actual**
   - Resumen de la sesión activa
   - Desglose por tema
   - Duración

2. **Hoy**
   - Estadísticas acumuladas del día
   - Porcentaje de acierto
   - Temas trabajados

3. **General**
   - Histórico completo
   - Temas ordenados por desempeño (peores primero)
   - Racha máxima conseguida

### Acciones
- 💾 **Exportar**: Descarga un JSON con todas las estadísticas
- 🗑️ **Limpiar**: Borra todas las estadísticas (con confirmación)
- **Cerrar**: Cierra el modal

## Estructura de Datos

### localStorage: `malaga_stats`
```javascript
{
  "lastUpdated": "2026-02-21T20:30:00Z",
  "overall": {
    "totalPreguntas": 150,
    "totalAcertadas": 105,
    "totalFalladas": 45,
    "racha": 5,
    "rachaMaxima": 12
  },
  "daily": {
    "2026-02-21": {
      "fecha": "2026-02-21",
      "temas": {
        "1": {"titulo": "...", "correctas": 10, "incorrectas": 2},
        "2": {"titulo": "...", "correctas": 8, "incorrectas": 3}
      },
      "total": 20,
      "acertadas": 18,
      "falladas": 2
    }
  },
  "byTema": {
    "1": {"titulo": "...", "correctas": 50, "incorrectas": 10},
    "2": {"titulo": "...", "correctas": 45, "incorrectas": 15}
  }
}
```

### sessionStorage: `malaga_session`
```javascript
{
  "startTime": "2026-02-21T20:00:00Z",
  "respuestas": {
    "1": {"correctas": 5, "incorrectas": 1},
    "2": {"correctas": 3, "incorrectas": 2}
  },
  "intentos": [
    {
      "id": 1,
      "tema": 1,
      "respuesta": "a",
      "correcta": true,
      "timestamp": "2026-02-21T20:01:00Z"
    }
  ]
}
```

## Flujo de Funcionamiento

1. **Al responder una pregunta**
   - Se llama a `estadisticas.registrarRespuesta(pregunta, respuesta, esCorrecta)`
   - Se actualiza sessionStorage inmediatamente
   - Se actualiza localStorage
   - Se calculan porcentajes y tendencias

2. **Al ver estadísticas**
   - Se leen los datos de localStorage
   - Se generan las visualizaciones
   - Se muestran en el modal con formato claro

3. **Al cerrar la sesión**
   - Los datos permanecen en localStorage para análisis posterior
   - sessionStorage se limpian automáticamente

## Mejoras Futuras

- [ ] Gráficos visuales de tendencias (Chart.js)
- [ ] Comparación entre sesiones
- [ ] Objetivos y metas por tema
- [ ] Análisis temporal detallado
- [ ] Exportación a CSV
- [ ] Importación de datos desde archivo

---

**Nota**: El sistema está diseñado para registrar datos sin afectar el rendimiento. Los cálculos se realizan bajo demanda cuando se abre el modal de estadísticas.
