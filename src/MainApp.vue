<template>
 <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" v-if="isLoaded"></component>
  </router-view>

  <div class="scroll-to-top" id="scrollToTopBtn" @click="scrollToHeader()">
    <IconArrowUp class="scroll-btn-img"></IconArrowUp>
  </div>
</template>

<script>
import { IconArrowUp } from '@iconify-prerendered/vue-mdi';

export default {
  name: "MainApp",

  inject: ['emitter'],

  components: {
    IconArrowUp
  },

  data() {
    return {
      isLoader: true,
      isLoaded: false,

      rootElement: document.documentElement,
    }
  },

  methods: {
    showLoader() {
      this.isLoader = true;
    },

    hideLoader() {
      this.isLoader = false;
    },

    handleScroll() {
      const scrollTotal = this.rootElement.scrollHeight - this.rootElement.clientHeight;
      const scrollRatio = this.rootElement.scrollTop / scrollTotal;
      const fullPageHeight = Math.max(
          document.body.scrollHeight, document.body.offsetHeight, 
          document.documentElement.clientHeight, document.documentElement.scrollHeight, 
          document.documentElement.offsetHeight
      );

      if (fullPageHeight > 1400 && scrollRatio > 0.55) scrollToTopBtn.classList.add("active");
      else if (scrollToTopBtn.classList.contains("active")) scrollToTopBtn.classList.remove("active");
    },

    scrollToHeader() {
      document.querySelector('header').scrollIntoView({ 
          behavior: 'smooth' 
      });
    },
  },

  created() {
    window.onresize = (e) => {
      console.log("Resized window!", screen.width);
      this.emitter.emit("update-isMobile", screen.width <= 760);
    };

    document.addEventListener('scroll', () => {
      this.handleScroll();
      this.handleScrollBtnColorChange();
    });
  },

  async mounted() {
    this.emitter.on('show-loader', this.showLoader);
    this.emitter.on('hide-loader', this.hideLoader);

    this.isLoaded = true;
  },

  unmounted() {
    this.emitter.off('show-loader', this.showLoader);
    this.emitter.off('hide-loader', this.hideLoader);
  },
}
</script>

<style>

</style>
