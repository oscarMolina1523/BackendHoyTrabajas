<h1 align="left">📦 Backend que simula un carrito de compras</h1>

###

<div align="center">
  <img height="300" src="https://i.ibb.co/mVcZdtVk/swagger.png"  />
</div>

###

<p align="left">Esta es una API RESTful desarrollada con Node.js, Express y TypeScript. Gestiona un catálogo estático de productos y permite simular un carrito de compras, con almacenamiento en memoria y documentación integrada con Swagger.<br><br>Link de la API: https://backendhoytrabajas.vercel.app/</p>

###

<h2 align="left">⚙️ ¿Por qué Node.js + Express + TypeScript?</h2>

###

<p align="left">1. Node.js es ideal para construir APIs rápidas, ligeras y eficientes, aprovechando su modelo asincrónico y basado en eventos.<br><br>2. Express es un framework minimalista que simplifica la creación de rutas y middleware.<br><br>3. TypeScript proporciona tipado estático, facilitando el mantenimiento, la escalabilidad y la detección temprana de errores.</p>

###

<h2 align="left">💡 Descripción de la solución</h2>

###

<p align="left">La API cuenta con los siguientes endpoints:<br><br>GET /api/products → Lista fija de productos.<br><br>POST /api/cart → Agrega un producto al carrito (en memoria).<br><br>GET /api/cart → Devuelve el contenido del carrito actual.<br><br>GET /api-docs → Documentación interactiva con Swagger.<br><br>El carrito se mantiene en memoria, lo que simplifica la lógica y permite ejecutar sin base de datos.</p>

###

<h2 align="left">🚀 Características</h2>

###

<p align="left">1. API REST con Express<br>2. TypeScript para tipado estático<br>3. Documentación con Swagger UI<br>4. Arquitectura modular con rutas separadas<br>5. Listo para producción en Vercel</p>

###

<h2 align="left">📁 Estructura de Carpetas</h2>

###

<p align="left">backendprueba/<br>├── src/<br>│   ├── app.ts                 # App principal Express<br>│   ├── routes/                # Rutas de la API<br>│   ├── controllers/           # Lógica de control de endpoints<br>│   ├── models/                # Interfaces y modelos de datos<br>│   ├── data/                  # Datos simulados / conexiones a BD<br>│   └── docs/<br>│       └── swagger.ts         # Configuración de Swagger<br>├── dist/                      # Archivos transpilados por TypeScript<br>├── vercel.json               # Configuración de despliegue para Vercel<br>├── tsconfig.json             # Configuración de TypeScript<br>├── package.json              # Scripts y dependencias del proyecto<br>└── README.md                 # Documentación del proyecto</p>

###

<h2 align="left">🛠️ Instalación Local</h2>

###
```bash
# Clonar el repositorio
git clone https://github.com/oscarMolina1523/BackendHoyTrabajas.git

# navegar a la carpeta
cd BackendHoyTrabajas

# Instalar dependencias
npm install

# Correr el proyecto
npm run dev

```
<h2 align="left">🔧 Scripts</h2>

###
```bash
#Comando---->Descripción
npm run dev #Inicia el servidor en modo desarrollo (ts-node-dev)

npm run build #Compila los archivos TypeScript a JavaScript

npm start #Ejecuta el servidor desde dist/app.js


```

<h2 align="left">📚 Documentación Swagger</h2>

###

<p align="left">Una vez levantado el servidor:<br><br>Local: http://localhost:3000/api-docs<br><br>La documentación se genera automáticamente desde el archivo src/docs/swagger.ts.</p>

###

<h2 align="left">📦 Requisitos</h2>

###

<p align="left">1. Node.js >= 18<br><br>2. VSCode</p>

###

<h2 align="left">🧑‍💻 Autor</h2>

###

<p align="left">Oscar Molina<br><br>💼 Desarrollador Web<br><br>GitHub: @oscarMolina1523<br><br>linkedin: https://www.linkedin.com/in/oscar-molina-916195309</p>

###
