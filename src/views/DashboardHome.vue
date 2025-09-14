<template>
  <div class="dashboard-home">
    <!-- Header de bienvenida -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="welcome-card">
          <div class="welcome-background"></div>
          <div class="welcome-particles">
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
            <div class="particle particle-4"></div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-8">
              <div class="welcome-content">
                <div class="welcome-badge">
                  <i class="fas fa-user-check me-2"></i>
                  Usuario Autenticado
                </div>
                <h1 class="welcome-title mb-3">
                  ¡Bienvenido, <span class="user-name">{{ usuario?.nombre || 'Usuario' }}</span>!
                </h1>
                <p class="welcome-subtitle mb-3">
                  Sistema de Logística de Transporte de Mercancías
                </p>
                <div class="welcome-info">
                  <div class="info-item">
                    <i class="fas fa-clock me-2"></i>
                    <span>Último acceso: {{ formatDate(usuario?.loginTime) }}</span>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-shield-alt me-2"></i>
                    <span>Sesión segura activa</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-end">
              <div class="welcome-visual">
                <div class="truck-container">
                  <i class="fas fa-truck truck-icon"></i>
                  <div class="truck-trail"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tarjetas de estadísticas -->
    <div class="row mb-4">
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="stat-card stat-primary">
          <div class="stat-icon-container">
            <div class="stat-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <div class="stat-icon-glow"></div>
          </div>
          <div class="stat-content">
            <div class="stat-header">
              <h3 class="stat-number">{{ manifiestosCount }}</h3>
              <div class="stat-trend trend-up">
                <i class="fas fa-arrow-up"></i>
                <span>+15%</span>
              </div>
            </div>
            <p class="stat-label">Manifiestos</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: 75%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="stat-card stat-success">
          <div class="stat-icon-container">
            <div class="stat-icon">
              <i class="fas fa-list"></i>
            </div>
            <div class="stat-icon-glow"></div>
          </div>
          <div class="stat-content">
            <div class="stat-header">
              <h3 class="stat-number">{{ manifiestosCount }}</h3>
              <div class="stat-trend trend-up">
                <i class="fas fa-arrow-up"></i>
                <span>+8%</span>
              </div>
            </div>
            <p class="stat-label">Listar Manifiestos</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: 90%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="stat-card stat-warning">
          <div class="stat-icon-container">
            <div class="stat-icon">
              <i class="fas fa-truck"></i>
            </div>
            <div class="stat-icon-glow"></div>
          </div>
          <div class="stat-content">
            <div class="stat-header">
              <h3 class="stat-number">8</h3>
              <div class="stat-trend trend-up">
                <i class="fas fa-arrow-up"></i>
                <span>+12%</span>
              </div>
            </div>
            <p class="stat-label">Solicitud de Transporte</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: 65%"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-3">
        <div class="stat-card stat-info">
          <div class="stat-icon-container">
            <div class="stat-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="stat-icon-glow"></div>
          </div>
          <div class="stat-content">
            <div class="stat-header">
              <h3 class="stat-number">95%</h3>
              <div class="stat-trend trend-stable">
                <i class="fas fa-minus"></i>
                <span>0%</span>
              </div>
            </div>
            <p class="stat-label">Eficiencia</p>
            <div class="stat-progress">
              <div class="progress-bar" style="width: 95%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de funcionalidades -->
    <div class="row mb-4">
      <div class="col-lg-8 mb-3">
        <div class="feature-card">
          <div class="card-header">
            <div class="card-title">
              <div class="title-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="title-content">
                <h5>Resumen de Actividad</h5>
                <p>Estado actual del sistema de manifiestos</p>
              </div>
            </div>
            <div class="card-actions">
              <button class="btn btn-sm btn-outline-primary" @click="actualizarDatos">
                <i class="fas fa-sync-alt me-1"></i>
                Actualizar
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="activity-summary">
              <div class="activity-item">
                <div class="activity-icon-container">
                  <div class="activity-icon bg-primary">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <div class="activity-pulse"></div>
                </div>
                <div class="activity-content">
                  <h6>Gestión de Manifiestos</h6>
                  <p class="text-muted mb-2">Administra y registra todos los manifiestos de transporte</p>
                  <div class="activity-status">
                    <span class="status-badge status-active">Activo</span>
                    <span class="activity-count">{{ manifiestosCount }} manifiestos</span>
                  </div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon-container">
                  <div class="activity-icon bg-success">
                    <i class="fas fa-list"></i>
                  </div>
                  <div class="activity-pulse"></div>
                </div>
                <div class="activity-content">
                  <h6>Listado de Manifiestos</h6>
                  <p class="text-muted mb-2">Visualiza y gestiona todos los manifiestos registrados</p>
                  <div class="activity-status">
                    <span class="status-badge status-optimized">Disponible</span>
                    <span class="activity-count">{{ manifiestosCount }} registros</span>
                  </div>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon-container">
                  <div class="activity-icon bg-warning">
                    <i class="fas fa-truck"></i>
                  </div>
                  <div class="activity-pulse"></div>
                </div>
                <div class="activity-content">
                  <h6>Solicitudes de Transporte</h6>
                  <p class="text-muted mb-2">Gestiona las solicitudes de transporte de mercancías</p>
                  <div class="activity-status">
                    <span class="status-badge status-monitoring">En desarrollo</span>
                    <span class="activity-count">Próximamente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4 mb-3">
        <div class="feature-card notifications-card">
          <div class="card-header">
            <div class="card-title">
              <div class="title-icon">
                <i class="fas fa-bell"></i>
              </div>
              <div class="title-content">
                <h5>Notificaciones</h5>
                <p>Actividad reciente</p>
              </div>
            </div>
            <div class="notification-badge">3</div>
          </div>
          <div class="card-body">
            <div class="notifications">
              <div class="notification-item">
                <div class="notification-icon-container">
                  <div class="notification-icon bg-info">
                    <i class="fas fa-file-alt"></i>
                  </div>
                  <div class="notification-dot"></div>
                </div>
                <div class="notification-content">
                  <h6>Nuevo manifiesto creado</h6>
                  <p class="text-muted mb-1">Manifiesto #{{ ultimoManifiesto }} registrado exitosamente</p>
                  <small class="notification-time">Hace 5 minutos</small>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon-container">
                  <div class="notification-icon bg-success">
                    <i class="fas fa-check"></i>
                  </div>
                  <div class="notification-dot"></div>
                </div>
                <div class="notification-content">
                  <h6>Manifiesto procesado</h6>
                  <p class="text-muted mb-1">Manifiesto #{{ ultimoManifiesto - 1 }} listo para transporte</p>
                  <small class="notification-time">Hace 15 minutos</small>
                </div>
              </div>
              <div class="notification-item">
                <div class="notification-icon-container">
                  <div class="notification-icon bg-warning">
                    <i class="fas fa-exclamation"></i>
                  </div>
                  <div class="notification-dot"></div>
                </div>
                <div class="notification-content">
                  <h6>Solicitud pendiente</h6>
                  <p class="text-muted mb-1">Nueva solicitud de transporte requiere revisión</p>
                  <small class="notification-time">Hace 30 minutos</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Información del sistema -->
    <div class="row">
      <div class="col-12">
        <div class="info-card">
          <div class="info-background"></div>
          <div class="row align-items-center">
            <div class="col-md-8">
              <div class="info-content">
                <div class="info-header">
                  <div class="info-icon">
                    <i class="fas fa-info-circle"></i>
                  </div>
                  <div class="info-title">
                    <h5>Sistema en Modo Demo</h5>
                    <p>Versión de demostración activa</p>
                  </div>
                </div>
                <p class="info-description">
                  Esta es una versión de demostración del sistema de logística. 
                  Las funcionalidades completas estarán disponibles en la versión de producción.
                </p>
                <div class="info-features">
                  <div class="feature-tag">
                    <i class="fas fa-check me-1"></i>
                    Autenticación
                  </div>
                  <div class="feature-tag">
                    <i class="fas fa-check me-1"></i>
                    Manifiestos
                  </div>
                  <div class="feature-tag">
                    <i class="fas fa-check me-1"></i>
                    Listado
                  </div>
                  <div class="feature-tag">
                    <i class="fas fa-clock me-1"></i>
                    Solicitudes
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 text-end">
              <div class="info-actions">
                <button class="btn btn-primary btn-lg" @click="showSystemInfo">
                  <i class="fas fa-cog me-2"></i>
                  Ver Configuración
                </button>
                <button class="btn btn-outline-secondary btn-lg ms-2">
                  <i class="fas fa-download me-2"></i>
                  Descargar Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from '../utils/auth.js'

