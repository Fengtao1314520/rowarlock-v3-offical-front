<template>
  <v-card color="grey-lighten-4" variant="flat" class="rounded-lg">
    <v-card-text>
      <calendar-core :date="nowDate" :daily-tasks="props.dailyTasks" />
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import CalendarCore from "@/components/calendar/CalendarCore.vue";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";
import { ref } from "vue";

// 当前时间
const nowDate = ref(new Date());
// 任务列表
const props = defineProps({
  // task
  dailyTasks: Array<IuDTask>,
});
</script>
