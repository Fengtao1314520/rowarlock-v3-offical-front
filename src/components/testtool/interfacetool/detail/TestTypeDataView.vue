<template>
  <v-card
    variant="flat"
    density="compact"
    class="mt-4"
    v-if="interfacestatusnumber"
  >
    <c-view-progress-linear
      color="indigo-accent-2"
      prefield="总计:"
      :viewvalue="interfacestatusnumber.detail.totalnumber"
      :progressvalue="interfacestatusnumber.cover.totalnumber"
    />
    <c-view-progress-linear
      color="green-accent-4"
      prefield="已完成:"
      :viewvalue="interfacestatusnumber.detail.completenumber"
      :progressvalue="interfacestatusnumber.cover.completenumber"
    />
  </v-card>
</template>

<script setup lang="ts">
import CViewProgressLinear from "@/customization/CViewProgressLinear.vue";

const props = withDefaults(
  defineProps<{
    interfacestatusnumber: any;
  }>(),
  {},
);
</script>

<style scoped lang="scss"></style>
