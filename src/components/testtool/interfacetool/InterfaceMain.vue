<template>
  <v-card variant="flat" v-if="selectedWebInterfacePackage">
    <v-card-title class="bg-primary">
      <v-row class="ma-0">
        <v-icon class="mr-4" icon="mdi-map-marker-circle" />
        <span class="font-weight-bold">Web Interface API 网络接口</span>
        <v-spacer />
        <v-btn
          size="small"
          variant="flat"
          rounded="lg"
          color="green-accent-4"
          class="text-white font-weight-bold mt-2"
          prepend-icon="mdi-backup-restore"
          @click="closeInterfaceMain()"
          >返回Test</v-btn
        >
      </v-row>
    </v-card-title>
    <v-app>
      <v-navigation-drawer
        :floating="true"
        :permanent="true"
        rounded
        location="right"
      >
        <template v-slot:prepend>
          <v-list-item lines="two">
            <v-list-item-title>
              <v-row class="ma-0">
                <v-sheet class="bg-primary font-weight-bold">
                  <p>{{ selectedWebInterfacePackage.name }}</p>
                </v-sheet>
                <v-spacer />
                <v-btn
                  class="ma-1 font-weight-bold"
                  variant="flat"
                  size="x-small"
                  prepend-icon="mdi-plus"
                  color="green"
                  >添加</v-btn
                >
              </v-row>
            </v-list-item-title>
            <v-list-item-subtitle class="mt-2">
              <v-sheet class="bg-primary font-weight-bold rounded">
                <p class="ml-2 py-1">
                  {{ selectedWebInterfacePackage.interfaces.length + "个接口" }}
                </p>
              </v-sheet>
            </v-list-item-subtitle>
          </v-list-item>
        </template>
        <v-divider />
        <v-card variant="flat" density="compact">
          <v-card-title>工作区</v-card-title>
          <v-virtual-scroll
            height="400"
            :items="selectedWebInterfacePackage.interfaces"
          >
            <template v-slot:default="{ item, index }">
              <v-list-item
                density="compact"
                :key="index"
                :active="item.selected"
                active-class="bg-primary"
                :title="item.name"
                :value="item"
                @click="selectWebInterface(item, index)"
              >
                <template v-slot:title>
                  <p class="text-body-2">{{ item.name }}</p>
                </template>
                <template v-slot:prepend>
                  <v-icon
                    size="small"
                    color="indigo-accent-4"
                    icon="mdi-package-down"
                  ></v-icon>
                </template>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-navigation-drawer>
      <v-main>
        <c-web-interface-main
          v-if="selectedWebInterface"
          :webinterface="selectedWebInterface"
        ></c-web-interface-main>
      </v-main>
    </v-app>
  </v-card>
</template>

<script lang="ts" setup>
import router from "@/router";
import { ref, watch } from "vue";
import { useWorkingInterfacePackageStore } from "@/stores/InterfaceStore.ts";
import { InterfacePackage } from "@/ctypes/interfacePackage.ts";
import { webInterfaceObj } from "@/ctypes/interfaceObj.ts";
import CWebInterfaceMain from "@/components/testtool/interfacetool/cWebInterfaceView/CWebInterfaceMain.vue"; // 包id

// 包id
const packageId = ref(router.currentRoute.value.params.id);
// 选择的包
const selectedWebInterfacePackage = ref<InterfacePackage<webInterfaceObj>>();
// Pinia Store
const workingInferfacePackageStore = useWorkingInterfacePackageStore();
// 选择的接口
const selectedWebInterface = ref<webInterfaceObj>();

// 监听
watch(
  packageId,
  (newVal) => {
    let workingpackage = workingInferfacePackageStore.workingpackage;
    if (workingpackage.id === newVal) {
      selectedWebInterfacePackage.value = workingpackage;
    }
  },
  { immediate: true },
);

// 关闭接口包
function closeInterfaceMain() {
  router.push({ name: "test" });
}

function selectWebInterface(webinterface: webInterfaceObj, index: number) {
  // 清空所有选中
  selectedWebInterfacePackage.value?.interfaces.forEach((item) => {
    item.selected = false;
  });
  if (webinterface !== null && webinterface !== undefined) {
    selectedWebInterface.value = webinterface;
    // 选中
    selectedWebInterface.value.selected = true;
  }
}
</script>

<style lang="scss" scoped>
.bg-primary {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
