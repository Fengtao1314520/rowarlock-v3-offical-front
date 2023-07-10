// Composable
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    //component: () => import("@/layout/blank/Blank.vue"),
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          layout: "blank",
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/author",
        name: "Author",
        meta: {
          layout: "blank",
        },
        component: () => import("@/components/author/Author.vue"),
      },
      {
        path: "/main",
        name: "Main",
        meta: {
          layout: "layout",
        },
        component: () => import("@/components/dashboard/Main.vue"),
      },
      {
        path: "/release",
        name: "Release",
        meta: {
          layout: "layout",
        },
        component: () => import("@/components/release/ReleaseMain.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
