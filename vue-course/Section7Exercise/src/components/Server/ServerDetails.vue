<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} Server Status: {{ server.status }}</p>
    </div>
</template>

<script>
import { serverBus } from  '../../main'
export default {
    date: function() {
        return {
            server: null
        }
    },
    created() {
        serverBus.$on('serverSelected', (server) => {
            this.server = server;
        })
    }
}
</script>

<style>

</style>
