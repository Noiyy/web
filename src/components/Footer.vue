<template>
    <footer>
        <div class="container">
            <div class="content d-flex justify-content-between">
                <div class="left d-flex align-items-center">
                    {{ $t("FooterCopyText") }}
                </div>

                <div class="right d-flex gap-8 align-items-center">
                    <a :href="social.link" target="_blank" v-for="social in socials" :key="social.name">
                        <component class="social-icon" 
                            :class="social.name"
                            :is="social.component">
                        </component>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { IconLinkedin, IconGithub, IconTwitter } from '@iconify-prerendered/vue-mdi';
import { IconItchIo, IconDiscord } from '@iconify-prerendered/vue-cib'

export default {
    name: 'Footer',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        IconLinkedin, IconGithub, IconTwitter, IconItchIo, IconDiscord
    },

    data() {
        return {
            socials: [
                {
                    name: "LinkedIn",
                    component: IconLinkedin,
                    link: "https://www.linkedin.com/in/noiyy/"
                },
                {
                    name: "GitHub",
                    component: IconGithub,
                    link: "https://www.github.com/Noiyy"
                },
                {
                    name: "Itch",
                    component: IconItchIo,
                    link: "https://noiyy.itch.io/"
                },
                {
                    name: "Twitter",
                    component: IconTwitter,
                    link: "https://www.twitter.com/Noiyy15"
                },
                {
                    name: "Discord",
                    component: IconDiscord,
                    link: null
                },
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
footer {
    padding: 48px 0;
    font-style: italic;
    font-weight: 100;
    line-height: normal;
}

footer .left {
    opacity: 0.5;
}

.social-icon {
    opacity: 0.25;
    font-size: 28px;
    transition: all 0.2s ease-in;
}
.social-icon:hover {
    transform: translateY(-8px);
    opacity: 1;
}

.social-icon.LinkedIn:hover { color: #0077B5 }
.social-icon.GitHub:hover { color: #fff }
.social-icon.Itch:hover { color: #fa5c5c }
.social-icon.Twitter:hover { color: #1DA1F2 }
.social-icon.Discord:hover { color: #5865F2 }
</style>