<template>
  <component :is="currentComponent.view"></component>
</template>

<script setup lang="ts">
import { reactive, shallowRef, watch } from "vue";
import Layout from "@/layout/layout/Layout.vue";
import Blank from "@/layout/blank/Blank.vue";
import { useRouter } from "vue-router";
/**
 * @description: 根据路由meta.layout判断使用哪个布局
 */

const router = useRouter();
const currentComponent = shallowRef({
  view: Layout,
});

watch(
  () => router.currentRoute.value,
  (routeValue) => {
    switch (routeValue.meta["layout"]) {
      case "blank":
        currentComponent.value.view = Blank;

        break;
      case "layout":
        currentComponent.value.view = Layout;
        break;
      default:
        currentComponent.value.view = Blank;
        break;
    }
  },
  { immediate: true, deep: true }
);
</script>
