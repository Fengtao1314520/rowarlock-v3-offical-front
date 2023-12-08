<template>
  <v-card variant="flat">
    <v-tabs v-model="selectedWebInterface" :color="withMethodInfo.color">
      <v-tab
        variant="plain"
        v-for="item in openedwebInterfaceArray"
        :key="item.id"
        :value="item"
      >
        <v-sheet class="d-flex">
          <c-web-interface-card-title
            class="mr-2"
            :method="item.request.method"
          ></c-web-interface-card-title>
          <p class="text-caption">{{ item.name }}</p>
        </v-sheet>
      </v-tab>
    </v-tabs>
    <v-window v-model="selectedWebInterface">
      <v-window-item
        v-for="item in openedwebInterfaceArray"
        :key="item.id"
        :value="item"
      >
        <c-web-interface-card-content :webinterface="item" />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CWebInterfaceCardTitle from "@/components/testTool/interfaceTool/cWebInterfaceView/CInterfaceCard/CWebInterfaceCardTitle.vue";
import CWebInterfaceCardContent from "@/components/testTool/interfaceTool/cWebInterfaceView/CInterfaceCard/CWebInterfaceCardContent.vue";
import { IuDInterface } from "@/scripts/cTypes/internal/IuDInterface.ts";

const selectedWebInterface = ref<IuDInterface>();
const openedwebInterfaceArray = ref<IuDInterface[]>();

// 一个计算属性 ref
const withMethodInfo = computed(() => {
  if (selectedWebInterface.value?.request.method === "GET") {
    return {
      color: "amber-accent-4",
    };
  } else {
    return {
      color: "green-accent-4",
    };
  }
});

// 添加一个webinterface
function addWebInterface(webInterface: IuDInterface) {
  if (openedwebInterfaceArray.value != undefined) {
    // info: 需要检查是否存在同id
    let index = openedwebInterfaceArray.value.findIndex(
      (item) => item.id === webInterface.id,
    );
    if (index === -1) {
      openedwebInterfaceArray.value.push(webInterface);
    }
  } else {
    // 置空
    openedwebInterfaceArray.value = [];
    openedwebInterfaceArray.value.push(webInterface);
  }
}

defineExpose({ addWebInterface });
</script>

<style scoped lang="scss"></style>
