<template>
    <div class="container">
        <template v-for="{path, name} in routes" :key="path">
            <router-link v-if="path !== '/'" :to="path">
                <button class="routerLinkItem">{{ name }}</button>
            </router-link>
        </template>
    </div>

</template>
<script setup lang="ts">
    import {routes} from '../router/router'
    
</script>
<style scoped>
    .container{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px;
    }
    .routerLinkItem{
        margin: 0px 16px;
    }
</style>