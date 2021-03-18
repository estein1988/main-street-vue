import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    businesses: [],
    financials: []
  },
  mutations: {
    setBusinesses(state, businesses){
      state.businesses = businesses
    },
    setFinancials(state, financials){
      state.financials = financials
    }
    // addDog(state, dog){
    //   state.dogs = [...state.dogs, dog]
    // },
  },
  actions: {
    fetchBusinesses({commit}){
      fetch('http://localhost:3000/businesses')
        .then(response => response.json())
        .then(result => commit("setBusinesses", result))
    },
    fetchFinancials({commit}){
      fetch("http://localhost:3000/financials")
        .then(response => response.json())
        .then(result => commit("setFinancials", result))
    },
    // addDog({commit}, dog){
    //   commit("addDog", dog)
    // }
  },
  modules: {
  }
})
