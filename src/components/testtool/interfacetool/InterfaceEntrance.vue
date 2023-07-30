<template>
  <v-card>
    <v-row>
      <v-col>
        <v-card class="rounded-lg ma-2 bgpurple">
          <v-card-title>选择接口包</v-card-title>
          <v-card-text>
            <c-view-autocomplete-none-sheet
              prefield="选择包(项目):"
              @returnSelectedValue="selectedValueEvent"
              :values="webInterfacePacakgeNameArray"
              :color="textbottomcolor"
            />
            <div v-if="selectedWebInterfacePacakge">
              <v-row>
                <v-col cols="8">
                  <c-view-text-none-sheet
                    prefield="包名:"
                    :values="selectedWebInterfacePacakge.name"
                    :color="textbottomcolor"
                  />
                </v-col>
                <v-col>
                  <c-view-text-none-sheet
                    prefield="接口数:"
                    :values="selectedWebInterfacePacakge.interfaces.length"
                    :color="textbottomcolor"
                  />
                </v-col>
              </v-row>
              <c-view-text-none-sheet
                prefield="描述:"
                :values="selectedWebInterfacePacakge.description"
                :color="textbottomcolor"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card variant="flat" class="ma-2">
          <v-card-title>当前统计</v-card-title>
          <c-view-progress-linear
            color="indigo-accent-2"
            prefield="总计:"
            :viewvalue="interfacestatusnumber.detail.totalnumber"
            :progressvalue="interfacestatusnumber.cover.totalnumber"
          />
          <c-view-progress-linear
            color="green-accent-4"
            prefield="已完成:"
            :viewvalue="interfacestatusnumber.detail.completenumber"
            :progressvalue="interfacestatusnumber.cover.completenumber"
          />
        </v-card>
      </v-col>
    </v-row>

    <v-footer class="d-flex justify-end">
      <v-btn variant="flat" color="primary" @click="intoWebInterfacePackage()"
        >进入</v-btn
      >
    </v-footer>
  </v-card>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { mockInterfaceInfos } from "@/scripts/mock/MockInterface";
import CViewProgressLinear from "@/customization/CViewProgressLinear.vue";
import { mockWebInterfacePackages } from "@/scripts/mock/mockInterfacePackage";
import { InterfacePackage } from "@/ctypes/interfacePackage";
import { webInterfaceObj } from "@/ctypes/interfaceObj";
import router from "@/router";
import CViewTextNoneSheet from "@/customization/CViewTextNoneSheet.vue";
import CViewAutocompleteNoneSheet from "@/customization/CViewAutocompleteNoneSheet.vue";

// 接口态数
const interfacestatusnumber = ref(mockInterfaceInfos());
const webInterfacePacakges = ref(mockWebInterfacePackages());

const textbottomcolor = ref("white");
const webInterfacePacakgeNameArray = ref([
  {
    name: "请选择包(项目)",
    id: "",
  },
]);

// 选择的包
const selectedWebInterfacePacakge = ref<InterfacePackage<webInterfaceObj>>();

// 监听
watch(
  webInterfacePacakges,
  (newVal) => {
    newVal.forEach((element) => {
      webInterfacePacakgeNameArray.value.push({
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
    selectedWebInterfacePacakge.value = webInterfacePacakges.value.find(
      (element) => element.id == value,
    );
  }
}

// 进入接口
function intoWebInterfacePackage() {
  console.log("进入接口");
  // 进入接口包
  if (selectedWebInterfacePacakge.value != undefined) {
    // 跳转，路由更改
    router.push({
      name: "API",
      params: {
        id: selectedWebInterfacePacakge.value.id,
      },
    });
  }
}
</script>

<style scoped lang="scss">
.gaugechart {
  min-width: 240px;
  min-height: 240px;
  max-width: 300px;
  max-height: 400px;
}
.bgpurple {
  background: linear-gradient(90deg, #82b1ff, #448aff);
  color: white !important;
}
</style>
