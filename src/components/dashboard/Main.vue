<template>
  <v-card flat>
    <v-navigation-drawer :rail="railNav" @click="railNav = false">
      <v-list>
        <v-list-item title="主页" prepend-icon="mdi-home-roof">
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
        <v-list-item title="看板" prepend-icon="mdi-monitor-dashboard">
        </v-list-item>
        <v-list-item title="报告" prepend-icon="mdi-chart-donut-variant">
        </v-list-item>
        <v-list-item title="测试脚手架" prepend-icon="mdi-list-status">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat>
      <v-app-bar-title class="font-weight-bold">
        <v-icon color="grey-darken-2" left>mdi-home</v-icon>
        <span class="text-grey-darken-2 text-decoration-underline ml-4">
          Home
        </span>
      </v-app-bar-title>
    </v-app-bar>
    <v-card flat>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <calendar-main :date="date" :daily-tasks="dailyTasks" />
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
import { ref } from "vue";
import CalendarMain from "@/components/calendar/CalendarMain.vue";
import { DailyTask } from "@/ctypes/dailyTask";
import { randomIntFrom3To10 } from "@/scripts/third/smallThird";
import { generateRandomDailyTasks } from "@/scripts/mock/MockDailyTask";
import ProfileSample from "@/components/profilesample/ProfileSampleMain.vue";

const railNav = ref(true);

let date: Date = new Date();
// 随机生成 3-10个任务
let taskNum = randomIntFrom3To10();
// 生成 DailyTask 数组
let dailyTasks: Array<DailyTask> = generateRandomDailyTasks(taskNum);
</script>
