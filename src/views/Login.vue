<template>
  <div class="login-container">
    <!-- Background con animación de camiones -->
    <div class="background-animation">
      <div class="truck truck-1">🚛</div>
      <div class="truck truck-2">🚚</div>
      <div class="truck truck-3">🚛</div>
    </div>
    
    <div class="login-wrapper">
      <div class="login-card">
        <!-- Header con logo y branding -->
        <div class="login-header">
          <div class="logo-container">
            <div class="logo-icon">📦</div>
            <div class="logo-text">
              <h1>Silogtran</h1>
              <span>Logistics Solutions</span>
            </div>
          </div>
          <p class="subtitle">Sistema Integral de Gestión Logística</p>
        </div>
        
        <!-- Formulario de login -->
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <div class="input-container">
              <div class="input-icon">👤</div>
              <input
                type="text"
                id="username"
                v-model="form.username"
                required
                placeholder="Usuario"
                class="form-input"
              />
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-container">
              <div class="input-icon">🔒</div>
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="form.password"
                required
                placeholder="Contraseña"
                class="form-input"
              />
              <button
                type="button"
                @click="togglePassword"
                class="password-toggle"
                :title="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
              >
                {{ showPassword ? '👁️' : '👁️‍🗨️' }}
              </button>
            </div>
          </div>
          
          <button type="submit" :disabled="loading" class="login-btn">
            <span v-if="!loading">Acceder al Sistema</span>
            <span v-else class="loading-spinner">
              <div class="spinner"></div>
              Iniciando sesión...
            </span>
          </button>
          
          <div v-if="error" class="error-message">
            <div class="error-icon">⚠️</div>
            {{ error }}
          </div>
        </form>
        
        <!-- Información de usuarios demo -->
        <div class="demo-section">
          <div class="demo-header">
            <span class="demo-icon">🔑</span>
            <h3>Credenciales de Acceso</h3>
          </div>
          <div class="demo-grid">
            <div v-for="user in demoUsers" :key="user.username" class="demo-card">
              <div class="demo-role">{{ user.nombre }}</div>
              <div class="demo-username">Usuario: {{ user.username }}</div>
              <div class="demo-password">Contraseña: {{ getPassword(user.username) }}</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer con información adicional -->
      <div class="login-footer">
        <p>© 2024 Silogtran - Optimizando la cadena de suministro</p>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getUsuariosDemo } from '../utils/auth.js'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    
    return {
      router
    }
  },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      loading: false,
      error: '',
      demoUsers: [],
      showPassword: false
    }
  },
  mounted() {
    // Cargar usuarios demo para mostrar en la interfaz
    this.demoUsers = getUsuariosDemo()
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword
    },
    getPassword(username) {
      const passwords = {
        'admin': 'admin123',
        'operador': 'oper123',
        'supervisor': 'sup123'
      }
      return passwords[username] || ''
    },
    async handleLogin() {
      this.loading = true
      this.error = ''
      
      try {
        const result = login(this.form.username, this.form.password)
        
        if (result.success) {
          // Redirigir al dashboard después del login exitoso
          this.router.push('/dashboard')
        } else {
          this.error = result.message
        }
      } catch (error) {
        this.error = 'Error al iniciar sesión. Intente nuevamente.'
        console.error('Error en login:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* Animación de fondo con camiones */
.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.truck {
  position: absolute;
  font-size: 2rem;
  opacity: 0.1;
  animation: moveTruck 20s linear infinite;
}

.truck-1 {
  top: 20%;
  animation-delay: 0s;
}

.truck-2 {
  top: 50%;
  animation-delay: -7s;
}

.truck-3 {
  top: 80%;
  animation-delay: -14s;
}

@keyframes moveTruck {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(calc(100vw + 100px));
  }
}

.login-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 450px;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Header con logo */
.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
}

.logo-icon {
  font-size: 3rem;
  background: linear-gradient(135deg, #2a5298, #1e3c72);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(42, 82, 152, 0.3);
}

.logo-text h1 {
  color: #1e3c72;
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -1px;
}

.logo-text span {
  color: #6c757d;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.subtitle {
  color: #6c757d;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
}

/* Formulario */
.login-form {
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 25px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 15px;
  font-size: 1.2rem;
  z-index: 3;
  color: #6c757d;
}

.password-toggle {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #6c757d;
  z-index: 3;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
  color: #2a5298;
}

.form-input {
  width: 100%;
  padding: 15px 50px 15px 50px;
  border: 2px solid #e1e5e9;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.8);
}

.form-input:focus {
  outline: none;
  border-color: #2a5298;
  background: white;
  box-shadow: 0 0 0 3px rgba(42, 82, 152, 0.1);
}

.form-input::placeholder {
  color: #999;
}

/* Botón de login */
.login-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #2a5298, #1e3c72);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(42, 82, 152, 0.4);
}

.login-btn:active {
  transform: translateY(0);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Mensaje de error */
.error-message {
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: white;
  padding: 15px;
  border-radius: 12px;
  margin-top: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
}

.error-icon {
  font-size: 1.2rem;
}

/* Sección de usuarios demo */
.demo-section {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 25px;
}

.demo-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.demo-icon {
  font-size: 1.2rem;
}

.demo-header h3 {
  color: #1e3c72;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.demo-card {
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.demo-role {
  color: #1e3c72;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.demo-username {
  color: #6c757d;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  background: rgba(255, 255, 255, 0.7);
  padding: 3px 8px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 5px;
}

.demo-password {
  color: #6c757d;
  font-size: 0.8rem;
  font-family: 'Courier New', monospace;
  background: rgba(255, 255, 255, 0.7);
  padding: 3px 8px;
  border-radius: 4px;
  display: inline-block;
}

/* Footer */
.login-footer {
  text-align: center;
  margin-top: 30px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.login-footer p {
  margin: 0;
}

/* Responsive */
@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
    margin: 10px;
    border-radius: 15px;
  }
  
  .logo-text h1 {
    font-size: 2rem;
  }
  
  .logo-icon {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
  
  .demo-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 360px) {
  .logo-container {
    flex-direction: column;
    gap: 10px;
  }
  
  .logo-text h1 {
    font-size: 1.8rem;
  }
}
</style>
