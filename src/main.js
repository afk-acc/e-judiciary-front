import {createApp} from "vue";
import router from "./router";
import App from "./App.vue";
import "./style/app.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import store from './store'
import axios from "./axios/index.js";
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import Echo from 'laravel-echo'
import pusher from './pusher'
import {languages, defaultLocale} from "./lang/index.js";
import {createI18n} from "vue-i18n";
import 'vue3-toastify/dist/index.css';
import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core'

import VueAnimateOnScroll from 'vue3-animate-onscroll';


import SmallPlugin from "vue-small-plugin"

// import pusher from 'pusher-js'
// window.io = import('socket.io-client')
// window.Pusher = import('pusher-js')


const app = createApp(App);
let all_messages = [];
const localeLocalStorage = localStorage.getItem("locale");

const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: localeLocalStorage || defaultLocale,
    fallbackLocale: "uz_l",
    messages,
});
app.config.globalProperties.$all_messages = all_messages;
app.component('QuillEditor', QuillEditor)
app.use(router);
app.use(i18n);
app.use(VueAnimXyz)
app.use(VueAnimateOnScroll);
app.use(VueAwesomeSwiper);
app.use(store);
app.use(pusher, {
    wsHost: 'e-judiciary',
    wsPort:6001,
    apiKey: 'e-judiciary-app-key', forceTLS: false,
    cluster: "mt1",
    authEndpoint: "http://e-judiciary/api/v1/pusher/auth",
    auth: {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    },
    userAuthentication: {
        endpoint: "http://e-judiciary/api/v1/pusher/auth",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },

    },
})
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     wsHost: '127.0.0.1',
//     wsPort: 6001,
//     key: 'e-judiciary-app-key',
//     cluster: "mt1",
//     forceTLS: true,
//     authEndpoint: 'http://127.0.0.1:8000/api/v1/pusher/auth',
//     authorizer: (channel, options) => {
//         return {
//             authorize: (socketId, callback) => {
//                 axios.post('http://127.0.0.1:8000/api/v1/pusher/auth', {
//                         socket_id: socketId,
//                         channel_name: channel.name
//                     },
//                     {
//                         headers: {
//                             Authorization: `Bearer ${localStorage.getItem('token')}`
//                         }
//                     })
//                     .then(response => {
//                         // callback(null, response.data);
//                     })
//                     .catch(error => {
//                         // callback(error);
//                     });
//             }
//         };
//     },
// })
app.mount("#app");
export default i18n.global.t