export default {
  name: 'DashboardHome',
  data() {
    return {
      usuario: null,
      manifiestosCount: 0,
      ultimoManifiesto: 0
    }
  },
  mounted() {
    // Obtener información del usuario
    this.usuario = getUser()
    // Cargar datos de manifiestos
    this.cargarDatosManifiestos()
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return 'No disponible'
      
      try {
        const date = new Date(dateString)
        return date.toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      } catch (error) {
        return 'Fecha inválida'
      }
    },
    cargarDatosManifiestos() {
      const manifiestosGuardados = localStorage.getItem('manifiestos')
      if (manifiestosGuardados) {
        const manifiestos = JSON.parse(manifiestosGuardados)
        this.manifiestosCount = manifiestos.length
        if (manifiestos.length > 0) {
          this.ultimoManifiesto = manifiestos[manifiestos.length - 1].id || manifiestos.length
        }
      }
    },
    actualizarDatos() {
      this.cargarDatosManifiestos()
      this.mostrarMensaje('Datos actualizados correctamente', 'success')
    },
    showSystemInfo() {
      alert('Información del Sistema:\n\n' +
            'Versión: 1.0.0 Demo\n' +
            'Usuario: ' + (this.usuario?.nombre || 'No disponible') + '\n' +
            'Tipo: Sistema de Logística de Manifiestos\n' +
            'Estado: Activo\n' +
            'Manifiestos: ' + this.manifiestosCount + '\n\n' +
            'Esta es una versión de demostración.')
    },
    mostrarMensaje(mensaje, tipo) {
      // Crear elemento de notificación
      const alertDiv = document.createElement('div')
      alertDiv.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`
      alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;'
      alertDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      `
      
      document.body.appendChild(alertDiv)
      
      // Auto-remover después de 3 segundos
      setTimeout(() => {
        if (alertDiv.parentNode) {
          alertDiv.parentNode.removeChild(alertDiv)
        }
      }, 3000)
    }
  }
}
</script>

