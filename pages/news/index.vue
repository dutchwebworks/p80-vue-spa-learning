<template>
	<section class="news">
		<h1 class="heading">News</h1>

		<section class="news__items">
			<article
				class="news__item" 
				v-for="newsItem in newsItems"
				v-bind:key="newsItem.id">

                <nuxt-link
                    v-bind:to="'/news/' + newsItem.id + '/' + $options.filters.slugify(newsItem.title)">
                    <img
                        class="news__item-thumbnail"
                        v-bind:src="newsItem.thumbnail"
                        v-bind:alt="newsItem.title">
                </nuxt-link>				

				<h3 class="news__item-title">
                    <nuxt-link
                        v-bind:to="'/news/' + newsItem.id + '/' + $options.filters.slugify(newsItem.title)">
                        {{ newsItem.title }}
                    </nuxt-link>
                </h3>

				<p class="news__item-date"><small>{{ newsItem.date }}</small></p>

				<p class="news__item-description">{{ newsItem.description }}</p>
			</article>
		</section>
	</section>
</template>

<script>
    export default {
        name: "News",
        components: {
            
        },
        data() {
            return {
                newsItems: [
                    {
                        id: 0,
                        title: "Zeldzame tropische storm Leslie richt ravage aan in Portugal",
                        description: "Orkaan Leslie is in de nacht van zaterdag op zondag als een tropische storm aan land gekomen in Portugal. Leslie richtte een ravage aan langs de noordkust van Portugal ",
                        thumbnail: "https://media.nu.nl/m/hjsxbmvaevzn_wd640.jpg/zeldzame-tropische-storm-leslie-richt-ravage-in-portugal-.jpg",
                        date: "14 oktober 2018",
                    },
                    {
                        id: 1,
                        title: "Brimstone wint Spaanse filmprijs",
                        description: "De film Brimstone van Martin Koolhoven heeft zaterdagavond de grote prijs van het Almería Western Filmfestival in Spanje gewonnen. ",
                        thumbnail: "https://media.nu.nl/m/fjpxu1lazes2_wd640.jpg/brimstone-wint-spaanse-filmprijs.jpg",
                        date: "6 oktober 2018",
                    },
                    {
                        id: 2,
                        title: "Zevenduizend bomen verwisseld langs A6",
                        description: "Rijkswaterstaat begint maandag met de vervanging van zevenduizend oude populieren langs de A6 bij Lelystad. De bomen worden de komende maanden verwijderd om volgend jaar plaats te maken voor nieuwe aanplant.",
                        thumbnail: "https://media.nu.nl/m/xb1xph5a4qfc_wd640.jpg/zevenduizend-bomen-verwisseld-langs-a6.jpg",
                        date: "18 april 2018",
                    },
                    {
                        id: 3,
                        title: "Steekpartij op camping in Arnhem, verdachte aangehouden",
                        description: "Op een vakantiepark in Arnhem-Noord is in de nacht van zaterdag op zondag een man neergestoken. Vanwege onrust op het park droeg de politie kogelwerende vesten en konden hulpdiensten eerst niet het terrein op.",
                        thumbnail: "https://media.nu.nl/m/7x5xcyrabdgg_wd640.jpg/steekpartij-camping-in-arnhem-verdachte-aangehouden.jpg",
                        date: "2 januari 2017",
                    },
                    {
                        id: 4,
                        title: "Rutte wil dat Nederlandse CEO's zich meer laten zien in de media",
                        description: "Premier Mark Rutte zou willen dat de topmensen van Nederlandse multinationals zich vaker laten zien in de media. Dat moet de moeizame relatie die er op het moment is tussen het bedrijfsleven en de samenleving herstellen.",
                        thumbnail: "https://media.nu.nl/m/3ujxzyxatwmf_wd640.jpg/rutte-wil-nederlandse-ceos-zich-meer-laten-zien-in-media.jpg",
                        date: "12 oktober 2018",
                    }
                ]
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