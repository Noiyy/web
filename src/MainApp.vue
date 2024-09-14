<template>
 <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route.path" v-if="isLoaded"></component>
  </router-view>

  <div class="scroll-to-top" id="scrollToTopBtn" @click="scrollToHeader()">
    <IconArrowUpRight class="scroll-btn-img"></IconArrowUpRight>
  </div>

  <TimeBtn></TimeBtn>
</template>

<script>
import TimeBtn from './components/TimeBtn.vue';
import { IconArrowUpRight } from '@iconify-prerendered/vue-mdi';

export default {
  name: "MainApp",

  inject: ['emitter'],

  components: {
    TimeBtn,

    IconArrowUpRight
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

      if (!scrollToTopBtn) return;
      if (fullPageHeight > 1400 && scrollRatio > 0.55) scrollToTopBtn.classList.add("active");
      else if (scrollToTopBtn.classList.contains("active")) scrollToTopBtn.classList.remove("active");
    },

    scrollToHeader() {
      if (!scrollToTopBtn) return;
      if (!scrollToTopBtn.classList.contains("active")) return;
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
.scroll-to-top {
    position: fixed;
    border-radius: 50%;
    padding: 12px;
    bottom: -4px;
    left: -8px;
    opacity: 0;
    z-index: 10;
    display: flex;
    transition: all 0.2s ease-in-out;
    background: transparent;
    overflow: hidden;
}
.scroll-to-top.active {
    opacity: 0.15;
}
.scroll-to-top.active:hover {
    cursor: pointer;
    opacity: 1;
    filter: drop-shadow(4px -4px 10px #000000);
}
.scroll-to-top::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  background: var(--gradient-angle);
  transition: all 0.5s ease-in; 
  z-index: -1;
}
.scroll-to-top:hover::before {
  width: 200%;
  height: 200%;
}

.scroll-btn-img {
    font-size: 24px;
}

#app > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sky path {
    fill: url(#gradient);
}

.cloud-primary path, .cloud2-primary path {
    fill: var(--cloud-primary);
}

.cloud-secondary path, .cloud2-secondary path {
    fill: var(--cloud-secondary);
}
</style>
