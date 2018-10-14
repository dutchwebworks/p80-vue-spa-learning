<template>
  <div class="wrapper">
    <TheHeader></TheHeader>
    <nuxt/>
    <TheFooter></TheFooter>
  </div>
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
  }

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
