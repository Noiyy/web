<template>
    <div class="archive-view">
        <ArchiveContent></ArchiveContent>
    </div>
</template>

<script>
import ArchiveContent from '../../components/projects/ArchiveContent.vue';

export default {
    head() {
        return {
            title: `${this.$t('Archive')} × Noiyy`,
            meta: [
                { name: "robots", content: "noindex, nofollow" },
            ]
        }
    },

    name: 'ArchiveView',

    components: {
        ArchiveContent
    },
}
</script>

<style scoped>

</style>