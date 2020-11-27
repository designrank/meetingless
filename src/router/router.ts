import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from '../views/Landing.vue'
import BusinessImpact from "@/views/BusinessImpact.vue";
import Decision from "@/views/Decision.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/business-impact',
    component: BusinessImpact
  },{
    path: '/decision/:params?',
    component: Decision
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router