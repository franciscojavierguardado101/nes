<template>
    <div class="container-fluid">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from './NavBar'
    import Footer from "./Footer";

    export default {
        name: "App",
        components: {
            Footer,
            'nav-bar': Navigation,
        }
    }
</script>

<style>

</style>
