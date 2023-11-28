<template>
  <v-card color="grey-lighten-4">
    <hello-alert />
    <sequence-list :dailyTasks="dailyTasks" />
  </v-card>
</template>

<script lang="ts" setup>
// 任务列表

import HelloAlert from "@/components/profilesample/HelloAlert.vue";
import SequenceList from "@/components/profilesample/SequenceList.vue";
import { IuDTask } from "@/ctypes/internal/IuDTask.ts";

const props = defineProps({
  // task
  dailyTasks: Array<IuDTask>,
});
</script>
