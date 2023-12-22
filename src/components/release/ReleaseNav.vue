<template>
  <v-navigation-drawer
    :rail="railNav"
    @click="railNav = false"
    location="right"
  >
    <v-list-item title="释放记录" prepend-icon="mdi-clipboard-list-outline">
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="railNav = !railNav"
        >
        </v-btn>
      </template>
    </v-list-item>
    <v-divider />
    <v-list>
      <v-list-group
        class="rounded-e-xl"
        v-for="(item, index) in localReleaseArray"
        :key="index"
        append-icon="mdi-chevron-down"
        @click="getReleaseListByUserId(item)"
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon class="mr-0" color="deep-purple-accent-4"
                >mdi-sun-compass</v-icon
              >
            </template>
            <template v-slot:title>
              <v-sheet
                color="blue-accent-2"
                class="ml-2 text-h6 text-white rounded-e-xl"
              >
                <p class="font-weight-bold ml-2">
                  {{ item.year }}
                </p>
              </v-sheet>
            </template>
          </v-list-item>
        </template>
        <v-list>
          <v-list-item
            class="py-0"
            v-for="(relItem, relIndex) in currentYearRelease"
            :key="relIndex"
            @click="selectSingleReleaseRecord(relItem)"
          >
            <template v-slot:prepend>
              <v-icon class="mr-0" color="deep-purple-accent-4"
                >mdi-alpha-t-box</v-icon
              >
            </template>
            <template v-slot:title>
              <v-sheet
                color="blue-accent-2"
                class="ml-2 text-body-2 text-white"
              >
                <p class="font-weight-bold ml-2">
                  {{ relItem.ReleaseName }}
                </p>
              </v-sheet>
            </template>
          </v-list-item>
        </v-list>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { HttpRelease } from "@/scripts/networks/communicate/httpRelease.ts";
import { CuDRelease } from "@/scripts/cTypes/communicate/CuDRelease.ts";

const props = defineProps({
  releaseRecord: Array<{ year: number; count: number }>,
});
//是否缩起NAV
const railNav = ref<boolean>(false);

//当前选择的年份的释放记录列表
const currentYearRelease = ref<Array<CuDRelease>>([]);

// 事件，发送给父组件
const emit = defineEmits(["selectSingleReleaseRecord"]);

// 本地释放记录列表
const localReleaseArray = ref<
  Array<{
    year: number;
    count: number;
  }>
>([]);

watch(
  () => props.releaseRecord,
  (newValue) => {
    if (newValue) {
      localReleaseArray.value = newValue;
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

/**
 * 获取用户的释放记录,对应一个某一个具体年
 * @param item
 */
async function getReleaseListByUserId(item: any) {
  // console.log(item);
  // info 获取当前年的释放记录
  let userid = "c5dfead9-9bb1-4800-a00c-da71ccb5fe19";
  let params = {
    userid: userid,
    qtype: "list",
    year: item.year,
  };
  // 获取用户的task
  let tempTasks = await HttpRelease.GetReleaseListByUserId(userid, params);
  if (tempTasks.data.rescode === 200) {
    currentYearRelease.value = tempTasks.data.resdata[0];
    console.log(currentYearRelease.value);
  } else {
    //todo:mock数据
  }
}

/**
 * @description 选择单个释放记录
 * @param item
 */
function selectSingleReleaseRecord(item: CuDRelease) {
  // 转入父组件
  emit("selectSingleReleaseRecord", item);
}
</script>

<style scoped lang="scss"></style>
