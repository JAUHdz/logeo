import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import AreaTrabajo from '../views/AreaTrabajo.vue'
import LoginView from '../views/LoginView.vue'
import RegistroView from '../views/RegistaroView.vue'
import GraficaView from '../views/GraficaView.vue'
import MonitoreoView from '../views/Monitoreo.vue'
import BienvenidaView from '../views/Bienvenida.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/area-trabajo',
    name: 'area-trabajo',
    component: AreaTrabajo
  },
  {
    path: '/login2',
    name: 'login2',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },
  {
    path: '/grafica',
    name: 'grafica',
    component: GraficaView
  },
  {
    path: '/monitoreo',
    name: 'monitoreo',
    component: MonitoreoView
  },
  {
    path: '/bienvenida',
    name: 'bienvenida',
    component: BienvenidaView 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
