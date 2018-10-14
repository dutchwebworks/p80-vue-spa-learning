<template>
    <header class="header">
        <nav class="header__nav">
            <ul role="navigation">
                <li><nuxt-link to="/">Homepage</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/news">News</nuxt-link></li>
            </ul>
        </nav>
        <hr>
    </header>
</template>

<script>
    export default {
        name: "TheHeader",
        components: {
            
        },
        data() {
            return {

            }
        },
        methods: {

        }
    };
</script>

<style lang="scss">
    .header {
        padding: 10px 0px;
    }

    .header__nav {
        font-family: $font-custom;
        
        ul {
            @include flexbox;
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
            margin: 0 20px 0 0;
            padding: 0;
        }

        a {
            font-size: 16px;
            color: map-get($colors, 01);
            text-decoration: none;
            font-weight: 700;
            

            &:hover,
            &.is-active {
                color: map-get($colors, 02);
            }
        }
    }
</style>