<template>
  <v-card variant="flat" v-if="localRequest">
    <v-expansion-panels class="customer-95">
      <v-expansion-panel>
        <template v-slot:title>
          <p class="text-h6">Request</p>
        </template>
        <template v-slot:text>
          <v-row>
            <v-col>
              <v-sheet border class="rounded-ts-xl">
                <v-toolbar
                  class="rounded-ts-xl"
                  density="compact"
                  color="white"
                  title="Header(头)"
                >
                </v-toolbar>
                <v-virtual-scroll :items="localRequest.header" height="300">
                  <template v-slot:default="{ item }">
                    <v-row class="ma-1">
                      <v-col cols="1" class="py-1">
                        <v-checkbox
                          class="pt-2"
                          v-model="item.select"
                          color="green"
                          hide-details
                          density="compact"
                        />
                      </v-col>
                      <v-col cols="5" class="px-0 py-1">
                        <v-combobox
                          class="customer-90"
                          v-model="item.key"
                          :items="headerArray"
                          label="Header 类型"
                          :clearable="true"
                          color="primary"
                          density="compact"
                          hide-details="auto"
                          :hide-no-data="true"
                        >
                        </v-combobox>
                      </v-col>
                      <v-col cols="5" class="px-0 py-1">
                        <v-text-field
                          class="customer-90"
                          v-model="item.value"
                          :clearable="true"
                          color="primary"
                          density="compact"
                          hide-details="auto"
                          :hide-no-data="true"
                        >
                          <template v-slot:label>
                            <p class="text-indigo-accent-4">Request值</p>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="1" class="px-0 py-1">
                        <v-btn
                          variant="text"
                          class="pt-4"
                          size="x-small"
                          icon
                          color="pink"
                          @click="deleteHeader(item, index)"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </template>
                </v-virtual-scroll>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet border class="rounded-te-xl">
                <v-toolbar
                  class="rounded-te-xl"
                  density="compact"
                  color="white"
                  title="Body(内容)"
                >
                </v-toolbar>
                <v-virtual-scroll
                  :items="localRequest.body.formbody"
                  height="300"
                >
                  <template v-slot:default="{ item }">
                    <v-row class="ma-1">
                      <v-col cols="1" class="py-1">
                        <v-checkbox
                          class="pt-2"
                          v-model="item.select"
                          color="green"
                          hide-details
                          density="compact"
                        />
                      </v-col>
                      <v-col cols="4" class="px-0 py-1">
                        <v-text-field
                          class="customer-90"
                          v-model="item.key"
                          :clearable="true"
                          color="primary"
                          density="compact"
                          hide-details="auto"
                          :hide-no-data="true"
                        >
                          <template v-slot:label>
                            <p class="text-indigo-accent-4">Body名</p>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" class="px-0 py-1">
                        <v-text-field
                          class="customer-90"
                          v-model="item.value"
                          :clearable="true"
                          color="primary"
                          density="compact"
                          hide-details="auto"
                          :hide-no-data="true"
                        >
                          <template v-slot:label>
                            <p class="text-indigo-accent-4">Body值</p>
                          </template>
                        </v-text-field>
                      </v-col>
                      <v-col cols="1" class="px-0 py-1">
                        <v-btn
                          variant="text"
                          class="pt-3"
                          size="x-small"
                          icon
                          color="pink"
                          @click="deleteBody(item, index)"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </template>
                </v-virtual-scroll>
              </v-sheet>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
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
