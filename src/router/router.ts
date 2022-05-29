import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Landing from '../views/Landing.vue'
import BusinessImpact from "@/views/BusinessImpact.vue";
import Decision from "@/views/Decision.vue";
import MeetingGuide from "@/views/MeetingGuide.vue";
import AgainstASAP from "@/views/AgainstASAP.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Landing
  },
  {
    path: '/business-impact',
    component: BusinessImpact
  },
  {
    path: '/decision/:settings?',
    component: Decision
  },
  {
    path: '/meeting-guide',
    component: MeetingGuide
  },
  {
    path: '/against-asap',
    component: AgainstASAP
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
