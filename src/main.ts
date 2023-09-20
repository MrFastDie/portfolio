import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import {createI18n} from "vue-i18n";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faFile as faFileRegular, faIdCard} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCampground, faGear,
    faHandshakeAngle, faRss,
    faToolbox,
    faTrophy, faTrowel,
    faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import {faGithub , faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const routes: RouteRecordRaw[] = [
    {
        path: '/work_experience',
        name: 'Work Experience',
        component: () => import('./components/pages/WorkExperience.vue'),
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('./components/pages/Skills.vue'),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('./components/pages/Projects.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const messages = {
    en: {
        menu: {
            contact: 'Contact',
            education: 'Education',
            work_experience: 'Work Experience',
            volunteer: 'Volunteer',
            projects: 'Projects',
            skills: 'Skills',
            hobbies: 'Hobbies',
            preview: 'Preview',
            blog: 'Blog',
        },
    }
};

const i18n = createI18n({
    locale: 'en',
    messages: messages,
});

library.add(faFileRegular);
library.add(faIdCard);
library.add(faUserGraduate);
library.add(faToolbox);
library.add(faTrophy);
library.add(faCampground);
library.add(faLinkedinIn);
library.add(faGithub);
library.add(faHandshakeAngle);
library.add(faTrowel);
library.add(faRss);
library.add(faGear);

const app = createApp(App);

app.use(router);
app.use(i18n);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
