// Funciones de autenticación usando localStorage

// Usuarios predefinidos para el demo
const USUARIOS_DEMO = [
  { username: 'admin', password: 'admin123', nombre: 'Administrador' },
  { username: 'operador', password: 'oper123', nombre: 'Operador' },
  { username: 'supervisor', password: 'sup123', nombre: 'Supervisor' }
];

/**
 * Función para realizar login
 * @param {string} username - Nombre de usuario
 * @param {string} password - Contraseña
 * @returns {Object} - Objeto con success y mensaje
 */
export function login(username, password) {
  // Buscar usuario en la lista de usuarios demo
  const usuario = USUARIOS_DEMO.find(u => u.username === username && u.password === password);
  
  if (usuario) {
    // Guardar usuario autenticado en localStorage
    const usuarioAutenticado = {
      username: usuario.username,
      nombre: usuario.nombre,
      loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioAutenticado));
    
    return {
      success: true,
      message: 'Login exitoso',
      usuario: usuarioAutenticado
    };
  } else {
    return {
      success: false,
      message: 'Usuario o contraseña incorrectos'
    };
  }
}

/**
 * Función para cerrar sesión
 */
export function logout() {
  localStorage.removeItem('usuarioAutenticado');
}

/**
 * Función para obtener el usuario autenticado
 * @returns {Object|null} - Usuario autenticado o null
 */
export function getUser() {
  const usuarioStr = localStorage.getItem('usuarioAutenticado');
  if (usuarioStr) {
    try {
      return JSON.parse(usuarioStr);
    } catch (error) {
      console.error('Error al parsear usuario:', error);
      return null;
    }
  }
  return null;
}

/**
 * Función para verificar si hay un usuario autenticado
 * @returns {boolean} - true si está autenticado, false si no
 */
export function isAuthenticated() {
  const usuario = getUser();
  return usuario !== null;
}

/**
 * Función para obtener usuarios demo (para propósitos de desarrollo)
 * @returns {Array} - Lista de usuarios demo
 */
export function getUsuariosDemo() {
  return USUARIOS_DEMO.map(u => ({ username: u.username, nombre: u.nombre }));
}

