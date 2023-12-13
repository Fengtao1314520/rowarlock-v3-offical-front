<template>
  <Calendar
    title-position="left"
    v-model="props.date"
    expanded
    :attributes="props.attributes as any"
  >
    <template v-slot:header-title="{ title }">
      <v-chip
        class="font-weight-bold"
        prepend-icon="mdi-calendar-today"
        label
        color="indigo-accent-2"
        variant="flat"
      >
        {{ title }}
      </v-chip>
    </template>
    <template v-slot:day-popover="{ attributes }">
      <v-alert
        density="compact"
        v-for="{ key, customData } in attributes"
        :key="key"
        class="mb-1"
        border="start"
        :prominent="true"
        icon="mdi-hexagon-multiple-outline"
        variant="outlined"
        color="indigo-accent-4"
      >
        <v-alert-title class="text-body-1">
          <span>{{ (customData.task as IuDTask).TaskName }}</span>
          <v-spacer />
          <span class="text-button font-italic">
            已耗时:
            {{ (customData.task as IuDTask).ElapsedTime }} days</span
          >
        </v-alert-title>
        <p class="text-caption">编号: {{ (customData.task as IuDTask).Id }}</p>
        <p class="text-caption text-grey-darken-2">
          内容: {{ (customData.task as IuDTask).TaskContent }}
        </p>
      </v-alert>
    </template>
  </Calendar>
</template>

<script setup lang="ts">
import { Calendar } from "v-calendar";
import "v-calendar/style.css";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";

const props = defineProps({
  date: Date,
  attributes: Array,
});
</script>
