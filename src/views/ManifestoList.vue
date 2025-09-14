<template>
  <div class="manifesto-list-container">
    <!-- Header del listado -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="list-header">
          <h2 class="list-title">
            <i class="fas fa-list me-2"></i>
            Listado de Manifiestos
          </h2>
          <p class="list-subtitle">Gestiona todos los manifiestos registrados en el sistema</p>
        </div>
      </div>
    </div>

    <!-- Filtros y acciones -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="filters-card">
          <div class="row align-items-center">
            <div class="col-md-6">
              <div class="search-box">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar por código, ruta, conductor..."
                    v-model="filtroBusqueda"
                    @input="filtrarManifiestos"
                  >
                </div>
              </div>
            </div>
            <div class="col-md-6 text-end">
              <div class="action-buttons">
                <button
                  class="btn btn-outline-primary me-2"
                  @click="exportarDatos"
                  :disabled="manifiestos.length === 0"
                >
                  <i class="fas fa-download me-1"></i>
                  Exportar
                </button>
                <button
                  class="btn btn-outline-danger"
                  @click="limpiarTodos"
                  :disabled="manifiestos.length === 0"
                >
                  <i class="fas fa-trash me-1"></i>
                  Limpiar Todo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tabla de manifiestos -->
    <div class="row">
      <div class="col-12">
        <div class="table-card">
          <div class="table-header">
            <div class="table-info">
              <h3 class="table-title">
                <i class="fas fa-table me-2"></i>
                Manifiestos Registrados
              </h3>
              <span class="badge bg-primary">{{ manifiestosFiltrados.length }} registros</span>
            </div>
            <div class="table-actions">
              <button
                class="btn btn-sm btn-outline-secondary"
                @click="actualizarDatos"
              >
                <i class="fas fa-sync-alt me-1"></i>
                Actualizar
              </button>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Código</th>
                  <th>MUC</th>
                  <th>Fecha</th>
                  <th>Tipo Manifiesto</th>
                  <th>Viajes/Día</th>
                  <th>Ruta</th>
                  <th>Ciudad Origen</th>
                  <th>Ciudad Destino</th>
                  <th>Vehículo</th>
                  <th>Conductor</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="manifiestosFiltrados.length === 0">
                  <td colspan="11" class="text-center text-muted py-5">
                    <div class="empty-state">
                      <i class="fas fa-inbox fa-3x mb-3 text-muted"></i>
                      <h5 class="text-muted">No hay manifiestos registrados</h5>
                      <p class="text-muted mb-0">Los manifiestos que registres aparecerán aquí</p>
                    </div>
                  </td>
                </tr>
                <tr v-else v-for="(manifiesto, index) in manifiestosFiltrados" :key="manifiesto.id">
                  <td>
                    <span class="badge bg-secondary">{{ manifiesto.codigo }}</span>
                  </td>
                  <td>{{ manifiesto.muc }}</td>
                  <td>{{ formatearFecha(manifiesto.fecha) }}</td>
                  <td>
                    <span class="badge bg-info">{{ manifiesto.tipoManifiesto }}</span>
                  </td>
                  <td>
                    <span class="badge bg-warning">{{ manifiesto.viajesPorDia }}</span>
                  </td>
                  <td>{{ manifiesto.ruta }}</td>
                  <td>{{ manifiesto.ciudadOrigen }}</td>
                  <td>{{ manifiesto.ciudadDestino }}</td>
                  <td>{{ manifiesto.vehiculo }}</td>
                  <td>{{ manifiesto.conductor }}</td>
                  <td>
                    <div class="btn-group" role="group">
                      <button
                        class="btn btn-outline-info btn-sm"
                        @click="verDetalle(manifiesto)"
                        title="Ver detalle"
                      >
                        <i class="fas fa-eye"></i>
                      </button>
                      <button
                        class="btn btn-outline-danger btn-sm"
                        @click="eliminarManifiesto(manifiesto.id)"
                        title="Eliminar manifiesto"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManifestoList',
  data() {
    return {
      manifiestos: [],
      manifiestosFiltrados: [],
      filtroBusqueda: ''
    }
  },
  mounted() {
    this.cargarManifiestos()
  },
  methods: {
    cargarManifiestos() {
      const manifiestosGuardados = localStorage.getItem('manifiestos')
      if (manifiestosGuardados) {
        this.manifiestos = JSON.parse(manifiestosGuardados)
        this.manifiestosFiltrados = [...this.manifiestos]
      }
    },
    filtrarManifiestos() {
      if (!this.filtroBusqueda.trim()) {
        this.manifiestosFiltrados = [...this.manifiestos]
        return
      }
      
      const busqueda = this.filtroBusqueda.toLowerCase()
      this.manifiestosFiltrados = this.manifiestos.filter(manifiesto => 
        manifiesto.codigo.toLowerCase().includes(busqueda) ||
        manifiesto.ruta.toLowerCase().includes(busqueda) ||
        manifiesto.conductor.toLowerCase().includes(busqueda) ||
        manifiesto.ciudadOrigen.toLowerCase().includes(busqueda) ||
        manifiesto.ciudadDestino.toLowerCase().includes(busqueda) ||
        manifiesto.vehiculo.toLowerCase().includes(busqueda)
      )
    },
    eliminarManifiesto(id) {
      if (confirm('¿Está seguro de que desea eliminar este manifiesto?')) {
        this.manifiestos = this.manifiestos.filter(m => m.id !== id)
        this.manifiestosFiltrados = this.manifiestosFiltrados.filter(m => m.id !== id)
        localStorage.setItem('manifiestos', JSON.stringify(this.manifiestos))
        this.mostrarMensaje('Manifiesto eliminado exitosamente', 'success')
      }
    },
    limpiarTodos() {
      if (confirm('¿Está seguro de que desea eliminar TODOS los manifiestos? Esta acción no se puede deshacer.')) {
        this.manifiestos = []
        this.manifiestosFiltrados = []
        localStorage.removeItem('manifiestos')
        this.mostrarMensaje('Todos los manifiestos han sido eliminados', 'warning')
      }
    },
    verDetalle(manifiesto) {
      const detalle = `
Detalle del Manifiesto:

Código: ${manifiesto.codigo}
MUC: ${manifiesto.muc}
Fecha: ${this.formatearFecha(manifiesto.fecha)}
Tipo: ${manifiesto.tipoManifiesto}
Viajes por día: ${manifiesto.viajesPorDia}
Ruta: ${manifiesto.ruta}
Ciudad Origen: ${manifiesto.ciudadOrigen}
Ciudad Destino: ${manifiesto.ciudadDestino}
Vehículo: ${manifiesto.vehiculo}
Clase Vehículo: ${manifiesto.claseVehiculo}
Conductor: ${manifiesto.conductor}
Fecha de Creación: ${new Date(manifiesto.fechaCreacion).toLocaleString('es-ES')}
      `
      alert(detalle)
    },
    exportarDatos() {
      if (this.manifiestos.length === 0) {
        alert('No hay datos para exportar')
        return
      }
      
      const csvContent = this.generarCSV()
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement('a')
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', `manifiestos_${new Date().toISOString().split('T')[0]}.csv`)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      this.mostrarMensaje('Datos exportados exitosamente', 'success')
    },
    generarCSV() {
      const headers = ['Código', 'MUC', 'Fecha', 'Tipo', 'Viajes/Día', 'Ruta', 'Origen', 'Destino', 'Vehículo', 'Conductor']
      const rows = this.manifiestos.map(m => [
        m.codigo,
        m.muc,
        this.formatearFecha(m.fecha),
        m.tipoManifiesto,
        m.viajesPorDia,
        m.ruta,
        m.ciudadOrigen,
        m.ciudadDestino,
        m.vehiculo,
        m.conductor
      ])
      
      return [headers, ...rows].map(row => 
        row.map(field => `"${field}"`).join(',')
      ).join('\n')
    },
    actualizarDatos() {
      this.cargarManifiestos()
      this.mostrarMensaje('Datos actualizados', 'info')
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
      const alertDiv = document.createElement('div')
      alertDiv.className = `alert alert-${tipo} alert-dismissible fade show position-fixed`
      alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;'
      alertDiv.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      `
      
      document.body.appendChild(alertDiv)
      
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
.manifesto-list-container {
  padding: 1rem 0;
}

.list-header {
  text-align: center;
  margin-bottom: 2rem;
}

.list-title {
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.list-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
  margin: 0;
}

.filters-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.search-box .input-group-text {
  background: #f8f9fa;
  border-color: #e9ecef;
  color: #6c757d;
}

.search-box .form-control {
  border-color: #e9ecef;
  border-radius: 0 8px 8px 0;
}

.search-box .form-control:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
}

.action-buttons .btn {
  border-radius: 8px;
  font-weight: 600;
}

.table-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.table-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.table-title {
  color: #2c3e50;
  font-weight: 700;
  margin: 0;
  font-size: 1.3rem;
}

.table {
  margin-bottom: 0;
}

.table th {
  background: #f8f9fa;
  border-top: none;
  font-weight: 600;
  color: #495057;
  padding: 1rem 0.75rem;
  font-size: 0.9rem;
}

.table td {
  padding: 0.75rem;
  vertical-align: middle;
  border-top: 1px solid #e9ecef;
}

.table-hover tbody tr:hover {
  background-color: rgba(13, 110, 253, 0.05);
}

.badge {
  font-size: 0.8rem;
  padding: 0.4rem 0.6rem;
}

.btn-group .btn {
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.empty-state {
  padding: 2rem;
}

.empty-state i {
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 768px) {
  .table-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .table-responsive {
    font-size: 0.85rem;
  }
  
  .table th,
  .table td {
    padding: 0.5rem 0.25rem;
  }
  
  .action-buttons {
    text-align: left !important;
    margin-top: 1rem;
  }
}

@media (max-width: 576px) {
  .filters-card {
    padding: 1rem;
  }
  
  .table-card {
    padding: 1rem;
  }
  
  .table-responsive {
    font-size: 0.8rem;
  }
  
  .table th,
  .table td {
    padding: 0.4rem 0.2rem;
  }
}
</style>

