<template>
  <div>
    <v-card color="grey-lighten-4" variant="flat">
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
                <v-avatar size="48" :color="getTaskTypeColor(item.Type)">
                  <v-icon
                    :icon="getMockTaskTypeIcon(item.Type)"
                    color="white"
                    class="mr-1"
                  />
                </v-avatar>
              </template>
              <template v-slot:text>
                <p>{{ (item as IuDTask).TaskName }}</p>
                <p class="text-black font-italic ml-2 text-caption">
                  {{ (item as IuDTask).TaskContent }}
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
                  <p>{{ (dialogItem as IuDTask).TaskName }}</p>
                  <v-spacer />
                  <v-chip
                    :label="true"
                    class="text-caption"
                    :color="getTaskTypeColor((dialogItem as IuDTask).Type)"
                  >
                    {{ transTitle((dialogItem as IuDTask).Type) }}
                  </v-chip>
                </v-row>
              </template>
              <template v-slot:subtitle>
                {{ (dialogItem as IuDTask).TaskContent }}
              </template>
            </v-card-item>
            <v-card-text class="py-0">
              <v-row align="center" :no-gutters="true">
                <v-col class="text-left mr-4" cols="2">
                  <v-icon
                    :icon="getMockTaskTypeIcon((dialogItem as IuDTask).Type)"
                    :color="getTaskTypeColor((dialogItem as IuDTask).Type)"
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
                    <v-icon icon="mdi-server-plus" start />
                    当前进度 ~%
                  </v-chip>
                  <v-progress-linear
                    :height="20"
                    :model-value="openDialogProgress"
                    class="rounded-lg"
                    color="yellow-darken-3"
                    striped
                  >
                    <strong class="text-black"
                      >{{ openDialogProgress }}%</strong
                    >
                  </v-progress-linear>
                </v-col>
                <v-col class="d-flex flex-column">
                  <div>
                    <span class="text-right">预期耗时:</span>
                    <span class="text-right"
                      >{{ (dialogItem as IuDTask).ExpandTime }} Days</span
                    >
                  </div>
                  <div>
                    <span class="text-right">已用耗时:</span>
                    <span class="text-right"
                      >{{ (dialogItem as IuDTask).ElapsedTime }} Days</span
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-sheet
              class="ml-4 mt-4 gradient-color text-white"
              :style="{ '--startColor': '#536DFE' }"
            >
              <v-row>
                <v-col class="d-flex flex-column pt-0">
                  <span>开始时间: {{ (dialogItem as IuDTask).StartTime }}</span>
                  <span>结束时间: {{ (dialogItem as IuDTask).EndTime }}</span>
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

import {
  mockTaskTypeColor,
  mockTaskTypeIcon,
  mockTransTitleZH,
} from "@/scripts/mock/pages/calendarList.ts";
import { ref, watch } from "vue";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";
import { getMockTimeDiffPercentage } from "@/scripts/mock/pages/calendarCore.ts";
import { HttpTask } from "@/scripts/networks/communicate/httpTask.ts";

/**
 * @description PROPS
 */
const props = defineProps({
  // task
  dailyTasks: Array<IuDTask>,
});

// 是否打开弹窗
const openDialog = ref(false);

// 弹窗使用的任务
const dialogItem = ref({});

// 弹窗内进度展示
const openDialogProgress = ref(0);

// 本地任务列表
const localDailyTasks = ref<Array<IuDTask>>([]);

// 监听
watch(
  () => props.dailyTasks,
  (newVal) => {
    if (newVal !== undefined) {
      localDailyTasks.value = newVal;
    }
  },
  { immediate: true, deep: true },
);

/**
 * @description 任务类型颜色
 * @param tType 任务类型
 */
function getTaskTypeColor(tType: string | undefined) {
  if (tType !== undefined) {
    return mockTaskTypeColor(tType);
  }
}

/**
 * @description 任务类型图标
 * @param tType
 */
function getMockTaskTypeIcon(tType: string | undefined) {
  if (tType !== undefined) {
    return mockTaskTypeIcon(tType);
  }
}

/**
 * @description 任务类型转中文
 * @param tType
 */
function transTitle(tType: string | undefined) {
  if (tType !== undefined) {
    return mockTransTitleZH(tType);
  }
}

/**
 * @description 打开任务详情弹窗
 * @param item 任务
 */
async function openDetailDialog(item: IuDTask) {
  openDialog.value = true;
  let usetask = item;
  // info: 获取task详情，往这里扔
  let userid = item.AssigneeUserId;
  let params = {
    userid: userid,
    qtype: "detail",
    id: item.Id,
  };
  // 获取用户的task
  let tempTasks = await HttpTask.GetTaskDetailById(userid, params);
  if (tempTasks.data.rescode === 200) {
    usetask = tempTasks.data.resdata[0];
  }
  dialogItem.value = usetask;
  openDialogProgress.value = CalcDiff(usetask);
}

/**
 * @description 关闭任务详情弹窗
 */
function closeDetailDialog() {
  // fix: 关闭弹窗时，清空任务详情,也会触发watch
  dialogItem.value = {};
  openDialog.value = false;
}

/**
 * @description 计算任务进度
 * @param task 任务
 * @constructor CalcDiff
 */
function CalcDiff(task: IuDTask) {
  return getMockTimeDiffPercentage(task);
}
</script>

<style scoped lang="scss">
.gradient-color {
  background-image: linear-gradient(to right, var(--startColor), #ffffff);
}
</style>
