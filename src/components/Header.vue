<template>
    <header>
        <div class="container">
            <div class="content">
                <nav class="d-flex justify-content-between gap-32">
                    <div class="left">
                        <router-link to="/" class="logo-wrapper d-flex gap-16 align-items-center">
                            <img src="../assets/img/logo.svg" alt="Noiyy logo">
                            <h4> Noiyy </h4>
                        </router-link>
                    </div>

                    <div class="right d-flex gap-72 align-items-center">
                        <div class="navLinks d-flex gap-48">
                            <router-link to="/"> {{ $t('Home') }} </router-link>
                            <router-link to="/projects"> {{ $t('Projects') }} </router-link>
                            <a href="/#about" @click.prevent="goToHomeAbout()"> {{ $t('About') }} </a>
                            <a href="/#contact" @click.prevent="goToHomeContact()"> {{ $t('Contact') }} </a>
                        </div>

                        <div class="navLang" @click="showOtherLangs">
                            <div class="lang-item selected">
                                {{ activeLangItem.locale.toUpperCase() }}
                                <Icon icon="mdi:tick" v-if="openedOtherLangs" class="lang-tick" />
                            </div>

                            <div class="other-langs">
                                <div class="lang-item" v-for="langItem in nonActiveLangItems" :key="langItem.locale"
                                    @click="changeLang(langItem.locale)">
                                    {{ langItem.locale.toUpperCase() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import { Icon } from '@iconify/vue';

export default {
    name: 'Header',

    inject: ['emitter'],
    emits: [],

    props: {
        
    },

    components: {
        Icon
    },

    data() {
        return {
            openedOtherLangs: false,

            langItems: [
                {
                    locale: "en",
                    active: true,
                },
                {
                    locale: "sk",
                },
            ],
        }
    },

    methods: {
        showOtherLangs() {
            const cont = document.querySelector('.other-langs');
            cont.classList.toggle("opened");
            this.openedOtherLangs = !this.openedOtherLangs;
        },

        hideOtherLangs(event) {
            const cont = document.querySelector('.other-langs');
            const selector = document.querySelector('.navLang');

            if (cont && !cont.contains(event.target) && !selector.contains(event.target)) {
                cont.classList.remove('opened');
                this.openedOtherLangs = false;
            }
        },

        changeLang(locale) {
            this.langItems.forEach(item => {
                item.active = item.locale === locale
            })
            this.$i18n.locale = locale;
            document.documentElement.setAttribute("lang", locale);
            this.saveLocaleToStorage(locale);
        },

        saveLocaleToStorage(locale) { localStorage.setItem("locale", locale); },
        getLocaleFromStorage() {
            const locale = localStorage.getItem("locale");
            return locale
        },

        async goToHomeAbout() {
            await this.$router.push({ name: 'Home'});
            setTimeout(() => {
                const element = document.getElementById("about");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 250);
        },

        async goToHomeContact() {
            await this.$router.push({ name: 'Home'});
            setTimeout(() => {
                const element = document.getElementById("contact");
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 250);
        },
    },
    
    computed: {
        activeLangItem() { return this.langItems.find(item => item.active) },
        nonActiveLangItems() { return this.langItems.filter(item => !item.active) },
    },

    created() {
        document.addEventListener("click", (event) => this.hideOtherLangs(event));

        const locale = this.getLocaleFromStorage();
        if (locale) this.changeLang(locale);
    },
}
</script>

<style scoped>
header {
    padding: 16px 0;
}

.logo-wrapper {
    font-size: 32px;
    font-style: normal;
    line-height: normal;
    text-transform: uppercase
}

.logo-wrapper img {
    width: 52px;
    height: 52px;
}

.navLang {
    color: rgba(255, 255, 255, 0.35);
    position: relative;
}
.navLang:hover {
    cursor: pointer;
}

.navLang .other-langs {
    display: none;
    padding: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.navLang .other-langs .lang-item:hover,
.navLang:has(.other-langs.opened) .lang-item.selected {
    color: rgba(255, 255, 255, 0.75);
}

.navLang .other-langs.opened {
    display: block;
}

.navLang .lang-tick {
    color: var(--green);
    position: absolute;
    right: -24px;
    top: 50%;
    transform: translateY(-50%);
}

.right {
    line-height: normal;
    letter-spacing: 2px;
}

header nav a {
    position: relative;
}
header nav a:hover {
    cursor: pointer;
}

header nav .router-link-active {
    font-weight: 800;
}

header nav .right a::after {
    content: "";
    width: 100%;
    bottom: -8px;
    left: 0;
    height: 2px;
    position: absolute;
    background: linear-gradient(274deg, var(--gradient-primary) 14.25%, var(--gradient-secondary) 84.32%);
    transition: opacity 0.2s ease-in;
}

header nav .right a:not(.router-link-active)::after {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
}

header nav .right a:not(.router-link-active):hover {
    opacity: 0.75;
}

header nav .right a:not(.router-link-active):hover::after {
    transform: scaleX(1);
}

</style>