<template>
    <header class="header">
        <nav class="header__nav">
            <ul class="header__nav-list" role="navigation">
                <li class="header_nav-item"><nuxt-link to="/">Homepage</nuxt-link></li>
                <li class="header_nav-item"><nuxt-link to="/about">About</nuxt-link></li>
                <li class="header_nav-item"><nuxt-link to="/news">News</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "TheHeader"
    };
</script>

<style lang="scss">
    .header {
        margin: 0 0 0 0;
        padding: 10px 0px;
        border-bottom: 1px solid map-get($colors, 03);
    }

    .header__nav {
        font-family: $font-custom;        
    }

    .header__nav-list {
        @include flexbox;
        margin: 0;
        padding: 0;
    }

    .header_nav-item {
        list-style: none;
        margin: 0 20px 0 0;
        padding: 0;

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