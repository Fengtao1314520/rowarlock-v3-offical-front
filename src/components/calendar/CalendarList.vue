<template>
  <v-card flat>
    <v-card-title class="d-flex justify-end">
      <v-chip label color="purple-lighten-1 font-weight-bold" size="large">
        详情列表
      </v-chip>
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="task in groupedTasks">
          <v-chip label :color="task.typecolor" text-color="white">
            <v-icon start icon="mdi-tag-arrow-right-outline" x-large></v-icon>
            <span class="font-weight-bold">{{ transTitle(task.name) }}</span>
          </v-chip>
          <v-card variant="outlined" class="mt-2">
            <v-list>
              <v-list-item
                v-for="(item, i) in task.items"
                :key="i"
                :value="item"
                @click="openDetailDialog(item)"
              >
                <template v-slot:prepend>
                  <v-icon
                    class="mr-1"
                    :color="getColor(item.taskStatus as taskStatus)"
                    :icon="getIcon(item.taskStatus as taskStatus)"
                  ></v-icon>
                </template>
                <v-list-item-title
                  class="text-button text-decoration-underline"
                >
                  <span>{{ item.taskName }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-dialog
      transition="dialog-top-transition"
      width="600"
      v-model="openDialog"
    >
      <template v-slot:default="{ openDialog }">
        <v-card>
          <v-card-text>
            <v-card flat>
              <v-card-item :title="(dialogItem as DailyTask).taskName">
                <template v-slot:subtitle>
                  <v-icon
                    :icon="getIcon((dialogItem as DailyTask).taskStatus as taskStatus)"
                    size="18"
                    color="error"
                    class="me-1 pb-1"
                  ></v-icon>
                  {{ (dialogItem as DailyTask).taskDescription }}
                </template>
              </v-card-item>
              <v-card-text class="py-0">
                <v-row align="center" no-gutters>
                  <v-col cols="3" class="text-left">
                    <v-icon
                      :color="getTaskTypeColor((dialogItem as DailyTask).taskType as taskType)"
                      icon="mdi-ev-station"
                      size="88"
                    ></v-icon>
                  </v-col>
                  <v-col cols="5" class="d-flex flex-column">
                    <v-chip
                      class="pl-0"
                      size="x-large"
                      label
                      color="success"
                      variant="text"
                    >
                      <v-icon start icon="mdi-server-plus"></v-icon>
                      当前进度%
                    </v-chip>
                    <v-progress-linear
                      class="rounded-e-xl"
                      color="purple-accent-2"
                      striped
                      :model-value="CalcDiff(dialogItem as DailyTask)"
                      :height="24"
                    >
                      <strong class="text-white"
                        >{{ CalcDiff(dialogItem as DailyTask) }}%</strong
                      >
                    </v-progress-linear>
                  </v-col>
                  <v-col class="d-flex flex-column">
                    <span class="text-right">总耗时:</span>
                    <span class="text-h4 text-right"
                      >{{ (dialogItem as DailyTask).taskDuration }} Days</span
                    >
                  </v-col>
                </v-row>
              </v-card-text>
              <v-alert
                variant="tonal"
                class="ml-4"
                color="blue-accent-4"
                density="compact"
              >
                <v-row>
                  <v-col cols="2">
                    <v-icon
                      class="ma-2"
                      size="48"
                      color="indigo-accent-4"
                      icon="mdi-calendar-refresh-outline"
                    ></v-icon>
                  </v-col>
                  <v-col class="d-flex flex-column text-black">
                    <span>{{ ViewTimeStart(dialogItem as DailyTask) }}</span>
                    <span>{{ ViewTimeEnd(dialogItem as DailyTask) }}</span>
                  </v-col></v-row
                >
              </v-alert>
            </v-card>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn variant="text" @click="closeDetailDialog">关闭</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  mockGetDailyTask,
  mockGroupAddExtra,
  mockGroupDailyTask,
  mockTaskResultColor,
  mockTaskResultIcon,
  mockTaskTypeColor,
  mockTransTitleZH,
} from "@/scripts/mock/CalendarList";
import { taskStatus, taskType } from "@/ctypes/taskType";
import { DailyTask } from "@/ctypes/dailyTask";
import {
  formatDateToString2,
  getTimeDiffPercentage,
} from "@/scripts/third/smallThird";

// 任务列表
const props = defineProps({
  // 当前日期
  date: Date,
  // task
  dailyTasks: Array<DailyTask>,
});
let localDailyTask: Array<DailyTask> = props.dailyTasks as Array<DailyTask>;
// 是否打开弹窗
const openDialog = ref(false);

// 弹窗使用的任务
const dialogItem = ref({});

// 获取本地分组任务
let localGroupedTasks = mockGroupDailyTask(localDailyTask);
// 赋值主alert颜色
let groupedTasks = mockGroupAddExtra(localGroupedTasks);

/**
 * @description 任务结果icon
 * @param tStatus 任务状态
 */
function getIcon(tStatus: taskStatus) {
  return mockTaskResultIcon(tStatus);
}

/**
 * @description 任务结果颜色
 * @param tStatus 任务状态
 */
function getColor(tStatus: taskStatus) {
  return mockTaskResultColor(tStatus);
}

/**
 * @description 任务类型颜色
 * @param tType 任务类型
 */
function getTaskTypeColor(tType: taskType) {
  return mockTaskTypeColor(tType);
}

/**
 * @description 返回任务标题
 * @param title 任务标题
 */
function transTitle(title: string) {
  return mockTransTitleZH(title);
}

/**
 * @description 打开任务详情弹窗
 * @param item 任务
 */
function openDetailDialog(item: any) {
  dialogItem.value = item;
  openDialog.value = true;
}

/**
 * @description 关闭任务详情弹窗
 */
function closeDetailDialog() {
  openDialog.value = false;
}

/**
 * @description 计算任务进度
 * @param task 任务
 * @constructor CalcDiff
 */
function CalcDiff(task: DailyTask) {
  let date1: any;
  let date2: any;
  let nowData = new Date();
  if (task.taskDuration === 1) {
    date1 = task.taskDate;
    date2 = task.taskDate;
  } else {
    date1 = (task.taskDate as [Date, Date])[0];
    date2 = (task.taskDate as [Date, Date])[1];
  }

  return getTimeDiffPercentage(date1, date2, nowData, task.taskDuration);
}

/**
 * @description 返回任务开始时间
 * @param task 任务
 * @constructor
 */
function ViewTimeStart(task: DailyTask) {
  if (task.taskDuration === 1) {
    return `开始时间: ${formatDateToString2(task.taskDate as Date)}`;
  } else {
    return `开始时间: ${formatDateToString2(
      (task.taskDate as [Date, Date])[0]
    )}`;
  }
}

/**
 * @description 返回任务结束时间
 * @param task 任务
 * @constructor
 */
function ViewTimeEnd(task: DailyTask) {
  if (task.taskDuration === 1) {
    return `结束时间: ${formatDateToString2(task.taskDate as Date)}`;
  } else {
    return `结束时间: ${formatDateToString2(
      (task.taskDate as [Date, Date])[1]
    )}`;
  }
}
</script>
