<template>
  <v-sheet v-if="localWebInterface">
    <c-web-interface-header
      :header="localWebInterface.url"
      :method="localWebInterface.request.method"
    ></c-web-interface-header>
    <v-card variant="flat">
      <v-card-title>
        <v-tabs v-model="tab" color="primary">
          <v-tab value="Params">Params(参数)</v-tab>
          <v-tab value="Headers">Header(标头)</v-tab>
          <v-tab value="Body">Body(内容)</v-tab>
        </v-tabs>
      </v-card-title>
      <v-sheet border class="customer-95">
        <v-window v-model="tab">
          <v-window-item value="Params">
            <c-web-interface-params :header="localWebInterface.url" />
          </v-window-item>
        </v-window>
        <v-window v-model="tab">
          <v-window-item value="Headers">
            <c-web-interface-request-headers
              :request="localWebInterface.request"
            />
          </v-window-item>
        </v-window>
        <v-window v-model="tab">
          <v-window-item value="Body">
            <c-web-interface-request-body
              :request="localWebInterface.request"
            />
          </v-window-item>
        </v-window>
      </v-sheet>
    </v-card>
    <c-web-iterface-response
      class="mt-4"
      :response="localWebInterface.response"
    ></c-web-iterface-response>
  </v-sheet>
</template>

<script setup lang="ts">
import { webInterfaceObj } from "@/ctypes/interfaceObj.ts";
import { ref, watch } from "vue";
import CWebInterfaceHeader from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebInterfaceHeader.vue";
import CWebIterfaceResponse from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebIterfaceResponse.vue";
import CWebInterfaceParams from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebInterfaceParams.vue";
import CWebInterfaceRequestHeaders from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebInterfaceRequestHeaders.vue";
import CWebInterfaceRequestBody from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/CWebInterfaceInfoDisplay/CWebInterfaceRequestBody.vue";

const props = withDefaults(
  defineProps<{
    webinterface: webInterfaceObj;
  }>(),
  {},
);

const tab = ref("Headers");

const localWebInterface = ref<webInterfaceObj>();

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
</script>

<style scoped lang="scss">
.customer-90 {
  transform: scale(0.9);
}
.customer-95 {
  transform: scale(0.95);
}
.bg-primary {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
