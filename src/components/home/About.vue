<template>
    <section id="about">
        <h1 class="section-heading text-center"> About me </h1>

        <div class="content">
            <div class="container">

                <div class="content-wrapper d-flex justify-content-center align-items-center">
                    <div class="text-col d-flex flex-column gap-32 flex-1 pos-relative justify-content-center">
                        <p v-for="(txt, index) in text[currentTextSlide]" :key="index" v-html="txt"></p>
                        <div class="text-slide-counter d-flex gap-16 justify-content-center">
                            <div class="ball" :class="index == currentTextSlide ? 'active' : null" v-for="(slide, index) in text"
                                :key="index" @click="currentTextSlide = index">
                            </div>
                        </div>
                    </div>
                    <div class="img-col flex-1">
                        <img class="img-fluid" :src="require('../../assets/img/me.png')">
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
                [
                    `I'm a <span>front-end web developer</span> studying <span>multimedia</span> from Slovakia. I also
                    like creating PC games & <span>websites</span> in my free time, doing <span>calisthenics</span> and
                    listening to <span>BMTH</span> & <span>LP</span>.`,

                    `I've started my coding journey with <span>websites</span> and  also had experiences with numerous
                    languages. But other than <span>webdev</span>, <span>Haxe</span> really stood out as I also developed
                    <span>games</span> with it. `
                ],
                [
                    `I've also taken an interest in <span>design</span> and <span>music - piano</span>. And if you haven't
                    noticed, I love the <span>sky</span>, <span>clouds</span> and <span>nature</span> overall! :)`,

                    `Currently, I'm an <span>university student</span> also working part-time as a <span>front-end developer</span>
                    at <span>EMTest</span>, creating transport web systems with <span>Vue.js</span>`
                ]
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
#about .content {
    background: #0D0D0D;
}

.content-wrapper {
    gap: 56px;
    padding-top: 24px;
}

.text-col {
    font-size: 22px;
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