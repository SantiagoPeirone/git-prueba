# Git Version Checker (simple local front-end)

Pequeña app que expone endpoints locales ejecutando comandos git y un frontend estático que los consulta.

Requisitos
- Node.js (>=12) y npm
- git instalado y el directorio de trabajo debe ser un repositorio git

Instalación y uso

1. Instala dependencias:

   npm install

2. Arranca el servidor (desde la raíz del proyecto):

   node server.js

3. Abre en tu navegador: http://localhost:3000

Notas de seguridad
- Este servidor ejecuta comandos git en la máquina que lo ejecuta. No lo publiques en internet sin añadir autenticación y controles.
- El propósito es uso local para inspeccionar rápidamente estado/log/branches.
