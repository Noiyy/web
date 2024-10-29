<template>
    <section id="about">
        <h1 class="section-heading text-center"> {{ $t('AboutMe') }} </h1>

        <div class="content">
            <div class="container">

                <div class="content-wrapper d-flex justify-content-center align-items-center pos-relative">
                    <div class="text-col d-flex flex-column gap-32 flex-1 pos-relative justify-content-center">
                        <div class="invis-wrap" v-if="IS_MOBILE"></div>
                        <p v-for="(txt, index) in aboutText[currentTextSlide]" :key="index" v-html="txt"></p>
                        <div class="text-slide-counter d-flex gap-16 justify-content-center">
                            <div class="ball" :class="index == currentTextSlide ? 'active' : null" v-for="(slide, index) in aboutText"
                                :key="index" @click="currentTextSlide = index">
                            </div>
                        </div>
                    </div>
                    <div class="img-col d-flex justify-content-center">
                        <img :src="getAssetUrl('img/me.png')" alt="photo of me">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'About',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {

    },

    data() {
        return {
            currentTextSlide: 0,
            text: [
                [ this.$t("About1"), this.$t("About2") ],
                [ this.$t("About3"), this.$t("About4") ]
            ]
        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),

        handleTouchStart(event) {
            if (!this.IS_MOBILE) return;
            const firstTouch = event.touches[0];
            this.touchStartX = firstTouch.clientX;
        },

        handleTouchEnd(event) {
            if (!this.IS_MOBILE) return;
            const firstTouch = event.changedTouches[0];
            const endX = firstTouch.clientX;
            const distanceX = endX - this.touchStartX;

            if (distanceX > 50) { // To right
                this.currentTextSlide--;
                if (this.currentTextSlide < 0) this.currentTextSlide = this.aboutText.length-1;
            } else if (distanceX < -50) { // To left
                this.currentTextSlide++;
                if (this.currentTextSlide == this.aboutText.length) this.currentTextSlide = 0; 
            }
        },
    },
    
    computed: {
        ...mapGetters(
            {
                IS_MOBILE: "misc/getIsMobile"
            }
        ),

        aboutText() {
            if (this.IS_MOBILE) {
                return this.text.flatMap(subArray => subArray.map(item => [item]));
            } else return this.text;
        }
    },

    created() {

    },

    mounted() {
        document.addEventListener('touchstart', this.handleTouchStart, false);
        document.addEventListener('touchend', this.handleTouchEnd, false);
    }
}
</script>

<style scoped>
#about .content {
    background: #0D0D0D;
}

.content-wrapper {
    gap: 56px;
    padding-top: 24px;
}

.text-col {
    font-size: 20px;
    align-self: stretch;
}

.section-heading {
    margin-bottom: 48px;    
}

.ball {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.33);
}
.ball:hover {
    cursor: pointer;
}
.ball.active {
    background: #fff;
}

.text-slide-counter {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}

.img-col {
    align-self: flex-end;
    height: 80vh;
}

/* SMALL - Mobile */
@media(max-width: 640px) {
    .img-col {
        position: absolute;
        z-index: 1;
        opacity: 0.5;
        top: 0;
        width: 100%;
        height: 100%;
        right: -33%;
    }

    .text-col {
        font-size: 18px;
        z-index: 2;
        line-height: 110%;
        display: initial !important;
    }

    .text-col p {
        overflow-wrap: break-word;
    }

    .content-wrapper {
        padding: 72px 0;
        min-height: 50vh;
    }

    .text-slide-counter {
        bottom: -40px;
        gap: 8px !important;
    }

    .ball {
        width: 12px;
        height: 12px;
    }

    .invis-wrap {
        display: inline-flex;
        width: 128px;
        height: 96px;
        background-color: transparent;
        float: right;
    }
}
/* MEDIUM - Tablet */
@media(min-width: 641px) and (max-width: 992px) {
    .text-col {
        font-size: 16px;
    }

    .content-wrapper {
        min-height: 70vh;
    }

    .text-slide-counter {
        gap: 12px;
    }

    .ball {
        width: 12px;
        height: 12px;
    }
}
</style>

<style>
#about .text-col span {
    background: var(--gradient-angle);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Archivo Black", sans-serif;
}
</style>