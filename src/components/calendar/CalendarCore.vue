<template>
  <calendar-view :date="props.date" :attributes="attributes" />
  <calendar-list
    :date="props.date"
    :daily-tasks="props.dailyTasks"
    class="mt-4"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createMockAttribute } from "@/scripts/mock/CalendarCore";
import CalendarView from "@/components/calendar/CalendarView.vue";
import CalendarList from "@/components/calendar/CalendarList.vue";
import { IuDTask } from "@/ctypes/internal/IuDTask.ts";

// 任务列表
const props = defineProps({
  // 当前日期
  date: Date,
  // task
  dailyTasks: Array<IuDTask>,
});

// mock测试数据
let localAttributes = [];

// 生成 attributes，给v-calendar使用
props.dailyTasks?.forEach((item) => {
  let attr = createMockAttribute(item);
  localAttributes.push(attr);
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
localAttributes.push(nowDay);

const attributes = ref(localAttributes);
</script>
