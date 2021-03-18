<template>
    <div class="business-card">
        <!-- <img :src="dog.imageURL" :alt="dog.imageURL"> -->
        <section>
            <p>{{business.email}}</p>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        business: Object,
    }
}
</script>

<style lang="scss">
.business-card {
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