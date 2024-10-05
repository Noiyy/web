<template>
    <div class="archive-main d-flex flex-column flex-1">
        <Header></Header>

        <section id="archive">
            <h1 class="section-heading text-center"> My web archive </h1>

            <div class="container">
                <div class="content">
                    <router-link to="/projects" class="back">
                        <Icon icon="mdi:chevron-left" class="back-icon" /> back
                    </router-link>

                    <div class="web-versions">

                        <div class="web d-flex">
                            <div class="web-img-wrapper">
                                <img :src="require(`../../assets/img/projects/Noiyy_v1-main.png`)" alt="web version 1 thumbnail" class="img-fluid">
                            </div>
                            <div class="web-content d-flex flex-column">
                                <div class="web-date">
                                    <h2> 08.2021 </h2>
                                </div>
                                <div class="web-info d-flex flex-column flex-1 justify-content-between">
                                    <div class="web-text d-flex flex-column gap-24">
                                        <p>
                                            This was my first personal web, that wasn't just for learning, but actually to show my skills and work I did so far.
                                        </p>
                                        <p>
                                            It was made with Jekyll (SSG) and was also my first real try at Bootstrap. It also contained a blog.
                                        </p>
                                    </div>
                                    <a href="#" class="btn"> <span> View </span> </a>
                                </div>
                            </div>
                        </div>

                        <div class="web d-flex">
                            <div class="web-img-wrapper">
                                <img :src="require(`../../assets/img/projects/Noiyy_v2-main.png`)" alt="web version 2 thumbnail" class="img-fluid">
                            </div>
                            <div class="web-content d-flex flex-column">
                                <div class="web-date">
                                    <h2> 10.2024 </h2>
                                </div>
                                <div class="web-info d-flex flex-column flex-1 justify-content-between">
                                    <div class="web-text d-flex flex-column gap-24">
                                        <p>
                                            Current version of my website. Three years passed & I didn't like the old design anymore haha :P
                                        </p>
                                        <p>
                                            The idea was to make a clean design with focus on colorful gradients that change colors with local time. Developed with Vue, GSAP and Bootstrap.
                                        </p>
                                    </div>
                                    <button class="btn" disabled> <span> View </span> </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="projects-back-btn text-center">
                        <router-link to="/projects" class="btn secondary"> <div>Backt to projects</div> </router-link>
                    </div>
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

import { Icon } from '@iconify/vue';

export default {
    name: 'ArchiveContent',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Header,
        Footer,
        Icon
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
.section-heading {
    margin-top: 128px;
}

.back {
    font-weight: 100;
    font-style: italic;
    color: rgba(255, 255, 255, 0.66);
}

.back-icon {
    font-size: 24px;
    opacity: 0.66;
}

.web-versions {
    margin-top: 64px;
}

.web {
    display: flex;
    height: 60vh;
    text-align: right;
    justify-content: flex-end;
    margin-bottom: 64px;
}
.web:nth-child(even) {
    text-align: left;
    justify-content: flex-start;
}

.web-img-wrapper {
    position: absolute;
    left: -1px;
    width: 60%;
    height: 60svh;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.66);
}
.web:nth-child(even) .web-img-wrapper {
    left: initial;
    right: -1px;
}

.web-img-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.web-content {
    max-width: 28vw;
    gap: 80px;
}

.web-date h2 {
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: 56px;
}

.web-info .btn {
    align-self: flex-end;
}

.web:nth-child(even) .web-info .btn {
    align-self: flex-start;
}

.projects-back-btn {
    margin: 64px 0;
}
</style>