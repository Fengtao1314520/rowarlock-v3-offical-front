<template>
  <v-card variant="flat">
    <!--
    <v-app-bar flat>
      <v-app-bar-title class="font-weight-bold">
        <v-icon color="grey-darken-2" left>mdi-home</v-icon>
        <span class="text-grey-darken-2 text-decoration-underline ml-4">
          Home
        </span>
      </v-app-bar-title>
    </v-app-bar
    >-->
    <v-card variant="flat">
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <calendar-main :daily-tasks="dailyTasks" />
          </v-col>
          <v-col>
            <v-card>
              <profile-sample :daily-tasks="dailyTasks" />
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CalendarMain from "@/components/calendar/CalendarMain.vue";
import { randomIntFrom3To10 } from "@/scripts/third/smallThird";
import ProfileSample from "@/components/profileSample/ProfileSampleMain.vue";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";
import { generateRandomDailyTasks } from "@/scripts/mock/mockTask.ts";
import { HttpTask } from "@/scripts/networks/communicate/httpTask.ts";

// 参数
// const railNav = ref(true);
const dailyTasks = ref<Array<IuDTask>>([]);

async function init() {
  let userid = "c5dfead9-9bb1-4800-a00c-da71ccb5fe19";
  let params = {
    userid: "c5dfead9-9bb1-4800-a00c-da71ccb5fe19",
    qtype: "list",
    days: 7,
  };
  // 获取用户的task
  let tempTasks = await HttpTask.GetTaskListByUserId(userid, params);
  if (tempTasks.data.rescode === 200) {
    dailyTasks.value = tempTasks.data.resdata;
  } else {
    // 随机生成 3-10个任务
    let taskNum = randomIntFrom3To10();
    // MOCK 生成 DailyTask 数组
    dailyTasks.value = generateRandomDailyTasks(taskNum);
  }
}
// 初始化
onMounted(async () => {
  await init();
  // console.log(dailyTasks.value);
});
</script>
