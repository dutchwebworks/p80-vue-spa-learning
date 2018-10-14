<template>
    <section class="news-detail">
        <img
            class="news-detail-thumbnail"
            v-bind:src="news.thumbnail"
            v-bind:alt="news.title">

        <h1 class="news-detail-title">{{ news.title }}</h1>        

        <p class="news-detail-date"><small>{{ news.date }}</small></p>

        <p class="paragraph">{{ news.description }}</p>
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

        },
        computed: {
            news() {
                return this.$store.getters.newsItem(this.$route.params.id);
            },
        }
    };
</script>

<style lang="scss">
    .news-detail {
        font-family: $font-custom;
    }

    .news-detail-title {
        color: map-get($colors, 02);
    }

    .news-detail-thumbnail {
		box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
    }
    
    .news-detail-date {
		font-size: 18px;
		color: map-get($colors, 01);
	}
</style>