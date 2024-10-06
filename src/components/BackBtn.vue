<template>
    <router-link :to="getPrevRoute" class="back">
        <Icon icon="mdi:chevron-left" class="back-icon" /> back
    </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'BackBtn',

    inject: ['emitter'],

    computed: {
        ...mapGetters(
            {
                getPrevRoute: "misc/getPrevRoute"
            }
        )
    }
}
</script>

<style scoped>
.back {
    font-weight: 100;
    font-style: italic;
    color: rgba(255, 255, 255, 0.66);
}

.back-icon {
    font-size: 24px;
    opacity: 0.66;
}
</style>