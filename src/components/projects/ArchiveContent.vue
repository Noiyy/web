<template>
    <div class="archive-main d-flex flex-column flex-1">
        <Header></Header>

        <section id="archive">
            <h1 class="section-heading text-center"> My web archive </h1>

            <div class="content">
                <div class="container">
                    <BackBtn></BackBtn>
                </div>

                <div class="web-versions">

                    <div class="web d-flex">
                        <div class="web-img-wrapper">
                            <img :src="require(`../../assets/img/projects/Noiyy_v1-main.png`)" alt="web version 1 thumbnail" class="img-fluid">

                            <div class="line-tracker m-right d-flex flex-column align-items-end" v-if="IS_MOBILE">
                                <Line class="lt-first flex-1" :hide-head="true"></Line>
                            </div>
                        </div>

                        <div class="line-tracker m-mid d-flex justify-content-start align-items-center" v-if="IS_MOBILE">
                            <Line class="lt-first flex-1" from="right" :line-classes="'hide-before'" :hide-head="true"></Line>
                        </div>

                        <div class="container d-flex justify-content-end">
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
    
                                <div class="line-tracker right d-flex flex-column align-items-end" v-if="!IS_MOBILE">
                                    <Line class="lt-first"></Line>
                                    <div class="gap point"></div>
                                    <Line class="lt-second"></Line>
                                    <div class="gap" :style="'padding: 20px'"></div>
                                    <Line class="lt-third" :line-classes="'hide-after'"></Line>
                                </div>
                                <div class="line-tracker m-left d-flex flex-column" v-else>
                                    <Line class="lt-first" :line-classes="'hide-before'"></Line>
                                    <div class="gap point"></div>
                                    <Line class="lt-second flex-1"></Line>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="line-tracker mid d-flex justify-content-start align-items-center" v-if="!IS_MOBILE">
                            <Line class="lt-first" from="right" :line-classes="'hide-before'"></Line>
                            <div class="gap" :style="'padding: 48px'"></div>
                            <Line class="lt-second" from="right"></Line>
                            <div class="gap" :style="'padding: 48px'"></div>
                            <Line class="lt-third flex-1" from="right" :hide-head="true"></Line>
                        </div>
                    </div>

                    <div class="web right d-flex">
                        <div class="web-img-wrapper">
                            <img :src="require(`../../assets/img/projects/Noiyy_v2-main.png`)" alt="web version 2 thumbnail" class="img-fluid">

                            <div class="line-tracker m-left2 d-flex flex-column align-items-start" v-if="IS_MOBILE">
                                <Line class="lt-first flex-1" :hide-head="true"></Line>
                            </div>
                        </div>

                        <div class="line-tracker m-mid d-flex justify-content-start align-items-center" v-if="IS_MOBILE">
                            <Line class="lt-first flex-1" from="right" :line-classes="'hide-before'" :hide-head="true"></Line>
                        </div>

                        <div class="container d-flex">
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
    
                                <div class="line-tracker left d-flex flex-column" v-if="!IS_MOBILE">
                                    <Line class="lt-first" :line-classes="'hide-before'"></Line>
                                    <div class="gap point"></div>
                                    <Line class="lt-second"></Line>
                                </div>
                                <div class="line-tracker m-right2 d-flex flex-column" v-else>
                                    <Line class="lt-first" :line-classes="'hide-before'"></Line>
                                    <div class="gap point"></div>
                                    <Line class="lt-second flex-1"></Line>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="projects-back-btn text-center">
                    <router-link to="/projects" class="btn secondary"> <div>Back to projects</div> </router-link>
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
import Line from './Line.vue';

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
        BackBtn,
        Line,
        Icon,
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
                IS_MOBILE: "misc/getIsMobile"
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

.container > .content {
    overflow: hidden;
}

.web-versions {
    margin-top: 64px;
    overflow: visible;
}

.web {
    display: flex;
    height: 70vh;
    text-align: right;
    justify-content: flex-end;
    margin-bottom: 128px;
}

.web.right {
    margin-top: 128px;
}

