<template>
    <footer>
        <div class="container">
            <div class="content d-flex justify-content-between">
                <div class="left d-flex align-items-center">
                    {{ $t("FooterCopyText") }}
                </div>

                <div class="right d-flex gap-8 align-items-center">
                    <a :href="social.link" target="_blank" v-for="social in socials" :key="social.name">
                        <Icon class="social-icon" 
                            :class="social.name"
                            :icon="social.icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { Icon } from '@iconify/vue';

export default {
    name: 'Footer',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Icon
    },

    data() {
        return {
            socials: [
                {
                    name: "LinkedIn",
                    icon: "mdi:linkedin",
                    link: "https://www.linkedin.com/in/noiyy/"
                },
                {
                    name: "GitHub",
                    icon: "mdi:github",
                    link: "https://www.github.com/Noiyy"
                },
                {
                    name: "Itch",
                    icon: "cib:itch-io",
                    link: "https://noiyy.itch.io/"
                },
                {
                    name: "Twitter",
                    icon: "mdi:twitter",
                    link: "https://www.twitter.com/Noiyy15"
                },
                {
                    name: "Discord",
                    icon: "cib:discord",
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