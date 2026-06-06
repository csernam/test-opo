/**
 * SISTEMA DE ESTADÍSTICAS - PREPARAPP
 * Registra desempeño por tema, sesión y tendencias diarias
 */

class EstadisticasManager {
    constructor(blockId = 'teorico') {
        this.blockId = blockId;
        this.storageKey = `malaga_stats_${this.blockId}`;
        this.sessionKey = `malaga_session_${this.blockId}`;
        this.stats = this.loadStats();
        this.sessionStats = this.loadSessionStats();
    }

    setBlock(blockId) {
        this.blockId = blockId;
        this.storageKey = `malaga_stats_${this.blockId}`;
        this.sessionKey = `malaga_session_${this.blockId}`;
        this.stats = this.loadStats();
        this.sessionStats = this.loadSessionStats();
    }

    /**
     * Cargar estadísticas del localStorage
     */
    loadStats() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : this.initializeStats();
    }

    /**
     * Cargar estadísticas de la sesión actual
     */
    loadSessionStats() {
        const stored = sessionStorage.getItem(this.sessionKey);
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            startTime: new Date().toISOString(),
            respuestas: {}, // { tema: { correctas: 0, incorrectas: 0 } }
            intentos: [] // [{ id: 1, tema: 1, respuesta: 'a', correcta: true, timestamp }]
        };
    }

    /**
     * Inicializar estructura de estadísticas
     */
    initializeStats() {
        return {
            lastUpdated: new Date().toISOString(),
            daily: {}, // { "2026-02-21": { temas: {...} } }
            overall: {
                totalPreguntas: 0,
                totalAcertadas: 0,
                totalFalladas: 0,
                racha: 0,
                rachaMaxima: 0
            },
            byTema: {} // { 1: { correctas: 0, incorrectas: 0, % } }
        };
    }

    /**
     * Registrar una respuesta
     */
    registrarRespuesta(pregunta, respuesta, esCorrecta) {
        const hoy = this.getTodayDate();
        const tema = pregunta.tema;

        // Actualizar sesión
        this.sessionStats.respuestas[tema] = this.sessionStats.respuestas[tema] || {
            correctas: 0,
            incorrectas: 0
        };

        if (esCorrecta) {
            this.sessionStats.respuestas[tema].correctas++;
            this.stats.overall.totalAcertadas++;
            this.stats.overall.racha++;
        } else {
            this.sessionStats.respuestas[tema].incorrectas++;
            this.stats.overall.totalFalladas++;
            this.stats.overall.racha = 0;
        }

        this.stats.overall.totalPreguntas++;
        if (this.stats.overall.racha > this.stats.overall.rachaMaxima) {
            this.stats.overall.rachaMaxima = this.stats.overall.racha;
        }

        // Registrar intento en sesión
        this.sessionStats.intentos.push({
            id: pregunta.id,
            tema: tema,
            respuesta: respuesta,
            correcta: esCorrecta,
            timestamp: new Date().toISOString()
        });

        // Actualizar estadísticas por tema
        if (!this.stats.byTema[tema]) {
            this.stats.byTema[tema] = {
                titulo: pregunta.tema_title,
                correctas: 0,
                incorrectas: 0
            };
        }

        if (esCorrecta) {
            this.stats.byTema[tema].correctas++;
        } else {
            this.stats.byTema[tema].incorrectas++;
        }

        // Actualizar estadísticas diarias
        if (!this.stats.daily[hoy]) {
            this.stats.daily[hoy] = {
                fecha: hoy,
                temas: {},
                total: 0,
                acertadas: 0,
                falladas: 0
            };
        }

        const diaStats = this.stats.daily[hoy];
        if (!diaStats.temas[tema]) {
            diaStats.temas[tema] = {
                titulo: pregunta.tema_title,
                correctas: 0,
                incorrectas: 0
            };
        }

        if (esCorrecta) {
            diaStats.temas[tema].correctas++;
            diaStats.acertadas++;
        } else {
            diaStats.temas[tema].incorrectas++;
            diaStats.falladas++;
        }
        diaStats.total++;

        // Guardar cambios
        this.saveStats();
        this.saveSessionStats();
    }

    /**
     * Guardar estadísticas
     */
    saveStats() {
        this.stats.lastUpdated = new Date().toISOString();
        localStorage.setItem(this.storageKey, JSON.stringify(this.stats));
    }

    /**
     * Guardar estadísticas de sesión
     */
    saveSessionStats() {
        sessionStorage.setItem(this.sessionKey, JSON.stringify(this.sessionStats));
    }

    /**
     * Obtener fecha de hoy en formato YYYY-MM-DD
     */
    getTodayDate() {
        const hoy = new Date();
        return hoy.toISOString().split('T')[0];
    }

    /**
     * Obtener estadísticas de hoy
     */
    getHoyStats() {
        const hoy = this.getTodayDate();
        return this.stats.daily[hoy] || null;
    }

    /**
     * Obtener los últimos N días
     */
    getUltimosDias(n = 7) {
        const dias = [];
        for (let i = n - 1; i >= 0; i--) {
            const fecha = new Date();
            fecha.setDate(fecha.getDate() - i);
            const dateStr = fecha.toISOString().split('T')[0];
            dias.push(this.stats.daily[dateStr] || {
                fecha: dateStr,
                temas: {},
                total: 0,
                acertadas: 0,
                falladas: 0
            });
        }
        return dias;
    }

    /**
     * Obtener temas ordenados por porcentaje de acierto
     */
    getTemasByPerformance() {
        const temas = Object.entries(this.stats.byTema).map(([id, stats]) => {
            const total = stats.correctas + stats.incorrectas;
            const porcentaje = total > 0 ? Math.round((stats.correctas / total) * 100) : 0;
            return {
                id: parseInt(id),
                ...stats,
                total,
                porcentaje
            };
        });

        return temas.sort((a, b) => a.porcentaje - b.porcentaje); // Peores primero
    }

    /**
     * Obtener resumen general
     */
    getResumen() {
        const overall = this.stats.overall;
        const total = overall.totalPreguntas;
        const porcentaje = total > 0 ? Math.round((overall.totalAcertadas / total) * 100) : 0;
        
        return {
            ...overall,
            total,
            porcentaje,
            fechaUltimaActualizacion: this.stats.lastUpdated
        };
    }

    /**
     * Obtener estadísticas de la sesión actual
     */
    getSessionResumen() {
        const respuestas = this.sessionStats.respuestas;
        let totalCorrectas = 0;
        let totalIncorrectas = 0;
        const temaStats = [];

        for (const [tema, stats] of Object.entries(respuestas)) {
            totalCorrectas += stats.correctas;
            totalIncorrectas += stats.incorrectas;
            const total = stats.correctas + stats.incorrectas;
            const porcentaje = total > 0 ? Math.round((stats.correctas / total) * 100) : 0;
            temaStats.push({
                tema: parseInt(tema),
                ...stats,
                total,
                porcentaje
            });
        }

        return {
            totalCorrectas,
            totalIncorrectas,
            total: totalCorrectas + totalIncorrectas,
            porcentaje: totalCorrectas + totalIncorrectas > 0 
                ? Math.round((totalCorrectas / (totalCorrectas + totalIncorrectas)) * 100)
                : 0,
            temas: temaStats,
            duracion: this.calcularDuracion(this.sessionStats.startTime)
        };
    }

    /**
     * Calcular duración en minutos
     */
    calcularDuracion(startTime) {
        const ahora = new Date();
        const inicio = new Date(startTime);
        return Math.floor((ahora - inicio) / (1000 * 60)); // minutos
    }

    /**
     * Limpiar estadísticas
     */
    limpiarTodo() {
        if (confirm('¿Estás seguro de que quieres limpiar TODAS las estadísticas?')) {
            localStorage.removeItem(this.storageKey);
            sessionStorage.removeItem(this.sessionKey);
            this.stats = this.initializeStats();
            this.sessionStats = this.loadSessionStats();
            return true;
        }
        return false;
    }

    /**
     * Exportar estadísticas a JSON
     */
    exportar() {
        const data = {
            exported: new Date().toISOString(),
            stats: this.stats,
            sessionStats: this.sessionStats
        };
        return JSON.stringify(data, null, 2);
    }

    /**
     * Importar estadísticas desde JSON
     */
    importar(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            this.stats = data.stats;
            this.sessionStats = data.sessionStats;
            this.saveStats();
            this.saveSessionStats();
            return true;
        } catch (e) {
            console.error('Error al importar estadísticas:', e);
            return false;
        }
    }
}

// Instancia global
const estadisticas = new EstadisticasManager();
