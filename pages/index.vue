<template>
	<article class="homepage">
		<h1 class="heading">{{ title }}</h1>

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
				title: "Poort80 Frondend Hack morning!!",
				rules: [
					"Thou shall not hide content!",
					"Thou shall make it accessible",
					"Thou shall do a better layout job than Bootstrap"
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