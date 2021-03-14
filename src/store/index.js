import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: []
  },
  mutations: {
    setDogs(state, dogs){
      state.dogs = dogs
    },
    addDog(state, dog){
      state.dogs = [...state.dogs, dog]
    }
  },
  actions: {
    fetchDogs({commit}){
      fetch("./dogs.json")
        .then(response => response.json())
        .then(response => commit("setDogs", response.dogs))
    },
    addDog({commit}, dog){
      commit("addDog", dog)
    }
  },
  modules: {
  }
})
