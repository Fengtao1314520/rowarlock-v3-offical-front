<template>
  <Calendar
    title-position="left"
    v-model="props.date"
    expanded
    :attributes="(props.attributes as any)"
  >
    <template v-slot:header-title="{ title }">
      <v-chip
        class="font-weight-bold"
        prepend-icon="mdi-calendar-today"
        label
        color="indigo-accent-4"
        variant="flat"
      >
        {{ title }}
      </v-chip>
    </template>
    <template v-slot:day-popover="{ attributes }">
      <div v-for="{ key, customData } in attributes" :key="key">
        <v-alert
          class="pa-2"
          border="start"
          prominent
          icon="mdi-hexagon-multiple-outline"
          variant="text"
          color="indigo-accent-4"
        >
          <v-alert-title class="text-body-1">
            <span>{{ customData.task.taskName }}</span>
            <v-spacer />
            <span> {{ customData.task.taskDuration }} days</span>
          </v-alert-title>
          <span class="text-caption font-italic">
            {{ customData.task.taskDescription }}
          </span>
        </v-alert>
      </div>
    </template>
  </Calendar>
</template>

<script setup lang="ts">
import { Calendar } from "v-calendar";
import "v-calendar/style.css";

const props = defineProps({
  date: Date,
  attributes: Array,
});
</script>
