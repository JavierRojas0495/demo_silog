<template>
  <div class="sidebar">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <h6 class="sidebar-title">
          <i class="fas fa-tachometer-alt me-2"></i>
          Panel Principal
        </h6>
      </div>
      
      <div class="sidebar-section">
        <ul class="nav nav-pills flex-column">
        <li class="nav-item mb-2">
          <router-link 
            to="/dashboard" 
            class="nav-link d-flex align-items-center"
            :class="{ active: $route.name === 'DashboardHome' }"
          >
            <div class="nav-icon">
              <i class="fas fa-home"></i>
            </div>
            <span class="nav-text">Dashboard</span>
            <div class="nav-indicator"></div>
          </router-link>
        </li>
        <li class="nav-item mb-2">
          <div class="nav-link d-flex align-items-center" @click="toggleHistorial">
            <div class="nav-icon">
              <i class="fas fa-history"></i>
            </div>
            <span class="nav-text">Historial</span>
            <div class="nav-badge">{{ historialNavegacion.length }}</div>
            <i class="fas fa-chevron-down ms-auto" :class="{ 'fa-chevron-up': mostrarHistorial }"></i>
          </div>
        </li>
        
        <!-- Historial de navegación expandible -->
        <div v-if="mostrarHistorial && historialNavegacion.length > 0" class="historial-section">
          <div class="historial-header">
            <small class="text-muted">Últimos 5 accesos</small>
          </div>
          <ul class="historial-list">
            <li v-for="(item, index) in historialNavegacion" :key="index" class="historial-item">
              <a 
                href="#" 
                class="historial-link d-flex align-items-center"
                @click.prevent="navegarDesdeHistorial(item)"
              >
                <div class="historial-icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="historial-content">
                  <span class="historial-name">{{ item.name }}</span>
                  <small class="historial-time">{{ formatearTiempo(item.timestamp) }}</small>
                </div>
                <div class="historial-actions">
                  <button 
                    class="btn btn-sm btn-outline-danger"
                    @click.stop="eliminarDelHistorial(index)"
                    title="Eliminar del historial"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </a>
            </li>
          </ul>
        </div>
        
        
        </ul>
      </div>

      <div class="sidebar-divider"></div>

      <div class="sidebar-section">
        <div class="sidebar-section-header">
          <h6 class="sidebar-title">
            <i class="fas fa-shipping-fast me-2"></i>
            Logística
          </h6>
        </div>
        
        <ul class="nav nav-pills flex-column">
            <!-- Manifiesto -->
          <li class="nav-item mb-2">
            <router-link 
              to="/dashboard/manifiesto" 
              class="nav-link d-flex align-items-center"
              :class="{ active: $route.name === 'ManifestoForm' }"
            >
              <div class="nav-icon">
                <i class="fas fa-file-alt"></i>
              </div>
              <span class="nav-text">Manifiesto</span>
              <div class="nav-indicator"></div>
            </router-link>
          </li>

          <li class="nav-item mb-2">
            <router-link 
              to="/dashboard/manifiestos" 
              class="nav-link d-flex align-items-center"
              :class="{ active: $route.name === 'ManifestoList' }"
            >
              <div class="nav-icon">
                <i class="fas fa-list"></i>
              </div>
              <span class="nav-text">Listar Manifiesto</span>
              <div class="nav-indicator"></div>
            </router-link>
          </li>
          <li class="nav-item mb-2">
            <div class="nav-link d-flex align-items-center" @click="showComingSoon('Solicitud de Transporte')">
              <div class="nav-icon">
                <i class="fas fa-truck"></i>
              </div>
              <span class="nav-text">Solicitud de Transporte</span>
              <div class="nav-badge">PRONTO</div>
            </div>
          </li>
        </ul>
      </div>

      <div class="sidebar-divider"></div>

      <div class="sidebar-section">
        <div class="sidebar-section-header">
          <h6 class="sidebar-title">
            <i class="fas fa-users me-2"></i>
            Gestión
          </h6>
        </div>
        
        <ul class="nav nav-pills flex-column">
          <li class="nav-item mb-2">
            <a class="nav-link d-flex align-items-center" href="#" @click="showComingSoon">
              <div class="nav-icon">
                <i class="fas fa-user-tie"></i>
              </div>
              <span class="nav-text">Clientes</span>
              <div class="nav-badge">Pronto</div>
            </a>
          </li>
          <li class="nav-item mb-2">
            <a class="nav-link d-flex align-items-center" href="#" @click="showComingSoon">
              <div class="nav-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <span class="nav-text">Reportes</span>
              <div class="nav-badge">Pronto</div>
            </a>
          </li>
          <li class="nav-item mb-2">
            <a class="nav-link d-flex align-items-center" href="#" @click="showComingSoon">
              <div class="nav-icon">
                <i class="fas fa-cogs"></i>
              </div>
              <span class="nav-text">Configuración</span>
              <div class="nav-badge">Pronto</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      historialNavegacion: [],
      mostrarHistorial: false
    }
  },
  mounted() {
    this.cargarHistorial()
    this.agregarAlHistorial(this.$route)
  },
  watch: {
    $route(to, from) {
      this.agregarAlHistorial(to)
    }
  },
  methods: {
    showComingSoon(funcionalidad) {
      // Agregar al historial antes de mostrar el mensaje
      const iconos = {
        'Listar Manifiesto': 'fas fa-list',
        'Solicitud de Transporte': 'fas fa-truck',
        'Clientes': 'fas fa-user-tie',
        'Reportes': 'fas fa-chart-line',
        'Configuración': 'fas fa-cogs',
        'Usuarios': 'fas fa-users',
        'Auditoría': 'fas fa-history'
      }
      
      this.agregarModuloAlHistorial(funcionalidad, iconos[funcionalidad] || 'fas fa-cog')
      
      alert(`La funcionalidad "${funcionalidad}" estará disponible próximamente en el sistema completo.\n\nSe ha agregado a tu historial de navegación.`)
    },
    cargarHistorial() {
      const historial = localStorage.getItem('historialNavegacion')
      if (historial) {
        this.historialNavegacion = JSON.parse(historial)
      }
    },
    guardarHistorial() {
      localStorage.setItem('historialNavegacion', JSON.stringify(this.historialNavegacion))
    },
    agregarAlHistorial(ruta) {
      const modulo = this.obtenerNombreModulo(ruta)
      if (!modulo) return
      
      // Remover si ya existe
      this.historialNavegacion = this.historialNavegacion.filter(item => item.name !== modulo.name)
      
      // Agregar al inicio
      this.historialNavegacion.unshift(modulo)
      
      // Mantener solo los últimos 5
      this.historialNavegacion = this.historialNavegacion.slice(0, 5)
      
      this.guardarHistorial()
    },
    obtenerNombreModulo(ruta) {
      const modulos = {
        'DashboardHome': { name: 'Dashboard', icon: 'fas fa-home', path: '/dashboard' },
        'ManifestoForm': { name: 'Manifiesto', icon: 'fas fa-file-alt', path: '/dashboard/manifiesto' },
        'ManifestoList': { name: 'Listar Manifiesto', icon: 'fas fa-list', path: '/dashboard/manifiestos' }
      }
      return modulos[ruta.name] || null
    },
    agregarModuloAlHistorial(nombreModulo, icono, path = null) {
      const modulo = {
        name: nombreModulo,
        icon: icono,
        path: path || `#${nombreModulo.toLowerCase().replace(/\s+/g, '-')}`,
        timestamp: new Date().toISOString()
      }
      
      // Remover si ya existe
      this.historialNavegacion = this.historialNavegacion.filter(item => item.name !== modulo.name)
      
      // Agregar al inicio
      this.historialNavegacion.unshift(modulo)
      
      // Mantener solo los últimos 5
      this.historialNavegacion = this.historialNavegacion.slice(0, 5)
      
      this.guardarHistorial()
    },
    toggleHistorial() {
      this.mostrarHistorial = !this.mostrarHistorial
    },
    navegarDesdeHistorial(item) {
      // Si es un módulo funcional, navegar
      if (item.path.startsWith('/')) {
        this.$router.push(item.path)
      } else {
        // Si es un módulo "PRONTO", mostrar mensaje
        alert(`El módulo "${item.name}" estará disponible próximamente.\n\nÚltimo acceso: ${new Date(item.timestamp).toLocaleString('es-ES')}`)
      }
    },
    eliminarDelHistorial(index) {
      this.historialNavegacion.splice(index, 1)
      this.guardarHistorial()
    },
    formatearTiempo(timestamp) {
      const fecha = new Date(timestamp)
      const ahora = new Date()
      const diffMs = ahora - fecha
      const diffMins = Math.floor(diffMs / 60000)
      const diffHours = Math.floor(diffMs / 3600000)
      const diffDays = Math.floor(diffMs / 86400000)
      
      if (diffMins < 1) return 'Ahora'
      if (diffMins < 60) return `Hace ${diffMins}m`
      if (diffHours < 24) return `Hace ${diffHours}h`
      if (diffDays < 7) return `Hace ${diffDays}d`
      
      return fecha.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
/* Sidebar principal */
.sidebar {
  width: 280px;
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100vh - 70px);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    4px 0 20px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 1040;
  overflow-y: auto;
  transition: all 0.3s ease;
}

.sidebar-content {
  padding: 2rem 1.5rem;
  height: 100%;
}

/* Header del sidebar */
.sidebar-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.sidebar-title {
  color: #2c3e50;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
  display: flex;
  align-items: center;
}

.sidebar-title i {
  color: #0d6efd;
  font-size: 1rem;
}

/* Secciones del sidebar */
.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-section-header {
  margin-bottom: 1rem;
}

.sidebar-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
  margin: 1.5rem 0;
}

