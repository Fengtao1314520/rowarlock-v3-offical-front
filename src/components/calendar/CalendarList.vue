<template>
  <v-card variant="flat">
    <v-sheet
      label
      size="large"
      color="indigo-accent-2"
      class="d-flex font-weight-bold pa-2 text-subtitle-1 text-white"
    >
      <v-icon icon="fa:fas fa-dice" size="x-small" class="mb-1 mr-2" />
      <p>个人汇总</p>
    </v-sheet>
    <v-card rounded variant="flat" color="grey-lighten-5">
      <v-sheet class="ma-4" color="grey-lighten-5">
        <p class="text-h5">任务类型</p>
      </v-sheet>
      <v-sheet class="mx-1" color="grey-lighten-5">
        <p class="text-6 ml-4">
          当前有
          <strong>{{ localDailyTasks.length }}个</strong
          >任务等待你完成。✿✿ヽ(°▽°)ノ✿
        </p>
        <v-row class="ma-0 mt-6">
          <v-col v-for="(item, i) in groupedTasks" :key="i" :value="item">
            <v-row class="ma-0">
              <v-avatar
                rounded="0"
                size="64"
                :color="item.typeColor"
                class="rounded-xl"
              >
                <v-icon :icon="item.typeIcon" color="white" class="mx-1" />
              </v-avatar>
              <div class="ml-4">
                <p>{{ transTitle(item.name) }}</p>
                <p class="text-h6 text-right">{{ item.items.length }}</p>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">
import "@/styles/global.scss";
import {
  mockGroupAddExtra,
  mockGroupTaskByType,
  mockTransTitleZH,
} from "@/scripts/mock/pages/calendarList.ts";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";

// 任务列表
const props = defineProps({
  // 当前日期
  date: Date,
  // task
  dailyTasks: Array<IuDTask>,
});

// 获取本地任务
let localDailyTasks: Array<IuDTask> = props.dailyTasks as Array<IuDTask>;
// 获取本地分组任务
let localGroupedTasks = mockGroupTaskByType(localDailyTasks);
// 赋值主alert颜色
let groupedTasks = mockGroupAddExtra(localGroupedTasks);

/**
 * @description 返回任务标题
 * @param title 任务标题
 */
function transTitle(title: string) {
  return mockTransTitleZH(title);
}
</script>

<style scoped lang="scss">
.gradient-color {
  background-image: linear-gradient(to right, var(--startColor), #f5f5f5);
}
</style>
