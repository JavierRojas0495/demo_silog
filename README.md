# Silogtran - Sistema de Logística de Transporte de Mercancías

Un sistema de demostración desarrollado con Vue 3 y Bootstrap 5 para la gestión de logística de transporte de mercancías.

## 🚀 Características

- **Autenticación segura** con localStorage
- **Dashboard interactivo** con estadísticas en tiempo real
- **Diseño responsivo** con Bootstrap 5
- **Interfaz moderna** con animaciones y efectos visuales
- **Navegación protegida** con guards de rutas

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Imágenes, íconos y logos
├── components/      # Componentes reutilizables
├── views/           # Páginas principales
│   ├── Login.vue
│   └── Dashboard.vue
├── layouts/         # Componentes de layout
│   ├── Navbar.vue
│   └── Sidebar.vue
├── utils/           # Utilidades
│   └── auth.js      # Funciones de autenticación
├── App.vue
├── main.js
└── router.js
```

## 🔐 Usuarios de Prueba

| Usuario    | Contraseña | Rol         |
|------------|------------|-------------|
| admin      | admin123   | Administrador |
| operador   | oper123    | Operador    |
| supervisor | sup123     | Supervisor  |

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd SilogtranNew
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Comandos disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🎨 Tecnologías Utilizadas

- **Vue 3** - Framework JavaScript progresivo
- **Vue Router 4** - Enrutamiento oficial de Vue
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **Font Awesome** - Iconografía
- **Vite** - Herramienta de construcción rápida

## 📱 Funcionalidades

### Módulo de Login
- Diseño moderno y atractivo
- Validación de formularios
- Autenticación con localStorage
- Mensajes de error informativos
- Usuarios de demostración predefinidos

### Módulo Dashboard
- Mensaje de bienvenida personalizado
- Estadísticas de envíos y entregas
- Panel de notificaciones
- Navegación con sidebar
- Información del sistema

### Sistema de Autenticación
- Login seguro con validación
- Protección de rutas
- Gestión de sesiones
- Logout automático

## 🔧 Configuración

### Variables de Entorno

El proyecto está configurado para funcionar sin variables de entorno adicionales. Los usuarios de demostración están definidos en `src/utils/auth.js`.

### Personalización

Para personalizar el sistema:

1. **Colores**: Modifica las variables CSS en `src/App.vue`
2. **Usuarios**: Edita el array `USUARIOS_DEMO` en `src/utils/auth.js`
3. **Rutas**: Añade nuevas rutas en `src/router.js`
4. **Componentes**: Crea nuevos componentes en `src/components/`

## 🚀 Despliegue

### Construcción para producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

### Servidor web

Puedes servir los archivos estáticos con cualquier servidor web:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (http-server)
npx http-server dist

# Con nginx, Apache, etc.
```

## 📄 Licencia

Este proyecto es una demostración educativa. Puedes usarlo como base para tus propios proyectos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Para soporte o preguntas sobre este proyecto, puedes:

- Crear un issue en el repositorio
- Contactar al desarrollador
- Revisar la documentación de Vue 3 y Bootstrap 5

---

**Desarrollado con ❤️ usando Vue 3 y Bootstrap 5**

