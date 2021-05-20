import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: [],
    totalMarketCap: 0,
    total24HrVolume: 0,
    totalBTCPercentage: 0,
    totalETHPercentage: 0,
    loading: false
  },
  mutations: {
    UPDATE_COINS(state, payload) {
      const { data } = payload

      const coinsArray = Object.keys(data).map(key => {
        return data[key]
      })

      state.coins = coinsArray.sort((a, b) => a.cmc_rank - b.cmc_rank)
    },
    UPDATE_MARKET_DATA(state, payload) {
      const { data } = payload
      const { quote } = data

      state.totalMarketCap = quote.USD.total_market_cap
      state.total24HrVolume = quote.USD.total_volume_24h
      state.totalBTCPercentage = data.btc_dominance
      state.totalETHPercentage = data.eth_dominance
    },
    SET_LOADING(state, payload) {
      state.loading = payload
    }
  },
  actions: {
    getCoins({ commit }) {
      commit('SET_LOADING', true)
      axios.get('/api/coins').then(res => {
        commit('UPDATE_COINS', res.data)
        commit('SET_LOADING', false)
      })
    },
    getMarketData({ commit }) {
      commit('SET_LOADING', true)
      axios.get('/api/market_data').then(res => {
        commit('UPDATE_MARKET_DATA', res.data)
        commit('SET_LOADING', false)
      })
    }
  },
  getters: {
    coins: state => state.coins,
    totalMarketCap: state => state.totalMarketCap,
    total24HrVolume: state => state.total24HrVolume,
    totalBTCPercentage: state => state.totalBTCPercentage,
    totalETHPercentage: state => state.totalETHPercentage,
    loading: state => state.loading,
    coinDataFromSlug: state => coinSlug => {
      return state.coins.find(coin => coin.slug === coinSlug)
    }
  },
  modules: {}
})
