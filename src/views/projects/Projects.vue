<template>
    <div id="projects">
        <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path">
            </component>
        </router-view>
    </div>  
</template>
<script>

export default {
    name: 'Projects',
}
</script>

<style>

</style>
