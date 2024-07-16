import { createRouter, createWebHistory } from 'vue-router'
import ChartView from '../views/ChartView.vue'
import LogView from '../views/LogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chart',
      component: ChartView
    },
    {
      path: '/log',
      name: 'log',
      component: LogView
    }
  ]
})

export default router
