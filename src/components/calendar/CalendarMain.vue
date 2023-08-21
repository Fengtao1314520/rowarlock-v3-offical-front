<template>
  <v-card color="grey-lighten-4" variant="flat" class="rounded-lg">
    <v-card-text>
      <calendar-core :date="props.date" :daily-tasks="props.dailyTasks" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import CalendarCore from "@/components/calendar/CalendarCore.vue";
import { DailyTask } from "@/ctypes/dailyTask";

// 任务列表
const props = defineProps({
  // 当前日期
  date: Date,
  // task
  dailyTasks: Array<DailyTask>,
});
</script>
