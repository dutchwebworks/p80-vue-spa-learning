<template>
	<article class="homepage">
		<h1 class="heading">Poort80 Frondend Hack morning</h1>

		<p>Welcome to the Poort80 frontend Vue / Nuxt SPA hack morning</p>

		<p>
			<img src="/img/nuxt-logo.png" alt="Nuxt">
		</p>       

		<h2>Frontend rules:</h2>

		<ul>
			<li v-for="rule in rules">{{ rule }}</li>
		</ul>
	</article>
</template>

<script>
	export default {
		name: "Homepage",
		data() {
			return {
				title: "Poort80 Frondend Hack morning",
				rules: [
					"Thau shall not hide content!",
					"Thau shall do a better layout job than Bootstrap",
					"Thau shall make it accessible"
				]
			}	
		}
	};
</script>

<style lang="scss">
	.homepage {
		font-family: $font-custom;
		line-height: 1.6;
	}
</style>