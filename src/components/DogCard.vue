<template>
    <div class="dog-card">
        <img :src="dog.imageURL" :alt="dog.imageURL">
        <section>
        <h2>{{dog.name}}</h2>
        <p>{{dog.description}}</p>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        dog: Object,
    }
}
</script>

<style lang="scss">
.dog-card {
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