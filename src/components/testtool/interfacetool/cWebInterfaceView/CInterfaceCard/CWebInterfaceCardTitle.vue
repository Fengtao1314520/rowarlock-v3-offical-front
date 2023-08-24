<template>
  <v-sheet rounded="lg" class="d-flex" :color="withMethodInfo.color">
    <v-chip variant="text" size="x-small" :label="true" class="pt-2 text-white">
      <span class="font-weight-black">{{ withMethodInfo.value }}</span>
    </v-chip>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    method: string;
  }>(),
  {},
);

// 一个计算属性 ref
const withMethodInfo = computed(() => {
  if (props.method === "GET") {
    return {
      value: props.method,
      color: "amber-accent-4",
    };
  } else {
    return {
      value: props.method,
      color: "green-accent-4",
    };
  }
});
</script>

<style lang="scss" scoped></style>
