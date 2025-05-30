import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookTableView from '@/views/BookTableView.vue'
import CheckIn from '@/views/CheckIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/bookTable',
      name: 'bookTable',
      component: BookTableView,
    },
    {
      path: '/checkIn/:token',
      name: 'checkIn',
      component: CheckIn,
    }
  ],
})

export default router
