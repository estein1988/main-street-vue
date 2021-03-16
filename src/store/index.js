import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [],
    chars: []
  },
  mutations: {
    setDogs(state, dogs){
      state.dogs = dogs
    },
    addDog(state, dog){
      state.dogs = [...state.dogs, dog]
    },
    setChars(state, chars){
      state.chars = chars
    }
  },
  actions: {
    fetchDogs({commit}){
      fetch("./dogs.json")
        .then(response => response.json())
        .then(response => commit("setDogs", response.dogs))
    },
    fetchChars({commit}){
      fetch("https://rickandmortyapi.com/api/character/")
        .then(response => response.json())
        .then(response => commit("setChars", response.results))
    },
    addDog({commit}, dog){
      commit("addDog", dog)
    }
  },
  modules: {
  }
})
