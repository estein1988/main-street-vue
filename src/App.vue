<template>
  <div id="app">
    <div>VIEWS GET THE STATE, PASSES IT DOWN TO COMPONENTS</div>
    <h1>PupFest 2020</h1>
    <form @submit="addBuddy">
      <input name="name" placeholder="Name" />
      <input name="description" placeholder="Description" />
      <input name="imageURL" placeholder="Image URL" />
      <input type="submit" value="Add Buddy" />
    </form>
    <ul class="dogs">
      <li v-for="dog in dogs" :key="dog.id">
        <DogCard :dog="dog"/>
      </li>
    </ul>
    <ul class="chars">
      <li v-for="char in chars" :key="char.id">
        <MortyCard :char="char"/>
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
import MortyCard from "@/components/MortyCard"

  export default {
    components: {
      DogCard,
      MortyCard
    },
    computed: {
      dogs() {
        return this.$store.state.dogs
      },
      chars() {
        return this.$store.state.chars
      }
    },
    mounted(){
      this.$store.dispatch("fetchDogs")
      this.$store.dispatch("fetchChars")
    },
    methods: {
      addBuddy(event){
        event.preventDefault()
        const formData = new FormData(event.target)

        this.$store.dispatch("addDog", {
          name: formData.get("name"),
          description: formData.get("description"),
          imageURL: formData.get("imageURL")
        })

        event.target.reset()
      }
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  form {
    width: 200px;
    input {
      width: 100%;
      display: block;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
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
