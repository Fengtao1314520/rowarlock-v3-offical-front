<template>
  <calendar-view :date="date" :attributes="attributes" />
  <calendar-list :date="date" :attributes="attributes" class="mt-4" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { mockAttributes } from "@/scripts/mock/CalendarCore";
import CalendarView from "@/components/calendar/CalendarView.vue";
import CalendarList from "@/components/calendar/CalendarList.vue";

// TODO: 当前日期
const date = new Date();
// TODO: mock测试数据
let localAttributes = mockAttributes();
// TODO: 放入当天
let nowDay = {
  highlight: {
    color: "gray",
    fillMode: "outline",
  },
  dates: date,
  popover: false,
};
localAttributes.push(nowDay);

const attributes = ref(localAttributes);
</script>
