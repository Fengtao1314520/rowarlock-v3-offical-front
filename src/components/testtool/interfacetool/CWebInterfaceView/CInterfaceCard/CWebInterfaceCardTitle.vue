<template>
  <v-sheet class="d-flex pa-0" :color="withMethodInfo.color">
    <v-chip variant="text" size="large" :label="true" class="pt-1 text-white">
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

<style lang="scss" scoped>
.bg-primary {
  background: linear-gradient(90deg, #448aff, #536dfe);
  color: white !important;
}
</style>
