<template>
  <v-sheet border v-if="localResponse" class="customer-95">
    <v-toolbar density="default">
      <p class="pl-4 text-h6">Response</p>
      <v-spacer />
      <v-chip
        :color="returnResultColor"
        dark
        :label="true"
        class="mr-4 text-caption font-weight-black"
      >
        Code: {{ localResponse.statuscode }}
      </v-chip>
      <p class="text-caption font-italic mr-4">
        耗时: {{ localResponse.usetime }} ms
      </p>
    </v-toolbar>
    <v-tabs v-model="tab" color="primary">
      <v-tab value="Body">Body(内容)</v-tab>
      <v-tab value="Headers">Header(标头)</v-tab>
      <v-tab value="Cookies">Cookies(Cookies)</v-tab>
      <v-tab value="FullRequest">FullRequests(完整头)</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="Body">
        <vue-json-pretty
          :showLineNumber="true"
          :data="returnJsonBody"
          :deep="2"
          :virtual="true"
          :height="200"
        />
      </v-window-item>
    </v-window>
    <v-window v-model="tab">
      <v-window-item value="Headers">
        <v-table density="compact" fixed-header height="300px">
          <thead>
            <tr>
              <th class="px-0">
                <v-sheet color="grey-lighten-3">
                  <p class="pl-4 text-body-1 font-weight-bold">Request Name</p>
                </v-sheet>
              </th>
              <th class="px-0">
                <v-sheet color="grey-lighten-3">
                  <p class="pl-4 text-body-1 font-weight-bold">Request Value</p>
                </v-sheet>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in localResponse.header" :key="index">
              <td>{{ item.key }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>
    <v-window v-model="tab">
      <v-window-item value="FullRequest">
        <v-table density="compact" fixed-header height="200">
          <thead>
            <tr>
              <th class="px-0">
                <v-sheet color="grey-lighten-3">
                  <p class="pl-4 text-body-1 font-weight-bold">
                    Full Request Name
                  </p>
                </v-sheet>
              </th>
              <th class="px-0">
                <v-sheet color="grey-lighten-3">
                  <p class="pl-4 text-body-1 font-weight-bold">
                    Full Request Value
                  </p>
                </v-sheet>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in localResponse.reqheader" :key="index">
              <td>{{ item.key }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>
    <v-window v-model="tab">
      <v-window-item value="Cookies">
        <v-table density="compact" fixed-header height="200">
          <thead>
            <tr>
              <th class="px-0">
                <v-sheet color="grey-lighten-3">
                  <p class="pl-4 text-body-1 font-weight-bold">Cookie Name</p>
                </v-sheet>
              </th>
              <th class="px-0">
                <v-sheet color="grey-lighten-3">
                  <p class="pl-4 text-body-1 font-weight-bold">Cookie Value</p>
                </v-sheet>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in localResponse.cookies" :key="index">
              <td>{{ item.key }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-window-item>
    </v-window>
  </v-sheet>
</template>

<script setup lang="ts">
import { HResponse } from "@/ctypes/internal/IuDInterface.ts";
import { computed, ref, watch } from "vue";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

const tab = ref("Body");

// 本地response
const localResponse = ref<HResponse>();
// props
const props = withDefaults(
  defineProps<{
    response: HResponse;
  }>(),
  {},
);

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
