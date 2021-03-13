<template>
  <div id="app">
    <div>VIEWS GET THE STATE, PASSES IT DOWN TO COMPONENTS</div>
    <h1>PupFest 2020</h1>
    <ul class="dogs">
      <li v-for="dog in dogs" :key="dog.id">
        <DogCard :dog="dog"/>
      </li>
    </ul>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>
import DogCard from "@/components/DogCard"
  export default {
    components: {
      DogCard,
    },
    computed: {
      dogs() {
        return this.$store.state.dogs
      }
    },
    mounted(){
      this.$store.dispatch("fetchDogs")
    }
  }
</script>

<style lang="scss">
  ul {
    list-style: none;
  }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
