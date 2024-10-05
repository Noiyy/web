<template>
    <Header></Header>
    
    <section id="projects" class="pos-relative">
        <div class="projects-categories">
            <ul class="d-flex flex-column ">
                <li v-for="(ctg, index) in categories" :key="index" :class="ctg.active ? 'active' : null"
                    class="d-flex align-items-center gap-16"
                    @click="changeCategory(ctg, index)">
                    <Icon :icon="ctg.icon" class="ctg-icon" />
                    {{ ctg.name }} 
                </li>
            </ul>
        </div>

        <div class="container">
            <div class="content">
                <div class="title d-flex flex-column gap-8">
                    <h1 class="section-heading"> Projects </h1>
                    <router-link to="/archive" class="d-flex gap-8 align-items-center">
                        <Icon icon="bx:archive" class="title-icon" /> <h4> Archive </h4> 
                    </router-link>
                </div>

                <div class="filters d-flex align-items-center gap-8">
                    <Icon icon="mdi:filter-outline" class="title-icon" />
                    <div class="pills-wrapper d-flex gap-16 flex-wrap">
                        <div class="filter-pill" v-for="(filter, index) in availableFilters" :key="index"
                            :class="filter.active ? 'active' : null"
                            :style="`border-color: ${filter.color};`">
                            <Icon :icon="filter.icon" class="pill-icon" :class="filter.id" />
                            {{ filter.name }} ({{ filter.count }}) 
                        </div>
                    </div>
                </div>

                <div class="projects-wrapper">
                    <ProjectCard v-for="proj in filteredProjects" :key="proj.id"
                        :project-data="proj"
                    ></ProjectCard>
                </div>
            </div>
        </div>
    </section>

    <Footer></Footer>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import ProjectCard from './ProjectCard.vue';
import { mapGetters, mapActions } from 'vuex';

import { Icon } from '@iconify/vue';