.web.right { /* .web:nth-child(even) */
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
.web.right .web-img-wrapper {
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

.web.right .web-content {
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

.web-info {
    gap: 24px;
}

.web-info .btn {
    align-self: flex-end;
}

.web.right .web-info .btn {
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

.web.right .web-date .circle {
    right: initial;
    left: -48px;
}

.line-tracker {
    position: absolute;
    top: 0;
    user-select: none;
    z-index: -2;
    width: 100%;
    overflow: hidden;
    /* filter: invert(1) url(#remove-white) invert(1); */
    /* filter: url(#replaceWhite); */

    /* background: var(--gradient-angle); */

    /* -webkit-mask-image: linear-gradient(black, transparent); */
    /* mask-image: linear-gradient(90deg, black 0%, transparent 100%); */
}

.line-tracker.right {
    top: -12vh;
}

.line-tracker.mid {
    position: relative;
    flex-direction: row-reverse;
    padding: 0 10px;
    height: 12px;
    z-index: -1;
}

.line-tracker.left {
    top: -128px; 
    left: 0;
    padding-bottom: 8px;
}

.line-tracker .gap {
    background: transparent;
    padding: 8px;
}

.line-tracker .gap.point {
    padding: 36px;
}

.line-tracker.right .lt-first { height: 12vh; }
.line-tracker.right .lt-second { height: 67vh; }
.line-tracker.right .lt-third { height: 7vh; }

.line-tracker.mid .lt-first, .line-tracker.mid .lt-second, .line-tracker.mid .lt-third { width: 20vw; }

.line-tracker.left .lt-first { height: 128px; }
.line-tracker.left .lt-second { height: 72vh; }

/* SMALL - Mobile */
@media(max-width: 640px) {
    .web {
        flex-direction: column;
        height: auto;
        /* gap: 56px; */
    }

    .web-content {
        max-width: 100%;
        padding-top: 32px;
    }

    .web-img-wrapper {
        height: 45svh;
        width: 100%;
        position: relative;
        display: flex;
        border: none;
        overflow: visible;
    }

    .web-img-wrapper img {
        max-width: 87.5%;
        border: 1px solid rgba(255, 255, 255, 0.66);
    }

    .web-versions {
        margin-top: 24px;
    }

    .web-content {
        text-align: left;
        padding-right: initial;
        padding-left: 48px;
        gap: 32px;
    }

    .web-date .circle {
        right: initial;
        left: -48px;
    }

    .web-info .btn {
        align-self: flex-start;
    }

    .web-date h2 {
        font-size: 40px;
    }

    .web.right .web-img-wrapper {
        justify-content: flex-end;
    }

    .web.right .web-content {
        text-align: right;
        padding-right: 48px;
        padding-left: initial;
    }

    .web.right .web-date .circle {
        right: -48px;
        left: initial;
    }

    .web.right .web-info .btn {
        align-self: flex-end;
    }

    .projects-back-btn {
        margin-bottom: 32px;
    }

    .line-tracker {
        z-index: 2;
        /* position: relative; */
    }

    .line-tracker.m-right {
        top: -5vh;
        right: -1.5px;
        margin: 0 22px;
        height: 120%;
    }

    .line-tracker.m-mid {
        position: relative;
        flex-direction: row-reverse;
        padding: 0 22px;
        margin-top: 16px;
        height: 12px;
        z-index: -1;
    }

    .line-tracker.m-left {
        top: -1px;
        left: 10px;
        height: 120%;
    }

    /* .line-tracker.m-left .lt-second { height: 90vw } */
    
    .line-tracker .gap.point {
        padding: 26px;
    }

    .line-tracker.m-left2 {
        top: 0;
        left: -1px;
        margin: 0 22px;
        height: 107%;
    }

    .line-tracker.m-left2 .lt-first { top: 4vh; }

    .line-tracker.m-right2 {
        align-items: flex-end;
        top: -1px;
        right: 10px;
        height: 120%;
    }
}
/* MEDIUM - Tablet */
@media(min-width: 641px) and (max-width: 992px) {
    .web {
        height: 60svh;
    }

    .web-img-wrapper {
        height: 60svh;
        width:  55%;
    }

    .web-date h2 {
        font-size: 44px;
    }

    .web-text {
        font-size: 15px;
    }

    .web-content {
        gap: 40px;
        max-width: 35vw;
    }

    .line-tracker.right {
        top: -14vh;
    }

    .line-tracker.left {
        top: -136px;
    }

    .line-tracker.right .lt-first { height: 13vh; }
    .line-tracker.right .lt-second { height: 55vh; }
    .line-tracker.right .lt-third { height: 10vh; }

    .line-tracker.left .lt-first { height: 128px; }
    .line-tracker.left .lt-second { height: 65vh; }
    
}

/* XL */
@media(min-width: 1400px) {
    .web-content {
        max-width: 20vw;
    }

    .line-tracker.right .lt-third { height: 6vh; }
}
</style>

<style>
.line-tracker.right .line.from-top {
    right: 10px;
}

.line-tracker.left .line.from-top {
    left: 10px;
}
</style>