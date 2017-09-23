import VueRouter from 'vue-router'
import MainPage from '@/components/MainPage.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/auth/callback',
      component: {
        template: '<div class="auth-component"></div>'
      }
    }
  ]
})

export default router
