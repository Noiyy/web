export const globalMixin = {
    methods: {
        getAssetUrl(path) {
            return new URL(`../assets/${path}`, import.meta.url).href;
        }
    }
};