<template>
  <div>
    <v-col class="d-flex pa-0 px-2">
      <div class="text-body-1 mr-4 pt-3 font-weight-bold">
        {{ props.prefield }}
      </div>
      <v-col>
        <p class="text-body-1">{{ props.values }}</p>
        <v-divider
          v-if="props.color"
          :thickness="2"
          class="border-opacity-100"
          :color="props.color"
        ></v-divider>
      </v-col>
    </v-col>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: string;
    label?: string;
    prefield: string;
    values: any;
  }>(),
  {},
);
</script>

<style scoped lang="scss"></style>
