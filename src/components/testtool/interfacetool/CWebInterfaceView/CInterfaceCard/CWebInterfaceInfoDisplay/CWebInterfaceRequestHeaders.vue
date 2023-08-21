<template>
  <v-card variant="flat" v-if="localRequest">
    <v-virtual-scroll :items="localRequest.header" height="200" class="my-2">
      <template v-slot:default="{ item, index }">
        <v-list-item density="compact">
          <template v-slot:prepend>
            <v-checkbox-btn
              color="green"
              :model-value="item.select"
              @click="item.select = !item.select"
            ></v-checkbox-btn>
          </template>
          <template v-slot>
            <v-row class="ma-1">
              <v-combobox
                label="Header 类型"
                v-model="item.key"
                :items="headerArray"
                class="customer-90"
                hide-details="auto"
                :hide-no-data="true"
                density="compact"
                variant="outlined"
                :clearable="true"
              >
              </v-combobox>
              <v-text-field
                label="Header 值"
                v-model="item.value"
                class="customer-90"
                hide-details="auto"
                :hide-no-data="true"
                density="compact"
                variant="outlined"
                :clearable="true"
              >
              </v-text-field>
            </v-row>
          </template>
          <template v-slot:append>
            <v-btn
              variant="text"
              size="x-small"
              icon="mdi-close"
              color="pink-accent-4"
              @click="deleteHeader(item, index)"
            >
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script setup lang="ts">
import { HRequest } from "@/ctypes/interfaceObj.ts";
import { ref, watch } from "vue";
import { HEADERKEY } from "@/ctypes/cenum/cenum.ts";
import { EnumToArray } from "@/scripts/third/enumToArray.ts"; // 方法枚举列表

// 方法枚举列表
const headerArray = EnumToArray(HEADERKEY);

// props
const props = withDefaults(
  defineProps<{
    request: HRequest;
  }>(),
  {},
);

// 本地request
const localRequest = ref<HRequest>();

// 监听props.header的变化
watch(
  () => props.request,
  (newVal) => {
    if (newVal !== null && newVal !== undefined) {
      localRequest.value = newVal;
      //console.log(localRequest.value);
    }
  },
  { immediate: true },
);

// 删除header
function deleteHeader(item: any, index: number) {
  localRequest.value?.header.splice(index, 1);
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