<style scoped>
/* Card de bienvenida */
.welcome-card {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  color: white;
  border-radius: 16px;
  padding: 1.5rem 1.5rem;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.welcome-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: welcomeFloat 20s ease-in-out infinite;
}

.welcome-particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: particleFloat 6s ease-in-out infinite;
}

.particle-1 { top: 20%; left: 10%; animation-delay: 0s; }
.particle-2 { top: 60%; right: 15%; animation-delay: 1.5s; }
.particle-3 { bottom: 30%; left: 20%; animation-delay: 3s; }
.particle-4 { top: 40%; right: 30%; animation-delay: 4.5s; }

.welcome-content {
  position: relative;
  z-index: 2;
}

.welcome-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.welcome-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-name {
  background: linear-gradient(45deg, #fff, #f0f8ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
}

.welcome-info {
  display: flex;
  gap: 1.5rem;
  margin-top: 0.8rem;
}

.info-item {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.8;
}

.welcome-visual {
  position: relative;
  z-index: 2;
}

.truck-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.truck-icon {
  font-size: 3.5rem;
  opacity: 0.8;
  animation: truckMove 4s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.truck-trail {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  border-radius: 2px;
  animation: trailMove 4s ease-in-out infinite;
}

/* Tarjetas de estadísticas */
.stat-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: currentColor;
  opacity: 0.8;
  border-radius: 16px 16px 0 0;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 8px 30px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08);
}

.stat-icon-container {
  position: relative;
  margin-bottom: 1rem;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  position: relative;
  z-index: 2;
}

.stat-icon-glow {
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 19px;
  opacity: 0.2;
  filter: blur(8px);
  z-index: 1;
}