export default {
    name: 'ProjectsContent',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Header,
        Footer,
        ProjectCard,
        Icon
    },

    data() {
        return {
            activeCategory: "web",

            categories: [
                {
                    name: "Webdev",
                    id: "web",
                    icon: "mdi:globe",
                    active: true,
                },
                {
                    name: "Gamedev",
                    id: "game",
                    icon: "material-symbols:stadia-controller-outline",
                },
                {
                    name: "Others",
                    id: "other",
                    icon: "ph:question",
                }
            ],

            filters: [
                {
                    name: "All",
                    id: "all",
                    icon: "mdi:tick-all",
                    active: true,
                    color: "var(--gradient-primary)",
                    categories: ["web", "game", "other"],
                    count: 0
                },
                {
                    name: "Study",
                    id: "study",
                    icon: "oi:book",
                    color: "var(--gold)",
                    categories: ["web", "game", "other"],
                    count: 0
                },
                {
                    name: "Work",
                    id: "work",
                    icon: "majesticons:suitcase-line",
                    color: "var(--green)",
                    categories: ["web", "game", "other"],
                    count: 0
                },
                {
                    name: "Jam",
                    id: "jam",
                    icon: "cib:iconjar",
                    color: "var(--orange)",
                    categories: ["game"],
                    count: 0
                },
            ],
            availableFilters: [],

            projects: [
                {
                    name: "RentCarService",
                    id: "rentCarService",
                    thumbnail: require("../../assets/img/projects/AwesomeNature-main.png"),
                    tags: [],
                    category: "web",
                },
                {
                    name: "VerbumWell",
                    id: "verbumWell",
                    thumbnail: require("../../assets/img/projects/VW-main.png"),
                    tags: [],
                    category: "web",
                },
                {
                    name: "Tsurugi Respite",
                    id: "tsurugiRespite",
                    thumbnail: require("../../assets/img/projects/TR-main.png"),
                    tags: [],
                    category: "web",
                },
                {
                    name: "Calculator",
                    id: "calculator",
                    thumbnail: require("../../assets/img/projects/Calculator-main.png"),
                    tags: ["study"],
                    category: "web",
                },
                {
                    name: "Rock Paper Scissors",
                    id: "rockPaperScissors",
                    thumbnail: require("../../assets/img/projects/RockPaperScissors-main.png"),
                    tags: ["study"],
                    category: "web",
                },
                {
                    name: "Etch a Sketch",
                    id: "etchASketch",
                    thumbnail: require("../../assets/img/projects/Etch-a-Sketch-main.png"),
                    tags: ["study"],
                    category: "web",
                },
                {
                    name: "Awesome Nature",
                    id: "awesomeNature",
                    thumbnail: require("../../assets/img/projects/AwesomeNature-main.png"),
                    tags: ["study"],
                    category: "web",
                },
                {
                    name: "MajoPizza",
                    id: "majoPizza",
                    thumbnail: require("../../assets/img/projects/MajoPizza-main.png"),
                    tags: [],
                    category: "web",
                },
                {
                    name: "Égaré",
                    id: "egare",
                    thumbnail: require("../../assets/img/projects/Egare-main.png"),
                    tags: [],
                    category: "game",
                },
                {
                    name: "Snowcastle Meltdown",
                    id: "snowcastleMeltdown",
                    thumbnail: require("../../assets/img/projects/SnowcastleMeltdown-main.png"),
                    tags: ["jam"],
                    category: "game",
                }
            ],
            filteredProjects: []
        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),

        changeCategory(category, index) {
            if (category.active) return;
            this.categories.forEach(ctg => ctg.active = false);
            this.categories[index].active = true;
            this.activeCategory = category.id;

        },

        setupFiltersAndProjects() {
            this.filteredProjects = this.projects.filter(proj => proj.category == this.activeCategory);
            this.filters.forEach(fltr => {
                this.filteredProjects.forEach(proj => {
                    if (fltr.id == "all") fltr.count++;
                    else if (proj.tags.includes(fltr.id)) fltr.count++;
                });
            });
            this.availableFilters = this.filters.filter(fltr => fltr.categories.includes(this.activeCategory));
        }
    },
    
    computed: {
        ...mapGetters(
            {

            }
        ),
    },

    created() {
        this.setupFiltersAndProjects();
    },

    mounted() {

    }
}
</script>

<style scoped>
#projects {
    margin-top: 96px;
}

.title {
    max-width: 33%;
}

.title-icon {
    font-size: 28px;
}

h4 {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    text-transform: uppercase;
}

.filters {
    margin-top: 48px;
}

.filter-pill {
    border: 1px solid white;
    border-radius: 32px;
    padding: 4px 24px;
    display: flex;
    gap: 8px;
    align-items: center;
    opacity: 0.5;
    text-transform: uppercase;
    transition: background 0.2s ease-in;
}
.filter-pill.active {
    opacity: 1;
}
.filter-pill:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
}

.pill-icon {
    font-size: 24px;
}
.pill-icon.all { color: var(--gradient-primary) }
.pill-icon.study { color: var(--gold) }
.pill-icon.work { color: var(--green) }
.pill-icon.jam { color: var(--orange) }


.projects-categories {
    position: absolute;
    top: 0;
    right: -1px;
}

.projects-categories ul {
    gap: 4px;
    align-items: flex-end;
}

.projects-categories li {
    padding: 12px 8px;
    border: 1px solid white;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: 100%;
    text-transform: uppercase;
    width: 80%;
    transition: all 0.2s ease-in;
    border-bottom-left-radius: 16px;
}

.projects-categories li.active {
    color: var(--black);
    background: var(--gradient-straight);
    font-weight: 600;
    border: none;
    padding-right: 56px;
    width: 100%;
}
.projects-categories li:not(.active):hover {
    background: rgba(255, 255, 255, 0.2);
    width: 90%;
    cursor: pointer;
}

.ctg-icon {
    font-size: 32px;
}

.projects-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 16px;
    margin: 8px 0 8px 0;
    margin-top: 112px;
}

/* grid-column: span 2 !important; */
</style>