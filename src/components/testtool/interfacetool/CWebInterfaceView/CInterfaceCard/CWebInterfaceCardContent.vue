<template>
  <v-sheet v-if="localWebInterface">
    <c-web-interface-header
      :header="localWebInterface.url"
      :method="localWebInterface.request.method"
    ></c-web-interface-header>
    <c-web-interface-request
      class="mt-4"
      :request="localWebInterface.request"
    ></c-web-interface-request>
    <c-web-iterface-response
      class="mt-4"
      :response="localWebInterface.response"
    ></c-web-iterface-response>
  </v-sheet>
</template>

<script setup lang="ts">
import { webInterfaceObj } from "@/ctypes/interfaceObj.ts";
import { ref, watch } from "vue";
import CWebInterfaceHeader from "@/components/testtool/interfacetool/CWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebInterfaceHeader.vue";
import CWebInterfaceRequest from "@/components/testtool/interfacetool/CWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebInterfaceRequest.vue";
import CWebIterfaceResponse from "@/components/testtool/interfacetool/CWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebIterfaceResponse.vue";

const props = withDefaults(
  defineProps<{
    webinterface: webInterfaceObj;
  }>(),
  {},
);

const localWebInterface = ref<webInterfaceObj>();

// 监听props.webinterface的变化
watch(
  () => props.webinterface,
  (newVal) => {
    if (newVal !== null && newVal !== undefined) {
      localWebInterface.value = newVal;
      console.log(localWebInterface.value);
    }
  },
  { immediate: true },
);
</script>

<style scoped lang="scss"></style>
