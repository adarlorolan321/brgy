import "./bootstrap";
import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import flatPickr from 'vue-flatpickr-component';

import Dropzone from "@/Components/Dropzone.vue";
import Select2 from "@/Components/Select2.vue";
import TableHeader from "@/Components/TableHeader.vue";

let doc = window.document.getElementsByTagName("title")[0];
const appName = doc ? doc.innerText : "Laravel";

import cleave from "./Directives/cleave";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .directive('cleave', cleave)
            .component("Select2", Select2)
            .component("TableHeader", TableHeader)
            .component("Dropzone", Dropzone)
            .component("inertia-link", Link)
            .component("flat-pickr", flatPickr)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});