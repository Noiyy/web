<template>
    <div class="gallery-wrapper pos-relative">
        <div class="image-counter">
            {{ activeImgIndex+1 }} / {{ images.length }}
        </div>
        <div class="project-gallery">
            <img v-for="(img, index) in images" :key="index" :src="img" :alt="'project image'"
                :data-index="index">
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar"></div>
        </div>
    </div>
    <div class="under-gallery d-flex flex-column align-items-center gap-48"> 
        <img :src="getAssetUrl('/img/scroll.svg')" class="scroll-icon" aria-hidden="true" v-if="!IS_MOBILE">
        <router-link :to="`/projects`" class="btn secondary"> <div>Back to projects</div> </router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Gallery',

    inject: ['emitter'],
    emits: [],

    props: {
        images: {
            type: Array,
            default: null
        },

        projectType: {
            type: String,
            default: "web"
        }
    },

    components: {

    },

    data() {
        return {
            percentagePerImg: 100 / this.images.length,
            activeImgIndex: 0,
        }
    },

    methods: {
        viewThirdImgOnLoad(gallery) {
            const images = gallery.querySelectorAll("img");
            if (images.length >= 3) {
                const imgWidth = images[0].offsetWidth + parseInt(getComputedStyle(images[0]).marginRight);
                const scrollPosition = 2 * imgWidth;
                gallery.scrollLeft = scrollPosition;
                console.log("\naaa", imgWidth, gallery.scrollLeft);

                const progressBar = document.querySelector('.progress-bar');
                const scrollPercentage = this.percentagePerImg * 3;
                progressBar.style.width = `${scrollPercentage}%`;
                console.log(progressBar.style.width);
            }
        },

        scrollHandler(gallery) {
            gallery.addEventListener('wheel', (event) => {
                event.preventDefault();
                gallery.scrollLeft += event.deltaY;
            });

            const progressBar = document.querySelector('.progress-bar');
            gallery.addEventListener('scroll', () => {
                const totalScrollWidth = gallery.scrollWidth - gallery.clientWidth;
                const scrollLeft = gallery.scrollLeft;
                
                const scrollPercentage = (scrollLeft / totalScrollWidth) * 100;
                this.highlightVisibleImage(gallery);
                progressBar.style.width = `${scrollPercentage}%`;
            });
        },

        isImgVisible(el) {
            const rect = el.getBoundingClientRect();
            const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

            let partMultiplier = this.IS_MOBILE ? 1.7 :
                screen.width < 1400 ? 1.6 :
                1.5;
            
            return (
                rect.left + (rect.width / partMultiplier) <= windowWidth &&
                rect.right - (rect.width / partMultiplier) >= 0
            );
        },

        highlightVisibleImage(gallery, scrollPercentage) {
            const images = gallery.querySelectorAll('img');
            let isAnyHighlighted = false;

            images.forEach(img => {
                if (isAnyHighlighted) {
                    img.classList.remove('highlight');
                }
                else if (this.isImgVisible(img)) {
                    this.activeImgIndex = +img.dataset.index;
                    img.classList.add('highlight');
                    isAnyHighlighted = true;
                }
                else img.classList.remove('highlight');
            });
            if (!isAnyHighlighted) {
                const img = gallery.querySelector(`img[data-index='${this.activeImgIndex}']`);
                if (img) img.classList.add("highlight");
            }
        },
    },
    
    computed: {
        ...mapGetters(
            {
                IS_MOBILE: "misc/getIsMobile"
            }
        )
    },

    created() {
        
    },

    mounted() {
        const gallery = document.querySelector('.project-gallery');
        console.log(gallery.scrollLeft);
        this.scrollHandler(gallery);
        setTimeout(() => { 
            if (this.projectType == "web")  this.viewThirdImgOnLoad(gallery);
            this.highlightVisibleImage(gallery);
        }, 100);
    }
}
</script>

<style scoped>
.project-gallery {
    margin-top: 48px;
    height: 90svh;
    height: 90vh;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
}

.project-gallery img {
    object-fit: contain;
    height: auto;
    width: 100%;
    filter: brightness(0.3);
    transition: all 0.2s ease-in-out;
}
.project-gallery img.highlight {
    filter: none;
}

.under-gallery {
    margin-top: 24px;
    margin-bottom: 64px;
}

.under-gallery .scroll-icon {
    width: 40px;
    height: auto;
}

.project-gallery::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
}
.project-gallery {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}

.progress-bar-container {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.progress-bar {
    height: 100%;
    width: 0;
    background: var(--gradient-straight);
}

.image-counter {
    position: absolute;
    top: 24px;
    right: 32px;
    z-index: 2;
    font-weight: 100;
    text-shadow: 0px 0px 1px #000000;
}

/* SMALL - Mobile */
@media(max-width: 640px) {
    .project-gallery {
        height: 40svh !important;
    }

    .project-gallery img {
        height: 100% !important;
        width: auto;
    }
    
    .under-gallery {
        margin-top: 48px;
    }

    .image-counter {
        top: initial;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%);
        right: initial;
    }
}
/* MEDIUM - Tablet */
@media(min-width: 641px) and (max-width: 992px) {}
</style>