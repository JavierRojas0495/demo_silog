<template>
  <div class="manifesto-form-container">
    <!-- Header del formulario -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="form-header">
          <div class="header-background"></div>
          <div class="header-content">
            <div class="header-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <div class="header-text">
              <h2 class="form-title">Registro de Manifiestos</h2>
              <p class="form-subtitle">Sistema de Logística de Transporte de Mercancías</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Formulario -->
    <div class="row mb-5">
      <div class="col-12">
        <div class="form-card">
          <form @submit.prevent="guardarManifiesto" class="manifesto-form">
            <div class="row">
              <!-- Primera columna -->
              <div class="col-md-6">
                <div class="form-group mb-4">
                  <label for="codigo" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-barcode"></i>
                    </div>
                    <span class="label-text">Código</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="codigo"
                      v-model="formulario.codigo"
                      placeholder="Ingrese el código del manifiesto"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="muc" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-id-card"></i>
                    </div>
                    <span class="label-text">MUC</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="muc"
                      v-model="formulario.muc"
                      placeholder="Ingrese el MUC"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="fecha" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-calendar"></i>
                    </div>
                    <span class="label-text">Fecha</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="date"
                      class="form-control modern-input"
                      id="fecha"
                      v-model="formulario.fecha"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="tipoManifiesto" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-list"></i>
                    </div>
                    <span class="label-text">Tipo Manifiesto RNDC</span>
                  </label>
                  <div class="input-wrapper">
                    <select
                      class="form-select modern-input"
                      id="tipoManifiesto"
                      v-model="formulario.tipoManifiesto"
                      required
                    >
                      <option value="">Seleccione un tipo</option>
                      <option value="Carga General">Carga General</option>
                      <option value="Carga Peligrosa">Carga Peligrosa</option>
                      <option value="Carga Refrigerada">Carga Refrigerada</option>
                      <option value="Carga Frágil">Carga Frágil</option>
                      <option value="Carga Sobredimensionada">Carga Sobredimensionada</option>
                      <option value="Carga Especial">Carga Especial</option>
                    </select>
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="viajesPorDia" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-route"></i>
                    </div>
                    <span class="label-text">Viajes por día</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="number"
                      class="form-control modern-input"
                      id="viajesPorDia"
                      v-model.number="formulario.viajesPorDia"
                      placeholder="Número de viajes por día"
                      min="1"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="ruta" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-map-marked-alt"></i>
                    </div>
                    <span class="label-text">Ruta</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="ruta"
                      v-model="formulario.ruta"
                      placeholder="Ingrese la ruta"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>
              </div>

              <!-- Segunda columna -->
              <div class="col-md-6">
                <div class="form-group mb-4">
                  <label for="ciudadOrigen" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <span class="label-text">Ciudad Origen</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="ciudadOrigen"
                      v-model="formulario.ciudadOrigen"
                      placeholder="Ciudad de origen"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="ciudadDestino" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-flag-checkered"></i>
                    </div>
                    <span class="label-text">Ciudad Destino</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="ciudadDestino"
                      v-model="formulario.ciudadDestino"
                      placeholder="Ciudad de destino"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="vehiculo" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-truck"></i>
                    </div>
                    <span class="label-text">Vehículo</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="vehiculo"
                      v-model="formulario.vehiculo"
                      placeholder="Placa o identificación del vehículo"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="claseVehiculo" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-truck-loading"></i>
                    </div>
                    <span class="label-text">Clase Vehículo</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="claseVehiculo"
                      v-model="formulario.claseVehiculo"
                      placeholder="Clase del vehículo"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="conductor" class="form-label">
                    <div class="label-icon">
                      <i class="fas fa-user-tie"></i>
                    </div>
                    <span class="label-text">Conductor</span>
                  </label>
                  <div class="input-wrapper">
                    <input
                      type="text"
                      class="form-control modern-input"
                      id="conductor"
                      v-model="formulario.conductor"
                      placeholder="Nombre del conductor"
                      required
                    >
                    <div class="input-focus-border"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Botón de guardar -->
            <div class="form-actions">
              <button
                type="submit"
                class="btn btn-save"
                :disabled="guardando"
              >
                <div class="btn-content">
                  <div class="btn-icon">
                    <span v-if="guardando" class="spinner-border spinner-border-sm" role="status"></span>
                    <i v-else class="fas fa-save"></i>
                  </div>
                  <span class="btn-text">{{ guardando ? 'Guardando...' : 'Guardar Manifiesto' }}</span>
                </div>
                <div class="btn-shine"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Información adicional -->
    <div class="row">
      <div class="col-12">
        <div class="info-card">
          <div class="info-header">
            <div class="info-icon">
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="info-content">
              <h5>Información del Formulario</h5>
              <p class="mb-0">Complete todos los campos requeridos para registrar un nuevo manifiesto de transporte. Los datos se guardarán automáticamente en el sistema.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManifestoForm',
  data() {
    return {
      formulario: {
        codigo: '',
        muc: '',
        fecha: '',
        tipoManifiesto: '',
        viajesPorDia: null,
        ruta: '',
        ciudadOrigen: '',
        ciudadDestino: '',
        vehiculo: '',
        claseVehiculo: '',
        conductor: ''
      },
      guardando: false
    }
  },
  methods: {
    guardarManifiesto() {
      this.guardando = true
      
      // Simular delay de guardado
      setTimeout(() => {
        // Crear nuevo manifiesto con ID único
        const nuevoManifiesto = {
          id: Date.now(),
          ...this.formulario,
          fechaCreacion: new Date().toISOString()
        }
        
        // Obtener manifiestos existentes
        const manifiestosGuardados = localStorage.getItem('manifiestos')
        let manifiestos = manifiestosGuardados ? JSON.parse(manifiestosGuardados) : []
        
        // Agregar nuevo manifiesto
        manifiestos.push(nuevoManifiesto)
        
        // Guardar en localStorage
        localStorage.setItem('manifiestos', JSON.stringify(manifiestos))
        
        // Limpiar formulario
        this.limpiarFormulario()
        
        // Mostrar mensaje de éxito
        this.mostrarMensaje('Manifiesto guardado exitosamente', 'success')
        
        this.guardando = false
      }, 1000)
    },
    
    limpiarFormulario() {
      this.formulario = {
        codigo: '',
        muc: '',
        fecha: '',
        tipoManifiesto: '',
        viajesPorDia: null,
        ruta: '',
        ciudadOrigen: '',
        ciudadDestino: '',
        vehiculo: '',
        claseVehiculo: '',
        conductor: ''
      }
    },
    
    formatearFecha(fecha) {
      if (!fecha) return '-'
      const fechaObj = new Date(fecha)
      return fechaObj.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
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
.manifesto-form-container {
  padding: 1rem 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Header del formulario */
.form-header {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: headerFloat 20s ease-in-out infinite;
}

.header-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.header-text {
  flex: 1;
}

.form-title {
  color: white;
  font-weight: 800;
  margin-bottom: 0.5rem;
  font-size: 2.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
}

/* Card del formulario */
.form-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.form-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
  border-radius: 20px 20px 0 0;
}

/* Grupos de formulario */
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: #2c3e50;
  font-size: 0.95rem;
}

.label-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.label-text {
  font-weight: 700;
  color: #2c3e50;
}

/* Input wrapper */
.input-wrapper {
  position: relative;
}

.modern-input {
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  font-weight: 500;
}

.modern-input:focus {
  border-color: #667eea;
  background: white;
  box-shadow: 
    0 0 0 0.2rem rgba(102, 126, 234, 0.25),
    0 4px 12px rgba(102, 126, 234, 0.15);
  outline: none;
}

.modern-input::placeholder {
  color: #adb5bd;
  font-weight: 400;
}

.input-focus-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 0 0 12px 12px;
  opacity: 0;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.modern-input:focus + .input-focus-border {
  opacity: 1;
  transform: scaleX(1);
}

/* Botón de guardar */
.form-actions {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.btn-save {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  border: none;
  border-radius: 15px;
  padding: 1rem 3rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 25px rgba(102, 126, 234, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

.btn-save:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 
    0 12px 35px rgba(102, 126, 234, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.2);
}

.btn-save:disabled {
  opacity: 0.7;
  transform: none;
  cursor: not-allowed;
}

.btn-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-text {
  font-weight: 700;
  letter-spacing: 0.5px;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.btn-save:hover:not(:disabled) .btn-shine {
  left: 100%;
}

/* Card de información */
.info-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-left: 4px solid #667eea;
}

.info-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
}

.info-content h5 {
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.2rem;
}

.info-content p {
  margin: 0;
  color: #6c757d;
  line-height: 1.6;
}

/* Animaciones */
@keyframes headerFloat {
  0%, 100% { transform: translateX(0) translateY(0); }
  33% { transform: translateX(-10px) translateY(-5px); }
  66% { transform: translateX(10px) translateY(5px); }
}

/* Responsive */
@media (max-width: 768px) {
  .form-header {
    padding: 1.5rem;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .header-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .form-title {
    font-size: 1.8rem;
  }
  
  .form-card {
    padding: 1.5rem;
  }
  
  .label-icon {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
  
  .modern-input {
    padding: 0.875rem 1rem;
  }
  
  .btn-save {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .form-header {
    padding: 1rem;
    border-radius: 16px;
  }
  
  .form-title {
    font-size: 1.6rem;
  }
  
  .form-subtitle {
    font-size: 1rem;
  }
  
  .form-card {
    padding: 1rem;
    border-radius: 16px;
  }
  
  .form-group {
    margin-bottom: 1.25rem;
  }
  
  .label-icon {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
  
  .modern-input {
    padding: 0.75rem 0.875rem;
    font-size: 0.95rem;
  }
  
  .btn-save {
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>
