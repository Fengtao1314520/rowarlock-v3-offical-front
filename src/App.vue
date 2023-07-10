<template>
  <component :is="currentComponent" />
</template>

<script setup lang="ts">
import { shallowRef, watch } from "vue";
import Layout from "@/layout/layout/Layout.vue";
import Blank from "@/layout/blank/Blank.vue";
import { useRouter } from "vue-router";

/**
 * @description: 根据路由meta.layout判断使用哪个布局
 */
const router = useRouter();
/**
 * layout
 */
const currentComponent = shallowRef(Layout);

watch(
  () => router.currentRoute.value,
  (routeValue) => {
    switch (routeValue.meta["layout"]) {
      case "blank":
        currentComponent.value = Blank;
        break;
      case "layout":
        currentComponent.value = Layout;
        break;
      default:
        currentComponent.value = Blank;
        break;
    }
  },
  { immediate: true, deep: true }
);
</script>
