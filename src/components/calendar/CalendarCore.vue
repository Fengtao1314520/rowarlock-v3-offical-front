<template>
  <calendar-view :date="props.date" :attributes="attributes" />
  <calendar-list
    :date="props.date"
    :daily-tasks="props.dailyTasks"
    class="mt-4"
  />
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { createMockAttribute } from "@/scripts/mock/pages/calendarCore.ts";
import CalendarView from "@/components/calendar/CalendarView.vue";
import CalendarList from "@/components/calendar/CalendarList.vue";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";

// 任务列表
const props = defineProps({
  // 当前日期
  date: Date,
  // task
  dailyTasks: Array<IuDTask>,
});

const attributes = ref<Array<any>>([]);

watch(
  () => props.dailyTasks,
  (newVal) => {
    // 生成 attributes，给v-calendar使用
    newVal?.forEach((item) => {
      let attr = createMockAttribute(item);
      attributes.value.push(attr);
    });

    // TODO: 放入当天
    let nowDay = {
      highlight: {
        color: "gray",
        fillMode: "outline",
      },
      dates: new Date(),
      popover: false,
    };
    attributes.value.push(nowDay);
  },
  { immediate: true, deep: true },
);
</script>
