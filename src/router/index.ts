import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/otp',
    component: () => import('@/views/Otp.vue')
  },
  {
    path: '/guest',
    component: () => import('@/views/Guest.vue')
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/guestp',
    component: () => import('@/views/GuestProfile.vue')
  },
  {
    path: '/reminder',
    component: () => import('@/views/Reminder.vue')
  },
  {
    path: '/clinic',
    component: () => import('@/views/Clinic.vue')
  },
  {
    path: '/paymentmethods',
    component: () => import('@/views/PaymentMethods.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile.vue')
  },
  {
    path: '/family',
    component: () => import('@/views/Family.vue')
  },
  {
    path: '/appointment',
    component: () => import('@/views/Appointment.vue')
  },
  {
    path: '/upcoming',
    component: () => import('@/views/Upcoming.vue')
  },
  {
    path: '/mediremind',
    component: () => import('@/views/MedicineRemind.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
