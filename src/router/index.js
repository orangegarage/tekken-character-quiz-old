import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
// import Recommendation from '../views/Recommendation.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded (loaded only when) when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  // recommendation lazy loading bc else it tries to load pictures
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: () => import(/*webpackChunkName: "recommendation" */ '../views/Recommendation.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
