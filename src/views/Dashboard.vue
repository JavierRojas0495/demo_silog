<template>
  <div class="dashboard-container">
    <!-- Navbar -->
    <Navbar />
    
    <div class="main-content">
      <!-- Sidebar -->
      <Sidebar />
      
      <!-- Contenido principal -->
      <div class="content-area">
        <!-- Fondo decorativo -->
        <div class="dashboard-background"></div>
        
        <div class="container-fluid py-3">
          <!-- Router view para cargar módulos -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, isAuthenticated } from '../utils/auth.js'
import Navbar from '../layouts/Navbar.vue'
import Sidebar from '../layouts/Sidebar.vue'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      usuario: null
    }
  },
  mounted() {
    // Verificar autenticación
    if (!isAuthenticated()) {
      this.$router.push('/login')
      return
    }
    
    // Obtener información del usuario
    this.usuario = getUser()
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
    showSystemInfo() {
      alert('Información del Sistema:\n\n' +
            'Versión: 1.0.0 Demo\n' +
            'Usuario: ' + (this.usuario?.nombre || 'No disponible') + '\n' +
            'Tipo: Sistema de Logística\n' +
            'Estado: Activo\n\n' +
            'Esta es una versión de demostración.')
    }
  }
}
</script>

<style scoped>
/* Contenedor principal */
.dashboard-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  position: relative;
}

.main-content {
  display: flex;
  min-height: calc(100vh - 70px);
  margin-top: 70px; /* Compensar la altura del navbar fijo */
}

.content-area {
  flex: 1;
  margin-left: 280px;
  padding-top: 0;
  position: relative;
}

/* Fondo decorativo */
.dashboard-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 10% 20%, rgba(13, 110, 253, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(102, 16, 242, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(220, 53, 69, 0.03) 0%, transparent 50%);
  pointer-events: none;
  z-index: 0;
}

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
  background: linear-gradient(135deg, #2a5298, #1e3c72);
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
  background: rgba(42, 82, 152, 0.1);
  color: #2a5298;
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
  border: 1px solid rgba(42, 82, 152, 0.1);
  position: relative;
  overflow: hidden;
}

.info-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #2a5298, #1e3c72);
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
  background: linear-gradient(135deg, #2a5298, #1e3c72);
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
  border: 1px solid rgba(42, 82, 152, 0.1);
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

@keyframes infoFloat {
  0%, 100% { transform: translateX(0) translateY(0); }
  33% { transform: translateX(-5px) translateY(-3px); }
  66% { transform: translateX(5px) translateY(3px); }
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    margin-top: 70px; /* Mantener el margen superior en móviles */
  }
  
  .content-area {
    margin-left: 0;
  }
  
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
