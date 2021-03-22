<template>
    <div>
    <div class="business-card">
        <section>
            <p>{{business.email}}</p>
            <p>{{business.business_name}}</p>
        <!-- <img :src="business.imageURL" :alt="business.imageURL"> -->
        </section>
    </div>
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