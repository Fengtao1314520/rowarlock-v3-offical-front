// Composable
import { createRouter, createWebHashHistory, Router } from "vue-router";

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
        component: () => import("@/views/Home.vue"),
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
      {
        path: "/test",
        name: "test",
        meta: {
          layout: "layout",
        },
        component: () => import("@/components/testTool/TestToolMain.vue"),
      },
      {
        path: "/test/interface",
        children: [
          {
            path: "web", // 定义参数名为id
            name: "webinterface",
            meta: {
              layout: "layout",
            },
            component: () =>
              import(
                "@/components/testTool/interfaceTool/WebInterfaceMain.vue"
              ),
          },
        ],
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
