<template>
    <div class="container">
        <page-header></page-header>
        <hr>
        <div class="row">
            <servers></servers>
        </div>
        <hr>
        <page-footer></page-footer>
    </div>
</template>

<script>
import Footer from "./components/shared/Footer.vue";
import Header from "./components/shared/Header.vue";
import Servers from "./components/server/Servers.vue";
export default {
    components: {
        'page-footer': Footer,
        'page-header': Header,
        'servers': Servers,
    }
}
</script>

<style>

</style>
