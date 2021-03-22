<template>
  <div id="app">
    <!-- <div>VIEWS GET THE STATE, PASSES IT DOWN TO COMPONENTS</div>
    <form @submit="addBuddy">
      <input name="name" placeholder="Name" />
      <input name="description" placeholder="Description" />
      <input name="imageURL" placeholder="Image URL" />
      <input type="submit" value="Add Buddy" />
    </form> -->
    <div v-for="business in businesses" :key="business.id">
      <SearchFilter :business="business"/>
    </div>
    <ul class="businesses">
      <li v-for="business in businesses" :key="business.id">
        <BusinessCard :business="business"/>
      </li>
    </ul>
  </div>
</template>

<script>
import BusinessCard from "@/components/BusinessCard"
import SearchFilter from "@/components/SearchFilter"

  export default {

    components: {
      BusinessCard, 
      SearchFilter
    },

    computed: {
      businesses() {
        return this.$store.state.businesses
      },
      financials() {
        return this.$store.state.financials
      }
    },

    mounted(){
      this.$store.dispatch("fetchBusinesses")
      this.$store.dispatch("fetchFinancials")
    },

    methods: {
      // addBuddy(event){
      //   event.preventDefault()
      //   const formData = new FormData(event.target)

      //   this.$store.dispatch("addDog", {
      //     name: formData.get("name"),
      //     description: formData.get("description"),
      //     imageURL: formData.get("imageURL")
      //   })

      //   event.target.reset()
      // }
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
</style>
