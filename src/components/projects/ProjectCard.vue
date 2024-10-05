<template>
    <div class="project-card d-flex">
        <!-- {{ projectData.name }} -->
        <img class="img-fluid" :src="projectData.thumbnail" :alt="`${projectData.name} thumbnail`">
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ProjectCard',

    inject: ['emitter'],
    emits: [],

    props: {
        projectData: {
            type: Object,
            default: null
        }
    },

    components: {

    },

    data() {
        return {

        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),
    },
    
    computed: {
        ...mapGetters(
            {

            }
        ),
    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
.project-card {

}

.project-card img {
    object-fit: cover;
}

/* .project-card:nth-child(odd) {
    grid-column: 1 / span 2;
}

.project-card:nth-child(even) {
    grid-column: 2 / span 2;
} */
</style>