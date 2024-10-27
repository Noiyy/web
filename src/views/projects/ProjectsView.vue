<template>
    <div class="projects-view d-flex flex-column flex-1">
        <ProjectsContent></ProjectsContent>
    </div>
</template>

<script>
import ProjectsContent from '../../components/projects/ProjectsContent.vue';

export default {
    head() {
        return {
            title: `${this.$t('Projects')} × Noiyy`,
            meta: [
                { name: "description", content: `${this.$t('ProjectsDescription')}` },
                { name: "image", content: `${this.getAssetUrl("img/projects/Noiyy_v2-main.png")}` },
                { name: "robots", content: "index, follow" },
                
                { property: "og:title", content: `${this.$t('Projects')} × Noiyy` },
                { property: "og:type", content: "website" },
                { property: "og:description", content: `${this.$t('ProjectsDescription')}` },
                { property: "og:image", content: `${this.getAssetUrl("img/projects/Noiyy_v2-main.png")}` },
                
                { name: "twitter:title", content: `${this.$t('Projects')} × Noiyy` },
                { name: "twitter:description", content: `${this.$t('ProjectsDescription')}` },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:image", content: `${this.getAssetUrl("img/projects/Noiyy_v2-main.png")}` }
            ],
        }
    },

    name: 'ProjectsView',

    components: {
        ProjectsContent
    },
}
</script>

<style scoped>

</style>