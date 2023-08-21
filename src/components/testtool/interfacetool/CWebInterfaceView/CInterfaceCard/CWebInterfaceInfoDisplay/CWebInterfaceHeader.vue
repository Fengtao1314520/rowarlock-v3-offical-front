<template>
  <v-card variant="flat" v-if="localHeader">
    <v-row class="ma-0">
      <v-col cols="2">
        <v-select
          label="Select"
          :items="methodArray"
          v-model="localMethod"
          class="customer-90"
          hide-details="auto"
          :hide-no-data="true"
          density="compact"
          variant="outlined"
        >
        </v-select>
      </v-col>
      <v-col cols="8">
        <v-text-field
          label="URL"
          v-model="localHeader.url"
          class="customer-90 font-italic font-weight-medium"
          hide-details="auto"
          :hide-no-data="true"
          density="compact"
          variant="outlined"
          :clearable="true"
        >
        </v-text-field
      ></v-col>
      <v-spacer />
      <v-col>
        <v-btn variant="flat" class="mt-1 bg-primary" @click="send()">
          发送
        </v-btn>
      </v-col>
    </v-row>
    <v-sheet>
      <v-text-field
        label="Full URL"
        v-model="fullUrlPath"
        class="customer-95 font-italic font-weight-medium"
        hide-details="auto"
        :hide-no-data="true"
        variant="outlined"
        density="compact"
      >
      </v-text-field>
    </v-sheet>
  </v-card>
</template>

<script setup lang="ts">
import { HUrl } from "@/ctypes/interfaceObj.ts";
import { computed, ref, watch } from "vue";
import { METHOD } from "@/ctypes/cenum/cenum.ts";
import { EnumToArray } from "@/scripts/third/enumToArray.ts";

// 方法枚举列表
const methodArray = EnumToArray(METHOD);

// Props
const props = withDefaults(
  defineProps<{
    header: HUrl;
    method: METHOD | string;
  }>(),
  {},
);

// 本地Header Url
const localHeader = ref<HUrl>();
// 本地Header Method
const localMethod = ref<METHOD | string>();

// 监听props.header的变化
watch(
  () => props.header,
  (newVal) => {
    if (newVal !== null && newVal !== undefined) {
      localHeader.value = newVal;
      //console.log(localHeader.value);
    }
  },
  { immediate: true },
);

// 监听props.method的变化
watch(
  () => props.method,
  (newVal) => {
    if (newVal !== null && newVal !== undefined) {
      localMethod.value = newVal;
    }
  },
  { immediate: true },
);

// 根据params的值，拼接完整的URL
const fullUrlPath = computed(() => {
  let tempurl: string = "";
  if (localHeader.value?.params.length === 0) {
    tempurl = localHeader.value?.url;
    return tempurl;
  } else {
    tempurl = localHeader.value?.url + "?";
    localHeader.value?.params.forEach((element) => {
      if (element.key !== "" && element.value !== "") {
        if (element.select) {
          tempurl += element.key + "=" + element.value + "&";
        }
      }
    });
    tempurl = tempurl.slice(0, tempurl.length - 1); // 去除最后一个&符号
    return tempurl;
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
