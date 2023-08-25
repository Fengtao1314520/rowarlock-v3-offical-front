<template>
  <v-sheet>
    <v-app>
      <v-app-bar :collapse="true" density="compact" color="primary">
        <v-app-bar-nav-icon
          icon="mdi-menu"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        location="left"
        :temporary="true"
        :floating="true"
        :permanent="true"
      >
        <v-list
          density="compact"
          :nav="true"
          v-for="(pitem, i) in webInterfacePackageArray"
          :key="i"
        >
          <v-list-group append-icon="mdi-pan-down">
            <template v-slot:activator="{ props }">
              <v-list-item
                class="my-0"
                density="compact"
                color="primary"
                v-bind="props"
                :title="pitem.name"
              >
                <template v-slot:prepend>
                  <v-icon
                    icon="mdi-folder"
                    size="small"
                    color="blue-accent-4"
                    class="mr-2"
                  />
                </template>
              </v-list-item>
            </template>
            <v-list-item
              density="compact"
              color="primary"
              v-for="(citem, j) in pitem.interfaces"
              :key="j"
              :title="citem.name"
              :value="citem"
              @click="openWebInterface(citem, j)"
            >
              <template v-slot:prepend>
                <v-chip
                  :color="chipColor(citem.request.method).color"
                  :label="true"
                  size="small"
                  class="mr-2 font-weight-bold"
                  >{{ citem.request.method }}</v-chip
                >
              </template>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <web-interface-card ref="webInterfaceCardOpt" />
      </v-main>
    </v-app>
  </v-sheet>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useWorkingOneTestToolStore } from "@/stores/OneTestToolStore.ts";
import { webInterfaceObj } from "@/ctypes/interfaceObj.ts";
import WebInterfaceCard from "@/components/testtool/interfacetool/cWebInterfaceView/CInterfaceCard/WebInterfaceCard.vue"; // webinterface的包列表

const drawer = ref(true);

// webinterface的包列表
const webInterfacePackageArray = ref();

// Pinia Store
const workingOneTestToolStore = useWorkingOneTestToolStore();

// 子组件操作
const webInterfaceCardOpt = ref();

onMounted(() => {
  webInterfacePackageArray.value = workingOneTestToolStore.workingOneTestTool;
});

// 一个计算属性 ref
function chipColor(method: string) {
  if (method === "GET") {
    return {
      color: "amber-accent-4",
    };
  } else {
    return {
      color: "green-accent-4",
    };
  }
}

// 打开一个webinterface
function openWebInterface(webInterface: webInterfaceObj, index: number) {
  webInterfaceCardOpt.value.addWebInterface(webInterface);
}
</script>

<style scoped lang="scss">
.v-list-item {
  margin-top: 0.3125rem;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem !important;
}
.bg-primary {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
