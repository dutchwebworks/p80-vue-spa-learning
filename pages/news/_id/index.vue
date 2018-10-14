<template>
    <section class="news-detail">
        <h1 class="heading">News detail</h1>

        <p>ID is {{ $route.params.id }}</p>
    </section>
</template>

<script>
    export default {
        name: "NewsDetail",
        components: {
            
        },
        data() {
            return {

            }
        },
        methods: {

        }
    };
</script>

<style>
    .news-detail {

    }
</style>