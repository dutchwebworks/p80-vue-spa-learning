<template>
	<section class="news">
		<h1 class="heading">News</h1>

		<section class="news__items">
			<article
				class="news__item" 
				v-for="newsItem in newsItems"
				v-bind:key="newsItem.id">

                <nuxt-link
                    v-bind:to="'/news/' + newsItem.id + '/' + newsItem.date + '/' + $options.filters.slugify(newsItem.title)">
                    <img
                        class="news__item-thumbnail"
                        v-bind:src="newsItem.thumbnail"
                        v-bind:alt="newsItem.title">
                </nuxt-link>				

				<h3 class="news__item-title">
                    <nuxt-link
                        v-bind:to="'/news/' + newsItem.id + '/' + newsItem.date + '/' + $options.filters.slugify(newsItem.title)">
                        {{ newsItem.title }}
                    </nuxt-link>
                </h3>

				<p class="news__item-date"><small>{{ newsItem.dateNice }}</small></p>
			</article>
		</section>
	</section>
</template>

<script>
    export default {
        name: "News",
        computed: {
            newsItems() {
                return this.$store.getters.news;
            }
        }
    };
</script>

<style lang="scss">
    .news {
        font-family: $font-custom;
	}
	
	.news__items {
		display: grid;
		grid-gap: 40px;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}

	.news__item-title {
        color: map-get($colors, 02);
        
        a {
            color: inherit;
            text-decoration: none;

            &:hover {
                color: map-get($colors, 01);
            }
        }
	}

	.news__item-thumbnail {
		max-width: 100%;
		box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.25);
	}

	.news__item-description {
		line-height: 1.6;
	}

	.news__item-date {
		font-size: 18px;
		color: map-get($colors, 01);
	}
</style>