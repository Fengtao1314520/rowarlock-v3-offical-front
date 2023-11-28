<template>
  <v-sheet v-if="localWebInterface">
    <v-card-title>
      <c-web-interface-card-title
        :method="localWebInterface.request.method"
      ></c-web-interface-card-title>
    </v-card-title>
    <v-card-text class="pa-1">
      <c-web-interface-card-content
        :webinterface="localWebInterface"
      ></c-web-interface-card-content>
    </v-card-text>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

import CWebInterfaceCardTitle from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceCardTitle.vue";
import CWebInterfaceCardContent from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceCardContent.vue";
import { IuDInterface } from "@/ctypes/internal/IuDInterface.ts";

const props = withDefaults(
  defineProps<{
    webinterface: IuDInterface;
  }>(),
  {},
);

const localWebInterface = ref<IuDInterface>();

// 监听props.webinterface的变化
watch(
  () => props.webinterface,
  (newVal) => {
    if (newVal !== null && newVal !== undefined) {
      localWebInterface.value = newVal;
    }
  },
  { immediate: true },
);

// 一个计算属性 ref
const withMethodInfo = computed(() => {
  if (localWebInterface.value?.request.method === "GET") {
    return {
      value: localWebInterface.value?.request.method,
      color: "amber-accent-4",
    };
  } else {
    return {
      value: localWebInterface.value?.request.method,
      color: "green-accent-4",
    };
  }
});
</script>

<style lang="scss" scoped>
.bg-primary {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
