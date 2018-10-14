<template>
    <footer class="footer">
        <hr>

        <p>&copy; Poort80.nl</p>
    </footer>
</template>

<script>
    export default {
        name: "TheFooter"
    };
</script>

<style lang="scss">
    .footer {
        font-family: $font-custom;
        
        hr {
            margin: 0;
        }

        p {
            margin: 10px 0 0 0;
            color: #aaa;
        }
    }
</style>