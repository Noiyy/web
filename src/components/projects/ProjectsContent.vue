<template>
    <Header></Header>
    a
    <Footer></Footer>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ProjectsContent',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Header,
        Footer
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

</style>