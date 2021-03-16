<template>
    <div class="morty-card">
        <img :src="char.image" :alt="char.image">
        <section>
        <h2>{{char.name}}</h2>
        <p>{{char.species}}</p>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        char: Object,
    }
}
</script>

<style lang="scss">
.morty-card {
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 1rem;
    max-width: 50rem;
    box-shadow: 1px 2px hsl(0, 0%, 70%);
    img {
        max-width: 400px;
    }
    section {
        padding: 2rem;
    }
}
</style>