import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import DataBinding from "@/components/DataBinding.vue";
import DataLoop from "@/components/DataLoop.vue";
import EventHandler from "@/components/EventHandler.vue";
import DataSwitch from "@/components/DataSwitch.vue";
import ParentView from "@/components/ParentView.vue"
import WatchView from "@/components/WatchView.vue";
import RouterView from "@/components/RouterView.vue";

const routes = [
    {
        path: "/DataBinding",
        component: DataBinding,
    },
    {
        path: "/DataLoop",
        component: DataLoop,
    },
    {
        path: "/EventHandler",
        component: EventHandler,
    },
    {
        path: "/DataSwitch",
        component: DataSwitch,
    },
    {
        path: "/ParentView",
        component: ParentView,
    },
    {
        path: "/WatchView",
        component: WatchView,
    },
    {
        path: "/RouterView",
        component: RouterView,
    },
    {
        path: "/",
        component: HomeView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;