.stat-primary { 
  color: #3b82f6; 
}
.stat-primary .stat-icon { 
  background: linear-gradient(135deg, #3b82f6, #1d4ed8); 
}
.stat-primary .stat-icon-glow { 
  background: linear-gradient(135deg, #3b82f6, #1d4ed8); 
}

.stat-success { 
  color: #10b981; 
}
.stat-success .stat-icon { 
  background: linear-gradient(135deg, #10b981, #059669); 
}
.stat-success .stat-icon-glow { 
  background: linear-gradient(135deg, #10b981, #059669); 
}

.stat-warning { 
  color: #f59e0b; 
}
.stat-warning .stat-icon { 
  background: linear-gradient(135deg, #f59e0b, #d97706); 
}
.stat-warning .stat-icon-glow { 
  background: linear-gradient(135deg, #f59e0b, #d97706); 
}

.stat-info { 
  color: #06b6d4; 
}
.stat-info .stat-icon { 
  background: linear-gradient(135deg, #06b6d4, #0891b2); 
}
.stat-info .stat-icon-glow { 
  background: linear-gradient(135deg, #06b6d4, #0891b2); 
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  color: #2c3e50;
  line-height: 1;
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
}

.trend-up {
  background: rgba(25, 135, 84, 0.1);
  color: #198754;
}

.trend-down {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

.trend-stable {
  background: rgba(108, 117, 125, 0.1);
  color: #6c757d;
}

.stat-label {
  margin: 0 0 1rem 0;
  color: #6c757d;
  font-size: 0.95rem;
  font-weight: 500;
}

.stat-progress {
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, currentColor, rgba(255, 255, 255, 0.8));
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Tarjetas de funcionalidades */
.feature-card {
  background: white;
  border-radius: 16px;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  height: 100%;
}

.card-header {
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title-icon {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
}

.title-content h5 {
  margin: 0;
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.2rem;
}

.title-content p {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.card-actions .btn {
  border-radius: 10px;
  font-weight: 600;
}

.card-body {
  padding: 1rem 1.5rem 1.5rem;
}

/* Actividades */
.activity-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-item:hover {
  background: rgba(13, 110, 253, 0.02);
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.activity-icon-container {
  position: relative;
  margin-right: 1.5rem;
}

.activity-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: white;
  position: relative;
  z-index: 2;
}

.activity-pulse {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 17px;
  opacity: 0.3;
  animation: pulse 2s ease-in-out infinite;
}

.activity-content h6 {
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.1rem;
}

.activity-content p {
  margin: 0 0 1rem 0;
  color: #6c757d;
  line-height: 1.5;
}

.activity-status {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status-active {
  background: rgba(25, 135, 84, 0.1);
  color: #198754;
}

.status-optimized {
  background: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.status-monitoring {
  background: rgba(255, 193, 7, 0.1);
  color: #ffc107;
}

.activity-count {
  font-size: 0.85rem;
  color: #6c757d;
  font-weight: 500;
}

/* Notificaciones */
.notifications-card {
  position: relative;
}

.notification-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);
}

.notification-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-item:hover {
  background: rgba(13, 110, 253, 0.02);
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.notification-icon-container {
  position: relative;
  margin-right: 1.5rem;
}

.notification-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
}

.notification-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 12px;
  height: 12px;
  background: #dc3545;
  border-radius: 50%;
  border: 2px solid white;
  animation: pulse 2s ease-in-out infinite;
}

.notification-content h6 {
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  color: #2c3e50;
  font-size: 1rem;
}

.notification-content p {
  margin: 0 0 0.5rem 0;
  color: #6c757d;
  font-size: 0.9rem;
  line-height: 1.4;
}

.notification-time {
  color: #adb5bd;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Card de información */
.info-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(13, 110, 253, 0.1);
  position: relative;
  overflow: hidden;
}

.info-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #0d6efd, #6610f2);
  opacity: 0.3;
}

.info-content {
  position: relative;
  z-index: 2;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
}

.info-title h5 {
  margin: 0;
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.3rem;
}

.info-title p {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.info-description {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.info-features {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.feature-tag {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #495057;
  border: 1px solid rgba(13, 110, 253, 0.1);
}

.info-actions {
  position: relative;
  z-index: 2;
}

.info-actions .btn {
  border-radius: 12px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
}

/* Animaciones */
@keyframes welcomeFloat {
  0%, 100% { transform: translateX(0) translateY(0); }
  33% { transform: translateX(-10px) translateY(-5px); }
  66% { transform: translateX(10px) translateY(5px); }
}

@keyframes particleFloat {
  0%, 100% { 
    transform: translateY(0px) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translateY(-15px) scale(1.2);
    opacity: 1;
  }
}

@keyframes truckMove {
  0%, 100% { transform: translateX(0px) rotate(0deg); }
  50% { transform: translateX(10px) rotate(2deg); }
}

@keyframes trailMove {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleX(1); }
  50% { opacity: 1; transform: translateX(-50%) scaleX(1.2); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

/* Responsive */
@media (max-width: 768px) {
  .welcome-card {
    padding: 1.2rem 1rem;
  }
  
  .welcome-title {
    font-size: 1.8rem;
  }
  
  .truck-icon {
    font-size: 2.8rem;
  }
  
  .welcome-info {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .stat-card {
    margin-bottom: 1rem;
  }
  
  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .info-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .info-actions .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .welcome-card {
    padding: 1rem 0.8rem;
  }
  
  .welcome-title {
    font-size: 1.6rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .feature-card {
    padding: 1rem;
  }
  
  .card-header {
    padding: 1rem 1rem 0.5rem;
  }
  
  .card-body {
    padding: 0.5rem 1rem 1rem;
  }
}
</style>
