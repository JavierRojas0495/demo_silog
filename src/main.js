import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Crear la aplicación Vue
const app = createApp(App)

// Usar el router
app.use(router)

// Montar la aplicación
app.mount('#app')

// Configuración global de la aplicación
app.config.globalProperties.$appName = 'Silogtran - Sistema de Logística'

// Manejo de errores globales
app.config.errorHandler = (err, vm, info) => {
  console.error('Error global:', err)
  console.error('Info:', info)
}

// Configuración de producción
if (process.env.NODE_ENV === 'production') {
  // Deshabilitar warnings de desarrollo
  app.config.warnHandler = () => {}
}

