<template>
  <section class="wrapper">
    <TheHeader></TheHeader>
    <nuxt/>
    <TheFooter></TheFooter>
  </section>
</template>

<script>
import TheHeader from "~/components/TheHeader";
import TheFooter from "~/components/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  body {
    margin: 0; 
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  .wrapper {
    max-width: 800px;
    margin: 0 auto;
  }
</style>
