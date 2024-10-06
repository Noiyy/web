<template>
    <div class="projects-view d-flex flex-column flex-1">
        <ProjectsContent></ProjectsContent>
    </div>
</template>

<script>
import ProjectsContent from '../../components/projects/ProjectsContent.vue';

export default {
    name: 'ProjectsView',

    components: {
        ProjectsContent
    },
}
</script>

<style scoped>

</style>