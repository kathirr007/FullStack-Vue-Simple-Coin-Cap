import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/home/HomePage.vue'
import AboutPage from '@/views/about/AboutPage.vue'
import NotFoundPage from '@/views/not-found/NotFoundPage.vue'
import CoinDetailsPage from '@/views/coin-details/CoinDetailsPage.vue'
import store from '@/store'

Vue.use(VueRouter)

const checkIfCoinExists = (to, from, next) => {
  const slug = to.params.slug
  const coins = store.getters.coins

  if (!coins.length) {
    store.watch(
      state => state.coins,
      () => {
        if (store.getters.coinDataFromSlug(slug)) next()
        else next('/not-found')
      }
    )
  } else {
    if (store.getters.coinDataFromSlug(slug)) next()
    else next('/not-found')
  }
}

const routes = [
  {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/currency/:slug',
    name: 'CoinDetailsPage',
    component: CoinDetailsPage,
    props: true,
    beforeEnter: checkIfCoinExists
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
