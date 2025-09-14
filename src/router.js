import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from './utils/auth.js'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import DashboardHome from './views/DashboardHome.vue'
import ManifestoForm from './views/ManifestoForm.vue'
import ManifestoList from './views/ManifestoList.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'DashboardHome',
        component: DashboardHome
      },
      {
        path: 'manifiesto',
        name: 'ManifestoForm',
        component: ManifestoForm
      },
      {
        path: 'manifiestos',
        name: 'ManifestoList',
        component: ManifestoList
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const authenticated = isAuthenticated()
  
  // Si la ruta requiere autenticación y el usuario no está autenticado
  if (to.meta.requiresAuth && !authenticated) {
    next('/login')
    return
  }
  
  // Si la ruta es para invitados y el usuario está autenticado
  if (to.meta.requiresGuest && authenticated) {
    next('/dashboard')
    return
  }
  
  next()
})

export default router
