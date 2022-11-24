import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/chart/:hash",
      name: "chart",
      props: true,
      component: () => import("../views/ChartView.vue"),
    },
  ],
});

export default router;
