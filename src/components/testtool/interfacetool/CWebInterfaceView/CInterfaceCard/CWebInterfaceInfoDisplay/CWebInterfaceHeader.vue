<template>
  <v-card variant="flat" v-if="localHeader">
    <v-sheet>
      <v-row class="ma-0">
        <v-col cols="2" class="pr-0">
          <v-select
            label="Select"
            class="customer-90"
            hide-details="auto"
            :hide-no-data="true"
            density="compact"
            :items="methodArray"
            v-model="localMethod"
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="8" class="pl-0">
          <v-text-field
            hide-details="auto"
            :hide-no-data="true"
            variant="outlined"
            v-model="localHeader.url"
            density="compact"
            label="URL"
            :clearable="true"
            outlined
            class="customer-90 font-italic font-weight-medium"
          >
          </v-text-field
        ></v-col>
        <v-spacer />
        <v-col>
          <v-btn variant="flat" class="mt-2 bg-primary" @click="send()">
            发送
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>
    <v-sheet class="d-flex">
      <v-text-field
        hide-details="auto"
        :hide-no-data="true"
        variant="outlined"
        v-model="fullUrlPath"
        density="compact"
        label="Full URL"
        :clearable="true"
        outlined
        class="customer-95 font-italic font-weight-medium"
      >
      </v-text-field>
    </v-sheet>
    <v-expansion-panels class="my-2 customer-95">
      <v-expansion-panel>
        <template v-slot:title>
          <p class="text-h6">Header Params</p>
          <v-spacer />
          <v-btn
            color="blue-accent-4"
            variant="text"
            density="compact"
            @click="send()"
          >
            添加与设置Query参数
          </v-btn>
        </template>
        <v-expansion-panel-text>
          <v-card variant="flat" density="compact">
            <v-virtual-scroll :items="localHeader.params" height="300">
              <template v-slot:default="{ item }">
                <v-row class="customer-90 ma-1">
                  <v-col cols="1">
                    <v-checkbox
                      v-model="item.select"
                      class="customer-90"
                      density="compact"
                      color="green"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-text-field
                    rounded="lg"
                    v-model="item.key"
                    label="参数名"
                    class="customer-90"
                    hide-details="auto"
                    :hide-no-data="true"
                    density="compact"
                    :clearable="true"
                  />
                  <v-text-field
                    rounded="lg"
                    v-model="item.value"
                    label="参数值"
                    class="customer-90"
                    hide-details="auto"
                    :hide-no-data="true"
                    density="compact"
                    :clearable="true"
                  />
                  <v-btn
                    variant="tonal"
                    class="mt-4"
                    size="x-small"
                    icon="mdi-close"
                    color="pink"
                    @click="deleteParam(item, index)"
                  >
                  </v-btn>
                </v-row>
              </template>
            </v-virtual-scroll>
          </v-card>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider
      :thickness="5"
      class="border-opacity-25"
      color="info"
    ></v-divider>
  </v-card>
</template>

<script setup lang="ts">
import { HUrl } from "@/ctypes/interfaceObj.ts";
import { computed, ref, watch } from "vue";
import { METHOD } from "@/ctypes/cenum/cenum.ts";
import { EnumToArray } from "@/scripts/third/enumToArray.ts"; // 方法枚举列表

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
      console.log(localMethod.value);
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
