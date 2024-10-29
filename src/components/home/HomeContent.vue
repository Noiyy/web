<template>
    <div class="hero-viewport d-flex flex-column">
        <Header></Header>
        <Hero></Hero>
    </div>

    <ProjectsShowcase></ProjectsShowcase>
    <About></About>
    <Contact></Contact>

    <Footer></Footer>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import Hero from './Hero.vue';
import ProjectsShowcase from './ProjectsShowcase.vue';
import About from './About.vue';
import Contact from './Contact.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'HomeContent',
 
    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Header,
        Hero,
        Footer,
        ProjectsShowcase,
        About,
        Contact
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
.hero-viewport {
    min-height: 100svh;
}
</style>