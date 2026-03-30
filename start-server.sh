#!/bin/bash

# Script para iniciar servidor local de prueba
# Uso: ./start-server.sh

PORT=8000
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Iniciando servidor PrepApp..."
echo "📂 Directorio: $DIR"
echo "🌐 Puerto: $PORT"
echo ""
echo "Accede a: http://localhost:$PORT"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

cd "$DIR"
python3 -m http.server $PORT
