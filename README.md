# Mi Clase - Proyecto React

Proyecto base con **React + Vite + Tailwind CSS**.

## Requisitos

- [Node.js](https://nodejs.org) (versión 18 o superior)

## Instalar dependencias

Desde la raíz del proyecto, ejecuta:

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

Luego abre en el navegador:

```
http://localhost:5173
```

## Otros comandos

```bash
npm run build    # Genera la versión de producción en /dist
npm run lint     # Revisa el código con ESLint
```

## Estructura del proyecto

```
src/
├── App.jsx        # Componente principal
├── main.jsx       # Punto de entrada (no tocar)
├── index.css      # Estilos globales (importa Tailwind)
├── pages/         # Componentes de páginas (crear)
└── services/      # Servicios para comunicar con el backend (crear)
```

## Guía: qué usar y dónde

### `src/pages/` — Páginas

Crea la carpeta `pages` dentro de `src`. Aquí van los **componentes que representan una página completa** (una por ruta o pantalla de la app).

Ejemplo — `src/pages/Inicio.jsx`:

```jsx
function Inicio() {
  return <h1 className="text-2xl font-bold">Hola desde Inicio</h1>
}

export default Inicio
```

Luego se importa y usa en `App.jsx` (directamente o con `react-router-dom` si agregas rutas):

```jsx
import Inicio from './pages/Inicio'
```

### `src/services/` — Servicios

Crea la carpeta `services` dentro de `src`. Aquí van las **funciones que se comunican con el backend** (fetch, axios, etc.). Los componentes las llaman para obtener o enviar datos.

Ejemplo — `src/services/usuario.js`:

```js
const API_URL = 'http://localhost:3000/api'

export async function obtenerUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`)
  return res.json()
}
```

Y se usa desde un componente:

```jsx
import { obtenerUsuarios } from '../services/usuario'
```

### Regla simple

| Qué necesitas | Dónde va |
|---|---|
| Una pantalla/página de la app | `src/pages/` |
| Llamadas al backend (API) | `src/services/` |
| Componente principal / rutas | `src/App.jsx` |
| Estilos | Clases de Tailwind + `src/index.css` |
