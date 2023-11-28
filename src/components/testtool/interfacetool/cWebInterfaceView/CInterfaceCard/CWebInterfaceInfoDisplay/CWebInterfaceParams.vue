<template>
  <v-card variant="flat" v-if="localHeader">
    <v-sheet class="d-flex justify-end">
      <v-btn color="blue-accent-4" variant="text" @click="addParams()">
        添加与设置Query参数
      </v-btn>
    </v-sheet>
    <v-virtual-scroll :items="localHeader.params" height="200" class="my-2">
      <template v-slot:default="{ item, index }">
        <v-list-item density="compact">
          <template v-slot:prepend>
            <v-checkbox-btn
              color="green"
              :model-value="item.selected"
              @click="item.selected = !item.selected"
            ></v-checkbox-btn>
          </template>
          <template v-slot>
            <v-row class="ma-1">
              <v-text-field
                label="参数名"
                v-model="item.key"
                class="customer-90"
                hide-details="auto"
                :hide-no-data="true"
                density="compact"
                variant="outlined"
                :clearable="true"
              />
              <v-text-field
                label="参数值"
                v-model="item.value"
                class="customer-90"
                hide-details="auto"
                :hide-no-data="true"
                density="compact"
                variant="outlined"
                :clearable="true"
              />
            </v-row>
          </template>
          <template v-slot:append>
            <v-btn
              variant="text"
              size="x-small"
              icon="mdi-close"
              color="pink-accent-4"
              @click="deleteParam(item, index)"
            >
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script setup lang="ts">
import { HUrl } from "@/ctypes/internal/IuDInterface.ts";
import { ref, watch } from "vue";
import { METHOD } from "@/ctypes/cenum/cenum.ts";
import { EnumToArray } from "@/scripts/third/enumToArray.ts";
import { send } from "vite";

// 方法枚举列表
const methodArray = EnumToArray(METHOD);

// Props
const props = withDefaults(
  defineProps<{
    header: HUrl;
  }>(),
  {},
);

// 本地Header Url
const localHeader = ref<HUrl>();

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

function addParams() {
  console.log("send");
}
// 删除参数
function deleteParam(item: any, index: number) {
  localHeader.value?.params.splice(index, 1);
}
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
