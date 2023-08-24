<template>
  <v-card color="grey-lighten-4" variant="flat" class="ma-2">
    <v-row class="ma-0">
      <v-col cols="3">
        <v-expansion-panels :multiple="true" v-model="panel">
          <v-expansion-panel
            rounded
            v-model="panel"
            v-for="(item, index) in testtoolinfos"
            :key="index"
          >
            <v-expansion-panel-title
              expand-icon="mdi-plus"
              collapse-icon="mdi-minus"
              class="bg-primary"
            >
              <p class="text-body-1 font-weight-bold">{{ item.title }}</p>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="ma-n1">
                <p class="text-caption font-weight-bold">
                  {{ item.content }}
                </p>
                <v-spacer />
                <v-btn
                  size="small"
                  color="primary"
                  variant="tonal"
                  append-icon="mdi-arrow-right"
                  @click="moreDetail(item)"
                  >更多</v-btn
                >
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col>
        <v-card density="compact" variant="flat" v-if="selectedTool">
          <v-card-title class="bg-primary"
            >{{ selectedTool.title }}Detail</v-card-title
          >
          <test-type-detail :select-tool="selectedTool" />
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TestTypeDetail from "@/components/testtool/interfacetool/detail/TestTypeDetail.vue";

// panel的默认打开值
const panel = ref([0, 1]);

// 选中的工具
const selectedTool = ref<any | null>(null);

// 当前工具列表
const testtoolinfos = ref([
  {
    title: "接口测试",
    type: "api",
    content: "针对web接口进行测试",
  },
  {
    title: "Web UI测试",
    type: "webui",
    content: "针对web页面进行测试",
  },
]);

/**
 * 更多详情
 * @param item
 */
function moreDetail(item: any) {
  selectedTool.value = item;
}
</script>

<style scoped lang="scss">
.bg-primary {
  background: linear-gradient(180deg, #448aff, #536dfe);
  color: white !important;
}
</style>
