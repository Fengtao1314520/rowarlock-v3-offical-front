<template>
  <v-sheet>
    <v-card
      class="rounded-lg ma-2"
      color="grey-lighten-1"
      density="compact"
      variant="outlined"
    >
      <v-row class="ma-0">
        <v-col cols="4">
          <test-type-data-view :interfacestatusnumber="detailStatistic" />
        </v-col>
        <!--info: 选择一项测试工具的详情页面，应该无视类型-->
        <v-col>
          <v-sheet>
            <v-row>
              <v-col cols="4">
                <c-view-text-none-sheet
                  :values="gettedTestContent.length"
                  color="primary"
                  prefield="包数量:"
                />
              </v-col>
              <v-col class="d-flex">
                <c-view-text-none-sheet
                  :values="testContentStatistic.pretotal"
                  color="primary"
                  prefield="预置关联:"
                />
                <c-view-text-none-sheet
                  :values="testContentStatistic.vartotal"
                  color="primary"
                  prefield="参数:"
                />
              </v-col>
            </v-row>
            <v-btn-toggle
              v-model="selectedMenuButton"
              class="ma-1"
              color="deep-purple-accent-3"
              group
              rounded="0"
              variant="tonal"
            >
              <v-btn value="left"> 新增包 </v-btn>
              <v-btn value="center"> 删除全部</v-btn>
              <v-btn value="right"> 预置关联 </v-btn>
              <v-btn value="justify"> 参数管理 </v-btn>
            </v-btn-toggle>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>

    <v-footer class="d-flex justify-end">
      <v-btn
        color="blue-accent-3"
        variant="tonal"
        rounded="lg"
        @click="enterIntoTestTool(selectTool)"
        >进入
      </v-btn>
    </v-footer>
  </v-sheet>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
import router from "@/router";
import { mockInterfaceInfos } from "@/scripts/mock/MockInterface.ts";
import TestTypeDataView from "@/components/testtool/interfacetool/detail/TestTypeDataView.vue";
import { mockWebInterfacePackages } from "@/scripts/mock/mockInterfacePackage.ts";
import CViewTextNoneSheet from "@/customization/CViewTextNoneSheet.vue";
import { useWorkingOneTestToolStore } from "@/stores/OneTestToolStore.ts";

// selectTool 选择的工具
const props = withDefaults(
  defineProps<{
    selectTool: {};
  }>(),
  {},
);

// 获取到的测试内容, info: 应该无数内容的类型
const gettedTestContent = ref();
// 详情统计
const detailStatistic = ref();
// 测试内容统计(解析后的)
const testContentStatistic = ref();
// 选择的操作
const selectedMenuButton = ref("");
// Pinia Store
const workingOneTestToolStore = useWorkingOneTestToolStore();

// 监听
watch(
  props.selectTool,
  (newVal: any) => {
    if (newVal !== undefined) {
      // MOCK 数据, 返回一个测试tool的类型数据
      detailStatistic.value = mockInterfaceInfos();

      if (newVal.type === "api") {
        gettedTestContent.value = mockWebInterfacePackages();
      }
    }
  },
  { immediate: true },
);

// 监听更改的testContent内容
watch(
  gettedTestContent,
  (newVal) => {
    testContentStatistic.value = {
      pretotal: 0,
      vartotal: 0,
    };

    newVal.forEach((element: any) => {
      testContentStatistic.value.pretotal += element.preinterfaces.length;
      testContentStatistic.value.vartotal += element.localvariables.length;
    });
  },
  { immediate: true },
);

function enterIntoTestTool(selectTool: any) {
  //console.log(selectTool);
  if (selectTool.type === "api") {
    // 更改Pinia Store
    workingOneTestToolStore.changeWorkingOneTestTool(gettedTestContent.value);
    // 跳转
    router.push({
      name: "WebInterface",
    });
  }
}
</script>

<style lang="scss" scoped>
.bg-primary {
  background: linear-gradient(180deg, #448aff, #536dfe);
  color: white !important;
}
</style>
