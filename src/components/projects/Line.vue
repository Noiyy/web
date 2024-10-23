<template>
    <div class="line" :class="`from-${from} ${lineClasses}`" :style="inlineStyle">
        <!-- <div class="gradient"></div> -->
    </div>
</template>

<script>

export default {
    name: 'Line',

    props: {
        from: {
            type: String,
            default: "top"
        },

        lineClasses: {
            type: String,
            default: ""
        },

        lStyle: {
            type: String,
            default: null
        },

        hideBefore: {
            type: Boolean,
            default: false
        },

        hideAfter: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {

        }
    },

    computed: {
        inlineStyle() {
            let style = ``;
            style += this.lStyle;
            return style;
        }
    }
}
</script>

<style scoped>
.line {
    position: relative;
    background: white;
    --size: 12px;
}

.line::before, .line::after {
    top: 0;
    left: 0;
    position: absolute;
    content: "";
    width: 0; 
    height: 0;
    --arrow-color: var(--black);
    z-index: 1;
}
.line::after {
    top: initial;
    bottom: -6px;
    --arrow-color: white; 
}

.line.from-top::before, 
.line.from-top::after  {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid var(--arrow-color);
}

.line.from-top {
    width: 12px;
    height: 32px;
    /* right: 9px; */
}

.line.from-right {
    height: 12px;
    width: 32px;
}

.line.from-right::before, 
.line.from-right::after {
    top: 0;
    left: initial;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid var(--arrow-color);
}
.line.from-right::before {
    right: 0;
}
.line.from-right::after {
    left: -5px;
}

.line.hide-before::before {
    display: none;
}
.line.hide-after::after {
    display: none;
}

/* .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-angle);
} */
</style>