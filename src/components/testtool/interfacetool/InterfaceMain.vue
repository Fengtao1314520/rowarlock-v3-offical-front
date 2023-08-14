<template>
  <div v-if="selectedWebInterfacePackage">
    <v-card variant="flat">
      <v-card-title class="bg-primary">
        <v-row class="ma-0">
          <v-icon class="mr-4">mdi-map-marker-circle</v-icon>
          <span class="font-weight-bold">Web Interface API 网络接口</span>
          <v-spacer />
          <v-btn
            variant="flat"
            color="green-accent-4"
            class="text-white font-weight-bold"
            prepend-icon="mdi-backup-restore"
            @click="closeInterfaceMain()"
            >返回Test</v-btn
          >
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-app>
          <v-navigation-drawer floating permanent rounded location="right">
            <template v-slot:prepend>
              <v-list-item lines="two" prepend-icon="mdi-map-marker-circle">
                <v-list-item-title>
                  <v-sheet class="bg-primary font-weight-bold rounded-lg">
                    <p class="ml-2">{{ selectedWebInterfacePackage.name }}</p>
                  </v-sheet>
                </v-list-item-title>
                <v-list-item-subtitle class="mt-2">
                  <v-sheet class="bg-primary font-weight-bold rounded-lg">
                    <p class="ml-2">
                      {{
                        selectedWebInterfacePackage.interfaces.length + "个接口"
                      }}
                    </p>
                  </v-sheet>
                </v-list-item-subtitle>
              </v-list-item>
            </template>
            <v-divider />
            <v-list density="compact" nav>
              <v-list-item
                rounded="lg"
                active-class="bg-primary"
                v-for="(item, index) in selectedWebInterfacePackage.interfaces"
                :key="index"
                :title="item.name"
                :value="item"
                @click="selectWebInterface(item)"
              >
                <template v-slot:prepend>
                  <v-icon
                    color="deep-purple-accent-4"
                    icon="mdi-package-down"
                  ></v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main>
            <c-web-interface-mian
              v-if="selectedWebInterface"
              :webinterface="selectedWebInterface"
            ></c-web-interface-mian>
          </v-main>
        </v-app>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
import { ref, watch } from "vue";
import { useWorkingInterfacePackageStore } from "@/stores/InterfaceStore.ts";
import { InterfacePackage } from "@/ctypes/interfacePackage.ts";
import { webInterfaceObj } from "@/ctypes/interfaceObj.ts";
import CWebInterfaceMian from "@/components/testtool/interfacetool/CWebInterfaceView/CWebInterfaceMian.vue";

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

function selectWebInterface(webinterface: webInterfaceObj) {
  if (webinterface !== null && webinterface !== undefined) {
    selectedWebInterface.value = webinterface;
  }
}
</script>

<style lang="scss" scoped>
.bg-primary {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
