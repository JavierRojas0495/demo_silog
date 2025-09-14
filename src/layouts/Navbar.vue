<template>
  <nav class="navbar navbar-expand-lg navbar-modern">
    <div class="navbar-container">
      <!-- Logo y título -->
      <div class="navbar-brand-section">
        <router-link to="/dashboard" class="navbar-brand">
          <div class="brand-logo">
            <i class="fas fa-truck"></i>
          </div>
          <div class="brand-text">
            <span class="brand-name">Silogtran</span>
            <span class="brand-subtitle">Logística</span>
          </div>
        </router-link>
      </div>

      <!-- Botón para colapsar en móviles -->
      <button 
        class="navbar-toggler" 
        type="button" 
        @click="toggleMobileMenu"
        :class="{ active: mobileMenuOpen }"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Elementos del navbar -->
      <div class="navbar-content" :class="{ show: mobileMenuOpen }">
        <!-- Información del usuario -->
        <div class="user-info">
          <div class="user-avatar">
            <i class="fas fa-user"></i>
          </div>
          <div class="user-details">
            <span class="user-name">{{ usuario?.nombre || 'Usuario' }}</span>
            <span class="user-role">{{ getRole(usuario?.username) }}</span>
          </div>
        </div>
        
        <!-- Menú de usuario -->
        <div class="navbar-actions">
          <div class="action-buttons">
            <button class="action-btn" title="Notificaciones">
              <i class="fas fa-bell"></i>
              <span class="notification-badge">3</span>
            </button>
            <button class="action-btn" title="Configuración">
              <i class="fas fa-cog"></i>
            </button>
          </div>
          
          <div class="user-menu">
            <button 
              class="user-menu-toggle" 
              @click="toggleUserMenu"
              :class="{ active: userMenuOpen }"
            >
              <div class="user-avatar-small">
                <i class="fas fa-user"></i>
              </div>
              <i class="fas fa-chevron-down dropdown-icon"></i>
            </button>
            
            <div class="user-dropdown" :class="{ show: userMenuOpen }">
              <div class="dropdown-header">
                <div class="user-info-small">
                  <div class="user-avatar-dropdown">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="user-details-dropdown">
                    <span class="user-name-dropdown">{{ usuario?.nombre || 'Usuario' }}</span>
                    <span class="user-email-dropdown">{{ usuario?.username }}@silogtran.com</span>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="dropdown-items">
                <a href="#" class="dropdown-item">
                  <i class="fas fa-user me-2"></i>
                  Mi Perfil
                </a>
                <a href="#" class="dropdown-item">
                  <i class="fas fa-cog me-2"></i>
                  Configuración
                </a>
                <a href="#" class="dropdown-item">
                  <i class="fas fa-question-circle me-2"></i>
                  Ayuda
                </a>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item logout-item" @click="logout">
                  <i class="fas fa-sign-out-alt me-2"></i>
                  Cerrar Sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getUser, logout } from '../utils/auth.js'

export default {
  name: 'Navbar',
  data() {
    return {
      usuario: null,
      mobileMenuOpen: false,
      userMenuOpen: false
    }
  },
  mounted() {
    this.usuario = getUser()
    
    // Cerrar menús al hacer click fuera
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    logout() {
      logout()
      this.$router.push('/login')
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    toggleUserMenu() {
      this.userMenuOpen = !this.userMenuOpen
    },
    getRole(username) {
      const roles = {
        'admin': 'Administrador',
        'operador': 'Operador',
        'supervisor': 'Supervisor'
      }
      return roles[username] || 'Usuario'
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.userMenuOpen = false
        this.mobileMenuOpen = false
      }
    }
  }
}
</script>

<style scoped>
/* Navbar principal */
.navbar-modern {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  backdrop-filter: blur(20px);
  border: none;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1050;
  height: 70px;
  padding: 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  position: relative;
}

/* Sección del logo */
.navbar-brand-section {
  display: flex;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.navbar-brand:hover {
  color: white;
  transform: translateY(-1px);
}

.brand-logo {
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.navbar-brand:hover .brand-logo {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.brand-subtitle {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Botón hamburguesa */
.navbar-toggler {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.navbar-toggler:hover {
  background: rgba(255, 255, 255, 0.2);
}

.navbar-toggler.active {
  background: rgba(255, 255, 255, 0.3);
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: white;
  margin: 2px 0;
  transition: all 0.3s ease;
  border-radius: 1px;
}

.navbar-toggler.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar-toggler.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar-toggler.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Contenido del navbar */
.navbar-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Información del usuario */
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.user-info:hover {
  background: rgba(255, 255, 255, 0.15);
}

.user-avatar {
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
}

.user-details {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.user-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
}

.user-role {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Acciones del navbar */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: linear-gradient(135deg, #dc3545, #c82333);
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  border: 2px solid white;
}

/* Menú de usuario */
.user-menu {
  position: relative;
}

.user-menu-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.5rem 1rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-menu-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}

.user-menu-toggle.active {
  background: rgba(255, 255, 255, 0.25);
}

.user-avatar-small {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.dropdown-icon {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.user-menu-toggle.active .dropdown-icon {
  transform: rotate(180deg);
}

/* Dropdown del usuario */
.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 280px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  margin-top: 0.5rem;
}

.user-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.user-info-small {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-avatar-dropdown {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0d6efd, #6610f2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
}

.user-details-dropdown {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.user-name-dropdown {
  font-size: 1rem;
  font-weight: 700;
  color: #2c3e50;
}

.user-email-dropdown {
  font-size: 0.85rem;
  color: #6c757d;
}

.dropdown-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.05);
  margin: 0.5rem 0;
}

.dropdown-items {
  padding: 0.5rem 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #495057;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
}

.dropdown-item:hover {
  background: rgba(13, 110, 253, 0.1);
  color: #0d6efd;
}

.dropdown-item.logout-item:hover {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-toggler {
    display: flex;
  }
  
  .navbar-content {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 0 0 20px 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all 0.3s ease;
  }
  
  .navbar-content.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .user-info {
    background: rgba(13, 110, 253, 0.1);
    border: 1px solid rgba(13, 110, 253, 0.2);
  }
  
  .user-name {
    color: #2c3e50;
  }
  
  .user-role {
    color: #6c757d;
  }
  
  .action-btn {
    background: rgba(13, 110, 253, 0.1);
    border: 1px solid rgba(13, 110, 253, 0.2);
    color: #0d6efd;
  }
  
  .action-btn:hover {
    background: rgba(13, 110, 253, 0.2);
  }
  
  .user-menu-toggle {
    background: rgba(13, 110, 253, 0.1);
    border: 1px solid rgba(13, 110, 253, 0.2);
    color: #2c3e50;
  }
  
  .user-menu-toggle:hover {
    background: rgba(13, 110, 253, 0.2);
  }
  
  .user-dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    margin-top: 1rem;
    box-shadow: none;
    border: 1px solid rgba(13, 110, 253, 0.2);
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 1rem;
  }
  
  .brand-name {
    font-size: 1.2rem;
  }
  
  .brand-subtitle {
    font-size: 0.7rem;
  }
  
  .brand-logo {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
}
</style>
