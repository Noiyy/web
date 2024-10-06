<template>
    <div class="project-detail-main d-flex flex-column flex-1"> 
        <Header></Header>

        <section id="project-detail">
            <div class="content web" v-if="projectType == 'web'">
                <div class="container">
                    <div class="project-title pos-relative text-center">
                        <h1> {{ projectData.name }} </h1>
                        <BackBtn class="back"></BackBtn>
                    </div>

                    <div class="project-thumbnail">
                        <div class="left-col d-flex">
                            <img :src="projectData.thumbnail" class="img-fluid" alt="">
                        </div>
                        <div class="right-col d-flex flex-column">
                            <img :src="projectData.images[0]" class="img-fluid" alt="">
                            <img :src="projectData.images[1]" class="img-fluid" alt="">
                        </div>
                    </div>

                    <div class="project-info">
                        <h2> Project info </h2>
                        <p> aaa </p>
                    </div>
                </div>
            </div>

            <div class="content game" v-else-if="projectType == 'game'">
                <div class="container">

                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import BackBtn from '../BackBtn.vue';

import { Icon } from '@iconify/vue';

export default {
    name: 'ProjectDetailContent',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Header,
        Footer,
        BackBtn,
        Icon
    },

    data() {
        return {
            projectData: null,
            projectType: null
        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),

        getProjectDetail() {
            const projId = this.$route.params.projectId;
            const projects = this.getProjects;
            this.projectData = projects.find(proj => proj.id == projId);
            this.projectType = this.projectData.category;
        },
    },
    
    computed: {
        ...mapGetters(
            {
                getProjects: "project/getProjects"
            }
        ),
    },

    created() {
        this.getProjectDetail();
    },

    mounted() {

    }
}
</script>

<style scoped>
.project-title {
    margin-top: 88px;
}

.project-title h1 {
    opacity: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Archivo Black", sans-serif;
    line-height: 100%;
    letter-spacing: -6.4px;
    text-transform: uppercase
}

.back {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.project-thumbnail {
    margin-top: 16px;
}

.project-info {
    margin-top: 128px;
}
</style>