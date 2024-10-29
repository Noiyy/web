<template>
    <div class="404-view d-flex flex-column flex-1">
        <Header></Header>
    
        <section id="404" class="d-flex flex-1 justify-content-center">
            <div class="content d-flex flex-column justify-content-center align-items-center">
                <h1> {{ $t('Err404') }} </h1>
                <BackBtn></BackBtn>
            </div>
        </section>
    
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BackBtn from '../components/BackBtn.vue';

export default {
    head() {
        return {
            title: `404 × Noiyy`,
            meta: [
                { name: "robots", content: "noindex, nofollow" },
            ]
        }
    },

    name: '404',

    components: {
        Header,
        Footer,
        BackBtn
    },

    data() {
        return {

        }
    },

    methods: {

    },
    
    computed: {

    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
.container {
    height: 100%;
}
</style>