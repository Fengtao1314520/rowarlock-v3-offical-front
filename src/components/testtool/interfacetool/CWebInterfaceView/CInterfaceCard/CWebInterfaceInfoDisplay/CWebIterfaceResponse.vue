<template>
  <v-card variant="flat" v-if="localResponse">
    <v-expansion-panels class="customer-95">
      <v-expansion-panel>
        <template v-slot:title>
          <v-row class="ma-0">
            <p class="text-h6">Response</p>
            <v-chip
              :color="returnResultColor"
              dark
              :label="true"
              class="ml-6 text-h6 font-weight-black mt-1"
            >
              Code: {{ localResponse.statuscode }}
            </v-chip>
            <v-spacer />
            <p class="text-caption font-italic mt-2">
              耗时: {{ localResponse.usetime }} ms
            </p>
          </v-row>
        </template>
        <template v-slot:text>
          <v-sheet>
            <v-row class="ma-0">
              <v-col>
                <v-sheet :border="true">
                  <v-toolbar
                    density="compact"
                    class="bg-primary"
                    title="Response Header"
                  >
                  </v-toolbar>
                  <v-table density="compact" fixed-header height="300px">
                    <thead>
                      <tr>
                        <th class="text-left">Request Name</th>
                        <th class="text-left">Request Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in localResponse.header"
                        :key="index"
                      >
                        <td>{{ item.key }}</td>
                        <td>{{ item.value }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-sheet>
              </v-col>
              <v-col>
                <v-toolbar
                  class="rounded-ts-xl"
                  density="compact"
                  color="white"
                >
                  <template v-slot:title>
                    <v-row class="ma-0">
                      <p>Response body</p>
                      <v-spacer />
                      <v-chip
                        color="primary"
                        dark
                        :label="true"
                        outlined
                        class="font-weight-black"
                      >
                        JSON
                      </v-chip>
                    </v-row>
                  </template>
                </v-toolbar>
                <div>
                  <vue-json-pretty
                    :data="returnJsonBody"
                    :deep="2"
                    :virtual="true"
                  />
                </div>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet>
            <v-toolbar
              density="compact"
              class="bg-primary"
              title="Request Header Full"
            >
            </v-toolbar>
            <v-table density="compact" fixed-header height="300px">
              <thead>
                <tr>
                  <th class="text-left">Request Name</th>
                  <th class="text-left">Request Value</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in localResponse.reqheader"
                  :key="index"
                >
                  <td>{{ item.key }}</td>
                  <td>{{ item.value }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-sheet>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup lang="ts">
import { HResponse } from "@/ctypes/interfaceObj.ts";
import { computed, ref, watch } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

// props
const props = withDefaults(
  defineProps<{
    response: HResponse;
  }>(),
  {},
);

// 本地response
const localResponse = ref<HResponse>();

// 监听props.response的变化
watch(
  () => props.response,
  (newVal) => {
    if (newVal !== null && newVal !== undefined) {
      localResponse.value = newVal;
      //console.log(localRequest.value);
    }
  },
  { immediate: true },
);

/**
 * 按照status返回颜色
 */
const returnResultColor = computed(() => {
  if (localResponse.value?.statuscode === 200) {
    return "green";
  } else {
    return "red";
  }
});

/**
 * 返回JSON格式的body
 */
const returnJsonBody = computed(() => {
  if (localResponse.value?.body.startsWith("{") === true) {
    try {
      // JSON格式
      return JSON.parse(localResponse.value.body);
    } catch {
      return null;
    }
  }
});
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
