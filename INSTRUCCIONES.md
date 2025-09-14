# 🚀 Instrucciones de Instalación y Ejecución

## 📋 Pasos para ejecutar el proyecto

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
El proyecto se ejecutará en: `http://localhost:3000`

## 🔐 Usuarios de prueba

Para acceder al sistema, utiliza cualquiera de estos usuarios:

| Usuario    | Contraseña | Descripción |
|------------|------------|-------------|
| `admin`    | `admin123` | Administrador del sistema |
| `operador` | `oper123`  | Operador de logística |
| `supervisor` | `sup123` | Supervisor de operaciones |

## 🎯 Funcionalidades disponibles

### ✅ Login
- Diseño moderno con gradientes y animaciones
- Validación de formularios en tiempo real
- Mensajes de error informativos
- Autenticación segura con localStorage

### ✅ Dashboard
- Mensaje de bienvenida personalizado
- Estadísticas de envíos y entregas
- Panel de notificaciones
- Navegación con sidebar responsivo
- Información del sistema

### ✅ Navegación
- Rutas protegidas (solo usuarios autenticados)
- Redirección automática al login si no hay sesión
- Sidebar con menú de navegación
- Navbar con información del usuario

## 🛠️ Comandos disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📱 Características técnicas

- **Vue 3** con Composition API
- **Bootstrap 5** para diseño responsivo
- **Vue Router 4** para navegación
- **Font Awesome** para iconografía
- **Vite** como herramienta de construcción
- **localStorage** para persistencia de sesión

## 🎨 Personalización

El proyecto está diseñado para ser fácilmente personalizable:

1. **Colores**: Modifica las variables CSS en `src/App.vue`
2. **Usuarios**: Edita el array en `src/utils/auth.js`
3. **Rutas**: Añade nuevas rutas en `src/router.js`
4. **Componentes**: Crea nuevos en `src/components/`

## 🚨 Solución de problemas

### Error: "Cannot find module"
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install
```

### Puerto ocupado
```bash
# El proyecto usará automáticamente el siguiente puerto disponible
# O puedes especificar un puerto diferente:
npm run dev -- --port 3001
```

### Problemas de autenticación
- Verifica que estés usando los usuarios correctos
- Limpia el localStorage del navegador
- Recarga la página

## 📞 Soporte

Si encuentras algún problema:

1. Verifica que todas las dependencias estén instaladas
2. Asegúrate de usar Node.js versión 16 o superior
3. Revisa la consola del navegador para errores
4. Consulta la documentación de Vue 3 y Bootstrap 5

---

**¡Disfruta explorando el sistema de logística! 🚛📦**

