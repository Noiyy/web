import { createApp } from 'vue'
import MainApp from './MainApp.vue'

import router from './router/MainRouter'
import store from './store/store'
import mitt from 'mitt';

import Toast, {useToast} from 'vue-toastification';
import "vue-toastification/dist/index.css"

// import { createI18n } from 'vue-i18n';
// import { i18nOptions } from './localization';
import { localization } from './localization';
import globals from './globals';

import { Icon } from '@iconify/vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/css/globalStyle.css';

import { globalMixin } from './mixins/globalMixin'; 
import { createHead, VueHeadMixin } from '@unhead/vue';
const head = createHead();

const emitter = mitt();
const app = createApp(MainApp);
const routerObj = router(emitter);
// const i18n = createI18n(i18nOptions);
Object.assign(app.config.globalProperties, globals);

const toastOptions = {
    transition: "Vue-Toastification__slideBlurred",
    draggable: false,
    position: 'bottom-center'
}

app.use(localization);
app.use(store);
app.use(routerObj);
app.use(Toast, toastOptions);
app.use(head);

app.config.globalProperties.$toast = useToast();
app.mixin(globalMixin);
app.mixin(VueHeadMixin);

app.provide("emitter", emitter);
app.component("Icon", Icon);
app.mount('#app');
