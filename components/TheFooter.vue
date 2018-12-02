<template>
    <footer class="footer">
        <p>&copy; Poort80.nl Amsterdam, october 2018</p>

        <p><a href="https://goo.gl/GhMZTi" target="_blank">Poort80 Vue SPA presentation</a></p>

        <p><a href="https://github.com/dutchwebworks/p80-vue-spa-learning" target="_blank">View on Github</a></p>
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
        font-size: 14px;
        border-top: 1px solid map-get($colors, 03);

        p {
            margin: 10px 0 0 0;
            color: map-get($colors, 03);
        }

        a {
            color: map-get($colors, 03);

            &:hover {
                color: map-get($colors, 02);
            }
        }
    }
</style>