<template>
  <v-card color="grey-lighten-4" variant="flat" class="ma-2">
    <v-row class="ma-0">
      <v-col cols="3">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel
            rounded
            v-model="panel"
            v-for="(item, index) in testtoolinfos"
            :key="index"
          >
            <v-expansion-panel-title
              expand-icon="mdi-plus"
              collapse-icon="mdi-minus"
              class="select-active"
            >
              <p class="text-body-1 font-weight-bold">{{ item.title }}</p>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row class="ma-0">
                <p class="mt-1 text-subtitle-2">
                  {{ item.content }}
                </p>
                <v-spacer />
                <v-btn
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
        <v-card rounded variant="flat" v-if="selectedTool !== null">
          <v-card-title>详情</v-card-title>
          <v-divider />
          <v-card-text v-if="selectedTool.type === 'api'" class="pa-1">
            <interface-entrance></interface-entrance>
          </v-card-text>
          <v-card-text v-else-if="selectedTool.type === 'webui'" class="pa-1">
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from "vue";
import InterfaceEntrance from "@/components/testtool/interfacetool/InterfaceEntrance.vue";

const panel = ref([0, 1]);

const selectedTool = ref<any | null>(null);

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

function moreDetail(item: any) {
  selectedTool.value = item;
}
</script>

<style scoped lang="scss">
.select-active {
  background: linear-gradient(98deg, #536dfe, #304ffe);
  color: white !important;
}
</style>
