<template>
  <v-card>
    <v-col cols="10">
      <v-card
        density="compact"
        variant="outlined"
        color="grey-lighten-1"
        class="rounded-lg ma-2"
      >
        <v-card-title class="select-active">选择接口包</v-card-title>
        <v-card-text class="ma-2">
          <c-view-autocomplete
            prefield="选择包(项目):"
            @returnSelectedValue="selectedValueEvent"
            :values="webInterfacePackageNameArray"
            :color="textbottomcolor"
          />
          <div v-if="selectedWebInterfacePackage">
            <v-row>
              <v-col cols="8">
                <c-view-text-item
                  prefield="包名:"
                  :values="selectedWebInterfacePackage.name"
                  :color="textbottomcolor"
                />
              </v-col>
              <v-col>
                <c-view-text-item
                  prefield="接口数:"
                  :values="selectedWebInterfacePackage.interfaces.length"
                  :color="textbottomcolor"
                />
              </v-col>
            </v-row>
            <c-view-text-item
              prefield="描述:"
              :values="selectedWebInterfacePackage.description"
              :color="textbottomcolor"
            />
          </div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-footer class="d-flex justify-end">
      <v-btn variant="flat" color="primary" @click="intoWebInterfacePackage()"
        >进入
      </v-btn>
    </v-footer>
  </v-card>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useWorkingInterfacePackageStore } from "@/stores/InterfaceStore.ts";
import { mockWebInterfacePackages } from "@/scripts/mock/mockInterfacePackage";
import { InterfacePackage } from "@/ctypes/interfacePackage";
import { webInterfaceObj } from "@/ctypes/interfaceObj";
import router from "@/router";
import CViewAutocomplete from "@/customization/CViewAutocomplete.vue";
import CViewTextItem from "@/customization/CViewTextItem.vue";

// 接口包
const webInterfacePacakges = ref(mockWebInterfacePackages());
// 色彩
const textbottomcolor = ref("white");
// Pinia Store
const workingInferfacePackageStore = useWorkingInterfacePackageStore();
// 接口包名称数组
const webInterfacePackageNameArray = ref([
  {
    name: "请选择包(项目)",
    id: "",
  },
]);
// 选择的包
const selectedWebInterfacePackage = ref<InterfacePackage<webInterfaceObj>>();
// 监听
watch(
  webInterfacePacakges,
  (newVal) => {
    newVal.forEach((element) => {
      webInterfacePackageNameArray.value.push({
        name: element.name,
        id: element.id,
      });
    });
  },
  { immediate: true },
);

// 子组件传递给父组件的值
function selectedValueEvent(value: string) {
  if (value != "" && value != null) {
    //查询
    selectedWebInterfacePackage.value = webInterfacePacakges.value.find(
      (element) => element.id == value,
    );
  }
}

// 进入接口
function intoWebInterfacePackage() {
  // 进入接口包
  if (selectedWebInterfacePackage.value != undefined) {
    // 更改Pinia Store
    workingInferfacePackageStore.changeWorkingPackage(
      selectedWebInterfacePackage.value,
    );
    // 跳转，路由更改
    router.push({
      name: "API",
      params: {
        id: selectedWebInterfacePackage.value.id,
      },
    });
  }
}
</script>

<style scoped lang="scss">
.bgpurple {
  background: linear-gradient(90deg, #536dfe, #448aff);
  color: white !important;
}

.select-active {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
