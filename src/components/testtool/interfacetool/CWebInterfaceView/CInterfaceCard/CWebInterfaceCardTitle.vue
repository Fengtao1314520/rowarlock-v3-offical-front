<template>
  <v-row class="ma-n2">
    <v-col cols="10">
      <v-sheet class="bg-primary d-flex pa-0">
        <v-icon class="ml-2" color="white"
          >mdi-card-account-details-star</v-icon
        >
        <p class="ml-4 font-weight-bold">详情</p>
      </v-sheet>
    </v-col>
    <v-spacer />
    <v-col>
      <v-row class="ma-n2 d-flex justify-end">
        <v-sheet class="pa-0">
          <v-chip
            variant="elevated"
            elevation="0"
            size="large"
            :label="true"
            class="text-white mt-2"
            :color="withMethodInfo.color"
          >
            <v-icon :start="true" icon="mdi-help-network-outline"></v-icon>
            <span class="ml-2 font-weight-black text-body-1">{{
              withMethodInfo.value
            }}</span>
          </v-chip>
        </v-sheet>
      </v-row>
    </v-col>
  </v-row>
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
