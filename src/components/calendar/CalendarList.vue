<template>
  <v-card flat>
    <v-sheet
      label
      size="large"
      class="gradient-color font-weight-bold pa-2 text-subtitle-1 text-white"
      :style="{ '--startColor': '#7E57C2' }"
    >
      <v-icon icon="fa:fas fa-dice" size="x-small" class="mb-1 mr-2"></v-icon>
      个人汇总
    </v-sheet>
    <v-card-text>
      <v-card rounded flat color="grey-lighten-5">
        <v-card-title>任务类型</v-card-title>
        <v-card-text>
          <p class="text-6">
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
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import "@/styles/global.scss";
import {
  mockGroupAddExtra,
  mockGroupDailyTask,
  mockTransTitleZH,
} from "@/scripts/mock/CalendarList";
import { DailyTask } from "@/ctypes/dailyTask";
import { reactive } from "vue";

const css = reactive({ default: "#82B1FF" });
// 任务列表
const props = defineProps({
  // 当前日期
  date: Date,
  // task
  dailyTasks: Array<DailyTask>,
});

// 获取本地任务
let localDailyTasks: Array<DailyTask> = props.dailyTasks as Array<DailyTask>;
// 获取本地分组任务
let localGroupedTasks = mockGroupDailyTask(localDailyTasks);
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
