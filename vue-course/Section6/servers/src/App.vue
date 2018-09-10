<template>
    <div class="container">
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <servers></servers>
        </div>
        <hr>
        <appFooter></appFooter>
    </div>
</template>

<script>
import appFooter from "./components/shared/Footer.vue";
import appHeader from "./components/shared/Header.vue";
import Servers from "./components/server/Servers.vue";
export default {
    components: {
        appFooter,
        appHeader,
        Servers,
    }
}
</script>

<style>

</style>
