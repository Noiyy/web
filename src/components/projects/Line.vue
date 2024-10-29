<template>
    <div class="line" :class="`from-${from} ${lineClasses}`" :style="inlineStyle">
        <div class="line-arrow-head" v-if="!hideHead">
            <div class="left"></div>
            <div class="right"></div>
        </div>
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

        hideHead: {
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
    background: var(--gradient-angle);
    --size: 12px;
}

.line::before {
    top: 0;
    left: 0;
    position: absolute;
    content: "";
    width: 0; 
    height: 0;
    --arrow-color: var(--black);
    z-index: 1;
}

.line.from-top::before {
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

.line.from-right::before {
    top: 0;
    left: initial;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 6px solid var(--arrow-color);
}
.line.from-right::before {
    right: 0;
}

.line.hide-before::before {
    display: none;
}

.line-arrow-head {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 12px;
    height: 6px;
}
.line.from-right .line-arrow-head  {
    width: 6px;
    height: 12px;
}

.line-arrow-head .left, .line-arrow-head .right {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-bottom: 12px solid var(--black);
    display: inline-block;
}

.line-arrow-head .right {
    transform: scaleX(-1);
}

.line.from-right .line-arrow-head .left {
    border: 0;
    border-left: 12px solid var(--black);
    border-bottom: 12px solid transparent;
}

.line.from-right .line-arrow-head .right {
    transform: scaleY(-1), scaleX(-1);
}
</style>