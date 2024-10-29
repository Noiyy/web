<template>
    <div class="home-view">
        <HomeContent></HomeContent>
    </div>
</template>

<script>
import HomeContent from '../../components/home/HomeContent.vue';

export default {
    head() {
        return {
            title: `${this.$t('Home')} × Noiyy`,
            meta: [
                { name: "description", content: `${this.$t('HeroFullText')}` },
                { name: "image", content: `${this.getAssetUrl("img/projects/Noiyy_v2-main.png")}` },
                { name: "robots", content: "index, follow" },
                
                { property: "og:title", content: `${this.$t('Home')} × Noiyy` },
                { property: "og:type", content: "website" },
                { property: "og:description", content: `${this.$t('HeroFullText')}` },
                { property: "og:image", content: `${this.getAssetUrl("img/projects/Noiyy_v2-main.png")}` },
                
                { name: "twitter:title", content: `${this.$t('Home')} × Noiyy` },
                { name: "twitter:description", content: `${this.$t('HeroFullText')}` },
                { name: "twitter:card", content: "summary" },
                { name: "twitter:image", content: `${this.getAssetUrl("img/projects/Noiyy_v2-main.png")}` }
            ],
        }
    },

    name: 'HomeView',

    components: {
        HomeContent
    },
}
</script>

<style scoped>

</style>