<template>
    <footer class="footer">
        <p>&copy; Poort80.nl Amsterdam, october 2018</p>

        <p><a href="https://github.com/dutchwebworks/p80-vue-spa-learning">View on Github</a></p>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter"
    };
</script>

<style lang="scss">
    .footer {
        @include flexbox;
        @include justify-content(space-between);
        margin-top: 10px;
        padding-top: 10px;
        font-family: $font-custom;
        border-top: 1px solid #bbb;

        p {
            margin: 10px 0 0 0;
            color: #aaa;
        }

        a {
            color: map-get($colors, 02);

            &:hover {
                color: map-get($colors, 01);
            }
        }
    }
</style>