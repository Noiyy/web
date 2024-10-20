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

                    <div class="right d-flex gap-72 align-items-center" v-if="!IS_MOBILE"
                        @click="console.log(IS_MOBILE);">
                        <div class="navLinks d-flex gap-48">
                            <router-link to="/"> {{ $t('Home') }} </router-link>
                            <router-link to="/projects"> {{ $t('Projects') }} </router-link>
                            <a href="/#about" @click.prevent="goToHomeAbout()"> {{ $t('About') }} </a>
                            <a href="/#contact" @click.prevent="goToHomeContact()"> {{ $t('Contact') }} </a>
                        </div>

                        <LangSelector></LangSelector>
                    </div>

                    <div class="right d-flex align-items-center" v-else>
                        <div class="menu-btn" @click="toggleSidebarMenu">
                            <Icon icon="material-symbols-light:menu" class="menu-icon open" v-if="!sidebarMenuOpened"/>
                            <Icon icon="material-symbols-light:close" class="menu-icon close" v-else />
                        </div>
                    </div>
                </nav>

            </div>
        </div>

        <SidebarMenu v-if="IS_MOBILE"
            :about-callback="goToHomeAbout"
            :contact-callback="goToHomeContact"
            @toggle-menu="toggleSidebarMenu()"
        ></SidebarMenu>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarMenu from './SidebarMenu.vue';
import LangSelector from './LangSelector.vue';

import { Icon } from '@iconify/vue';

export default {
    name: 'Header',

    inject: ['emitter'],
    emits: [],

    props: {
        
    },

    components: {
        SidebarMenu,
        LangSelector,
        Icon
    },

    data() {
        return {
            sidebarMenuOpened: false,
        }
    },

    methods: {
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

        toggleSidebarMenu() {
            const sidebarMenu = document.getElementById("sidebar-menu");
            const menuBtn = document.querySelector(".menu-icon");

            sidebarMenu.classList.toggle("open");
            menuBtn.classList.toggle("animate");
            document.documentElement.classList.toggle("openedSidebar");
            setTimeout(() => {
                this.sidebarMenuOpened = !this.sidebarMenuOpened;
            }, 350);
        },
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

.menu-icon {
    font-size: 40px;
    transition: transform 0.5s ease-in-out;
}

.menu-icon.animate {
    transform: rotate(180deg);
}

header .left, .menu-btn {
    z-index: 16;
}

/* SMALL - Mobile */
@media(max-width: 640px) {
    header {
        padding: 8px 0;
    }
}
/* MEDIUM - Tablet */
@media(min-width: 641px) and (max-width: 992px) {

}

</style>