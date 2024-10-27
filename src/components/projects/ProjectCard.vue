<template>
    <div class="project-tags">
        <div class="project-tag" v-for="(tag, index) in projectData.tags" :key="index"
            :style="`background-color: ${getTagColor(tag)}`">
            <Icon :icon="getTagIcon(tag)" class="tag-icon" />
        </div>
    </div>

    <img class="img-fluid" :src="projectData.thumbnail" :alt="`${projectData.name} project thumbnail`">
    <div class="card-overlay">
        <div class="card-date" v-if="!IS_MOBILE">
            <div class="card-month"> {{ getProjectMonthTo() }} </div>
            <div class="card-year"> {{ getProjectYearTo() }} </div>
        </div>

        <div class="card-overlay-info">
            <h3> {{ projectData.name }} </h3>
        </div>

        <a :href="projectData.link" target="_blank" class="arrow-icon-link" v-if="projectData.shortInfo"
            @click.stop="null">
            <Icon icon="ph:arrow-up-right" class="arrow-icon" />
        </a>
        <div class="card-overlay-bg"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { Icon } from '@iconify/vue';

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

        getTagIcon(tag) {
            switch (tag) {
                case "study": return "oi:book";
                case "jam": return "cib:iconjar";
                case "work": return "majesticons:suitcase-line";
            }
        },

        getTagColor(tag) {
            switch (tag) {
                case "study": return "var(--gold)";
                case "jam": return "var(--orange)";
                case "work": return "var(--green)";
            }
        },

        getProjectMonthTo() {
            const dateArr = this.projectData.dateTo.split(" ");
            return dateArr[0];
        },

        getProjectYearTo() {
            const dateArr = this.projectData.dateTo.split(" ");
            return dateArr[1];
        }
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
.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease-in;
}

.card-overlay-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-angle);
    opacity: 0.85;
    z-index: 1;
}
.card-overlay-info {
    z-index: 2;
}
.card-overlay h3 {
    font-size: 36px;
    text-transform: uppercase;
    text-align: center
}

.card-overlay .arrow-icon {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 56px;
    height: 56px;
    padding: 4px;
    opacity: 0.66;
    /* font-size: 32px; */
    z-index: 2;
    transition: all 0.15s ease-in;
}
.card-overlay .arrow-icon:hover {
    transform: translate(6px, -6px);
    opacity: 1;
}

.card-date {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    text-align: center;
    -webkit-text-stroke: 1px white;
    font-family: "Archivo Black", sans-serif;
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: transparent;
    opacity: 30%;
    overflow: hidden;
}
.card-month {
    position: absolute;
    left: -16px;
    top: -24px;
}
.card-year {
    position: absolute;
    right: -16px;
    bottom: -24px;
}

.project-tags {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 24px;
}

.project-tag {
    width: 48px;
    height: 48px;
    border-bottom-right-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<style>
.project-card {
    position: relative;
    height: 275px;
    transition: all 0.2s ease-in;
}
.project-card:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
}
.project-card:hover .card-overlay {
    opacity: 1;
}

.project-card img {
    width: 100%;
    object-fit: cover;
}

.project-card:nth-child(4n + 1),
.project-card:nth-child(4n + 4) {
    grid-column: span 1;
}
.project-card:nth-child(4n + 2),
.project-card:nth-child(4n + 3) {
    grid-column: span 2;
}

/* SMALL - Mobile */
@media(max-width: 640px) {
    .project-card:nth-child(4n + 1),
    .project-card:nth-child(4n + 4) {
        grid-column: initial;
    }
    .project-card:nth-child(4n + 2),
    .project-card:nth-child(4n + 3) {
        grid-column: initial;
    }

    .project-tags {
        z-index: 3;
    }

    .project-tag { 
        width: 40px !important;
        height: 40px !important;
    }

    .card-overlay {
        opacity: 1 !important;
        align-items: flex-start !important;
    }

    .card-overlay h3 {
        text-shadow: 0px 1px 16px #000000;
        max-width: 90%;
        margin: 0 auto;
        font-size: 24px !important;
        line-height: 100%;
    }

    .card-overlay-info {
        padding: 8px 0;
    }

    .card-overlay .arrow-icon {
        top: initial !important;
        bottom: 8px;
        opacity: 1 !important;
        filter: drop-shadow(5px 5px 10px #000000);
    }

    .card-overlay-bg {
        opacity: 0.3 !important;
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, var(--gradient-primary) 100%) !important;
    }
}
/* MEDIUM - Tablet */
@media(min-width: 641px) and (max-width: 992px) {}
/* LARGE - PC */
@media(min-width: 993px) {}
</style>