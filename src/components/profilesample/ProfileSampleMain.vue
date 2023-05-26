<template>
  <v-card color="grey-lighten-4">
    <hello-alert />
    <sequence-list :dailyTasks="dailyTasks" />
  </v-card>
</template>

<script lang="ts" setup>
// 任务列表
import { DailyTask } from "@/ctypes/dailyTask";
import HelloAlert from "@/components/profilesample/HelloAlert.vue";
import SequenceList from "@/components/profilesample/SequenceList.vue";

const props = defineProps({
  // task
  dailyTasks: Array<DailyTask>,
});
</script>
