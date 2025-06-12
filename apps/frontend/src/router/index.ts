import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookTableView from '@/views/BookTableView.vue'
import CheckIn from '@/views/CheckInView.vue'
import TableQRView from '@/views/TableQRView.vue'
import AboutView from "@/views/AboutView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

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
      component: AboutView,
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
    },
    {
      path: '/qr/:tableId',
      name: 'qr',
      component: TableQRView,
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: PageNotFoundView,
    }
  ],
})

export default router
