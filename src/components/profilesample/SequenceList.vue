<template>
  <div>
    <v-card color="grey-lighten-4" flat>
      <v-card-title>
        <v-sheet color="indigo-accent-2">
          <v-row class="text-white">
            <v-icon
              icon="fa:fas fa-arrow-up-z-a"
              size="x-small"
              class="ml-4 mt-1"
            />
            <p class="ml-4 text-body-1 font-weight-bold">时序列表:</p>
          </v-row>
        </v-sheet>
      </v-card-title>
      <v-virtual-scroll :items="localDailyTasks" max-height="400">
        <template v-slot:default="{ item }">
          <v-list-item>
            <v-banner lines="two">
              <template v-slot:prepend>
                <v-avatar
                  size="48"
                  :color="
                    getTaskTypeColor(<taskType>(item as DailyTask).taskType)
                  "
                >
                  <v-icon
                    :icon="
                      getMockTaskTypeIcon(
                        <taskType>(item as DailyTask).taskType,
                      )
                    "
                    color="white"
                    class="mr-1"
                  />
                </v-avatar>
              </template>
              <template v-slot:text>
                <p>{{ (item as DailyTask).taskName }}</p>
                <p class="text-black font-italic ml-2 text-caption">
                  {{ (item as DailyTask).taskDescription }}
                </p>
              </template>

              <template v-slot:actions>
                <v-btn @click="openDetailDialog(item)">详情</v-btn>
              </template>
            </v-banner>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-card>
    <v-dialog
      v-model="openDialog"
      transition="dialog-top-transition"
      width="600"
    >
      <v-card>
        <v-card-text>
          <v-card variant="flat">
            <v-card-item>
              <template v-slot:title>
                <v-row class="ma-0">
                  <p>{{ (dialogItem as DailyTask).taskName }}</p>
                  <v-spacer />
                  <v-chip
                    label
                    class="text-caption"
                    :color="
                      getTaskTypeColor(
                        <taskType>(dialogItem as DailyTask).taskType,
                      )
                    "
                  >
                    {{ transTitle((dialogItem as DailyTask).taskType) }}
                  </v-chip>
                </v-row>
              </template>
              <template v-slot:subtitle>
                {{ (dialogItem as DailyTask).taskDescription }}
              </template>
            </v-card-item>
            <v-card-text class="py-0">
              <v-row align="center" no-gutters>
                <v-col class="text-left mr-4" cols="2">
                  <v-icon
                    :icon="
                      getMockTaskTypeIcon(
                        <taskType>(dialogItem as DailyTask).taskType,
                      )
                    "
                    :color="
                      getTaskTypeColor(
                        <taskType>(dialogItem as DailyTask).taskType,
                      )
                    "
                    size="64"
                  />
                </v-col>
                <v-col class="d-flex flex-column" cols="6">
                  <v-chip
                    class="pl-0"
                    color="success"
                    size="medium"
                    variant="text"
                  >
                    <v-icon icon="mdi-server-plus" start></v-icon>
                    当前进度 ~%
                  </v-chip>
                  <v-progress-linear
                    :height="20"
                    :model-value="CalcDiff(dialogItem as DailyTask)"
                    class="rounded-lg"
                    color="yellow-darken-3"
                    striped
                  >
                    <strong class="text-black"
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
            <v-sheet
              class="ml-4 mt-4 gradient-color text-white"
              :style="{ '--startColor': '#536DFE' }"
            >
              <v-row>
                <v-col class="d-flex flex-column pt-0">
                  <span>{{ ViewTimeStart(dialogItem as DailyTask) }}</span>
                  <span>{{ ViewTimeEnd(dialogItem as DailyTask) }}</span>
                </v-col>
              </v-row>
            </v-sheet>
          </v-card>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="closeDetailDialog">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
// 任务列表
import { DailyTask } from "@/ctypes/internal/dailyTask.ts";
import { taskType } from "@/ctypes/cenum/taskType.ts";
import {
  mockTaskTypeColor,
  mockTaskTypeIcon,
  mockTransTitleZH,
} from "@/scripts/mock/CalendarList";
import { ref } from "vue";
import {
  formatDateToString2,
  getTimeDiffPercentage,
} from "@/scripts/third/smallThird";

/**
 * @description PROPS
 */
const props = defineProps({
  // task
  dailyTasks: Array<DailyTask>,
});

// 本地任务列表
let localDailyTasks = props.dailyTasks as Array<DailyTask>;

// 是否打开弹窗
const openDialog = ref(false);

// 弹窗使用的任务
const dialogItem = ref({});

/**
 * @description 任务类型颜色
 * @param tType 任务类型
 */
function getTaskTypeColor(tType: taskType) {
  return mockTaskTypeColor(tType);
}

/**
 * @description 任务类型图标
 * @param tType
 */
function getMockTaskTypeIcon(tType: taskType) {
  return mockTaskTypeIcon(tType);
}

/**
 * @description 任务title
 * @param title
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
      (task.taskDate as [Date, Date])[0],
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
      (task.taskDate as [Date, Date])[1],
    )}`;
  }
}
</script>

<style scoped lang="scss">
.gradient-color {
  background-image: linear-gradient(to right, var(--startColor), #ffffff);
}
</style>
