<template>
  <section class="homepage">
        <h1>Homepage</h1>
    </section>
</template>

<script>
  export default {
    name: "Homepage",
    head: {
      title: "Homepage"
    },
    components: {

    }
  }
</script>

<style lang="scss">
  .homepage {
    background-color: green;

    @include respond-to-min('tablet') {
      background-color: orange;
    }
  }
</style>
