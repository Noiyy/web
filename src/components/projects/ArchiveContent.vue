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
                            <div class="web-content d-flex flex-column pos-relative">
                                <div class="web-date pos-relative">
                                    <h2> 08.2021 </h2>
                                    <img class="circle" :src="require(`../../assets/img/archive-circle.svg`)" aria-hidden="true" />
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
                                    <a href="https://noiyy.eu/v1" target="_blank" class="btn"> <span> View </span> </a>
                                </div>

                                <div class="line-tracker right">
                                    <svg width="452" height="754" viewBox="0 0 452 754" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <linearGradient id="gradient">
                                                <stop offset="0%" stop-color="var(--gradient-primary)" />
                                                <stop offset="100%" stop-color="var(--gradient-secondary)"/>
                                            </linearGradient>
                                        </defs>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M448 664L444 654V746H10L0 750L10 753.5L447.995 753.995L448 754L448.005 753.995L452 754V750V746V654L448 664Z" fill="#D9D9D9"/>
                                        <path d="M444 157L448 167L452 157V586.039L448 596L444 586.039V157Z" fill="white"/>
                                        <path d="M444 0L448 10L452 0V91L448 100L444 91V0Z" fill="white"/>
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div class="web d-flex">
                            <div class="web-img-wrapper">
                                <img :src="require(`../../assets/img/projects/Noiyy_v2-main.png`)" alt="web version 2 thumbnail" class="img-fluid">
                            </div>
                            <div class="web-content d-flex flex-column pos-relative">
                                <div class="web-date pos-relative">
                                    <h2> 10.2024 </h2>
                                    <img class="circle" :src="require(`../../assets/img/archive-circle.svg`)" aria-hidden="true" />
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

                                <div class="line-tracker left">
                                    <svg width="548" height="635" viewBox="0 0 548 635" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 156L4 166L8 156V625L4 635L0 625V156Z" fill="white"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M260 0H8H0V8V90L4 100L8 90V8H260L250 4L260 0Z" fill="white"/>
                                        <path class="mid" d="M548 0H382L372 4L382 8H548L538 4L548 0Z" fill="#D9D9D9"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="projects-back-btn text-center">
                        <router-link to="/projects" class="btn secondary"> <div>Back to projects</div> </router-link>
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
    height: 70vh;
    text-align: right;
    justify-content: flex-end;
    margin-bottom: 128px;
}
.web:nth-child(1) {
    margin-bottom: 256px;
}

.web:nth-child(even) {
    text-align: left;
    justify-content: flex-start;
}

.web-img-wrapper {
    position: absolute;
    left: -1px;
    width: 60%;
    height: 70svh;
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
    padding-right: 48px;
}

.web:nth-child(even) .web-content {
    padding-right: 0;
    padding-left: 48px;
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

.web-date .circle {
    position: absolute;
    right: -48px;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
}

.web:nth-child(even) .web-date .circle {
    right: initial;
    left: -48px;
}

.line-tracker {
    position: absolute;
    top: 0;
    user-select: none;
    z-index: -1;
}

.line-tracker.right {
    right: 12px;
    top: -96px;
}

.line-tracker.left {
    left: 12px;
    top: -93px;
}

.line-tracker path {
    fill: url(#gradient);
}

@media (max-width: 1200px) {
    .line-tracker.left .mid {
        display: none;
    }
}
</style>