/* Enlaces de navegación */
.nav-link {
  color: #6c757d;
  border-radius: 12px;
  transition: all 0.3s ease;
  padding: 0.75rem 1rem;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  border: 1px solid transparent;
  background: transparent;
  margin-bottom: 0.5rem;
}

.nav-link:hover {
  background: rgba(13, 110, 253, 0.08);
  color: #0d6efd;
  border-color: rgba(13, 110, 253, 0.2);
  transform: translateX(4px);
}

.nav-link.active {
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  color: white;
  border-color: rgba(13, 110, 253, 0.3);
  box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
}

.nav-link.active .nav-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-link.active .nav-indicator {
  opacity: 1;
  transform: scale(1);
}

/* Iconos de navegación */
.nav-icon {
  width: 40px;
  height: 40px;
  background: rgba(13, 110, 253, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #0d6efd;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.nav-link:hover .nav-icon {
  background: rgba(13, 110, 253, 0.15);
  transform: scale(1.05);
}

/* Texto de navegación */
.nav-text {
  font-weight: 600;
  font-size: 0.9rem;
  flex: 1;
}

/* Indicador activo */
.nav-indicator {
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

/* Badges */
.nav-badge {
  background: linear-gradient(135deg, #ffc107, #fd7e14);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

/* Historial de navegación */
.historial-section {
  margin: 1rem 0;
  padding: 0 1rem;
  border-left: 3px solid rgba(13, 110, 253, 0.2);
  background: rgba(13, 110, 253, 0.02);
  border-radius: 0 8px 8px 0;
}

.historial-header {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 0.5rem;
}

.historial-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.historial-item {
  margin-bottom: 0.25rem;
}

.historial-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  color: #6c757d;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.historial-link:hover {
  background: rgba(13, 110, 253, 0.08);
  color: #0d6efd;
  border-color: rgba(13, 110, 253, 0.2);
  text-decoration: none;
}

.historial-icon {
  width: 32px;
  height: 32px;
  background: rgba(13, 110, 253, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #0d6efd;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.historial-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.historial-name {
  font-weight: 600;
  font-size: 0.85rem;
  color: #495057;
}

.historial-time {
  color: #adb5bd;
  font-size: 0.7rem;
  font-weight: 500;
}

.historial-actions {
  margin-left: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.historial-item:hover .historial-actions {
  opacity: 1;
}

.historial-actions .btn {
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  border-radius: 6px;
}

/* Scrollbar personalizado */
.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(13, 110, 253, 0.2);
  border-radius: 2px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(13, 110, 253, 0.3);
}

/* Animaciones */
@keyframes pulse {
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.8;
    transform: scale(0.95);
  }
}

/* Ajustar el contenido principal para el sidebar fijo */
.main-content {
  margin-left: 280px;
  padding-top: 70px;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    width: 280px;
  }
  
  .sidebar.show {
    transform: translateX(0);
  }
  
  .main-content {
    margin-left: 0;
  }
  
  .sidebar-content {
    padding: 1.5rem 1rem;
  }
  
  .nav-link {
    padding: 0.6rem 0.8rem;
  }
  
  .nav-icon {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .nav-text {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 100%;
    top: 70px;
  }
  
  .sidebar-content {
    padding: 1rem;
  }
  
  .sidebar-section {
    margin-bottom: 1.5rem;
  }
  
  .nav-link {
    padding: 0.5rem 0.7rem;
    gap: 0.8rem;
  }
  
  .nav-icon {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
  
  .nav-text {
    font-size: 0.8rem;
  }
  
  .nav-badge {
    font-size: 0.6rem;
    padding: 0.2rem 0.4rem;
  }
}

/* Estados de hover mejorados */
.nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  border-radius: 0 2px 2px 0;
  opacity: 0;
  transform: scaleY(0);
  transition: all 0.3s ease;
}

.nav-link:hover::before {
  opacity: 1;
  transform: scaleY(1);
}

.nav-link.active::before {
  opacity: 1;
  transform: scaleY(1);
  background: white;
}
</style>
