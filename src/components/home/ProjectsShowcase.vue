<template>
    <section id="projectsShowcase">
        <div class="container">
            <div class="content">
                <h1 class="section-heading text-center"> Projects Showcase </h1>
    
                <div class="showcase-wrapper d-flex flex-column">
                    <div class="project" v-for="proj in projects" :key="proj.name">
                        <div class="proj-img-wrapper">
                            <div class="side-rect"></div>
                            <h1 class="project-date"> {{ proj.date }} </h1>
                            <div class="overlay"></div>
                            <img :src="require(`../../assets/img/projects/${proj.img}.png`)" :alt="proj.name" class="img-fluid">
                        </div>
                        <div class="proj-content d-flex flex-column">
                            <h2 class="section-subheading"> {{ proj.name }} </h2>

                            <p class="project-info"> {{ proj.info }} </p>
                            <div class="project-buttons d-flex">
                                <a class="btn secondary"> <div>Detail</div> </a>
                                <a class="btn"> <span>View</span> </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="showcase-cta">
            <div class="container">
                <div class="showcase-cta-content d-flex justify-content-between align-items-center">
                    <h3> Check out my other projects </h3>
                    <a class="btn"> All projects </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ProjectsShowcase',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {

    },

    data() {
        return {
            projects: [
                {
                    name: "VerbumWell",
                    date: "5. 2024", 
                    info: "Fully responsive web application for posting, made for university semestral work - developed with Express.js",
                    id: 3,
                    img: "VW-main",
                    link: "https://www.google.com/"
                },
                {
                    name: "Tsurugi Respite",
                    date: "12. 2023",
                    info: "E-shop website selling japanese swords, originally made for university semestral work - developed with Vue.js",
                    id: 2,
                    img: "TR-main",
                    link: "https://www.google.com/"
                },
                {
                    name: "Égaré",
                    date: "4. 2022", 
                    info: "Simple 2D pixel-art story-driven platformer game - made with HaxeFlixel for highschool graduation project.",
                    id: 1,
                    img: "Egare-main",
                    link: "https://www.google.com/"
                }
            ]
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
h1 {
    margin-bottom: 56px;
}

.showcase-wrapper {
    gap: 96px;
}

.showcase-wrapper > .project:nth-child(2) {
    align-self: flex-end;
}

.project {
    display: flex;
    width: 85%;
    height: 75vh;
}

.project .container {
    position: absolute;
    top: 0;
}

.project .side-rect {
    background: var(--gradient-angle);
    height: 100%;
    width: 32px;
    position: absolute;
    z-index: 1;
}

.showcase-wrapper > .project:nth-child(2) .side-rect {
    right: 0;
}

.project .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    transition: all 0.2s ease-in;
}

.proj-img-wrapper {
    position: absolute;
    left: 0;
    width: 85%;
    height: 75svh;
    overflow: hidden;
}

.proj-img-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.proj-img-wrapper:hover .overlay, .project:hover .overlay {
    background-color: rgba(0, 0, 0, 0.85);
}
.project:hover .project-info, .project:hover .project-buttons {
    opacity: 1;
}
.project:hover .project-date {
    -webkit-text-stroke: 1.5px #616161;
}

.showcase-wrapper > .project:nth-child(2) .proj-img-wrapper {
    right: 0;
    left: initial;
}

.showcase-wrapper > .project:nth-child(2) .proj-content {
    margin-right: 0;
    margin-left: 96px;
    text-align: right;
    align-items: flex-end;
}

.showcase-wrapper > .project:nth-child(2) .proj-content h2 {
    padding-right: 8px;
}

.showcase-wrapper > .project:nth-child(2) .project-date {
    left: 72px;
    right: initial;
    text-align: left;
}

.showcase-wrapper > .project:nth-child(2) .project-buttons {
    flex-direction: row-reverse;
}

.proj-content {
    position: relative;
    margin: 72px;
    margin-left: 0;
    display: flex;
    row-gap: 48px;
    flex: 1;
    justify-content: space-between;
}

.proj-content h2 {
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-style: italic;
    font-size: 48px;
    max-width: 70%;
}

.project-date {
    position: absolute;
    z-index: 1;
    text-align: right;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 16.32px;
    max-width: 350px;
    bottom: 72px;
    right: 72px;

    background: var(--gradient-angle);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-stroke: 3px transparent;
    -webkit-text-fill-color: black;
    margin: 0;
    transition: all 0.2s ease-in;
}

.project-info {
    opacity: 0;
    max-width: 55%;
    margin-top: 32px;
    font-size: 18px;
    line-height: normal;
    transition: opacity 0.2s ease-in;
}

.project-buttons {
    opacity: 0;
    column-gap: 16px;
    transition: opacity 0.2s ease-in;
}

.showcase-cta {
    padding: 40px 0;
    background: var(--gradient-straight);
    color: var(--black);
    margin: 112px 0;
}

.showcase-cta .btn {
    color: var(--black);
    border: 6px solid var(--black);
    font-weight: 900;
}
.showcase-cta .btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: initial;
    right: initial;
    width: 100%;
    height: 100%;
    background: var(--black);
    z-index: 0;
    border-radius: 0;
    opacity: 0;
    transition: all 0.3s ease-in;
}
.showcase-cta .btn::after {
    content: "All Projects";
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    opacity: 0;
}

.showcase-cta .btn:hover::before, .showcase-cta .btn:hover::after {
    opacity: 1;
}
</style>