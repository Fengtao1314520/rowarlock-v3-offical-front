<template>
  <v-sheet class="ma-2">
    <v-row class="ma-2 d-flex">
      <strong>{{ props.prefield }}</strong>
      <v-progress-linear
        :striped="true"
        :color="props.color"
        class="rounded-e-xl mt-2"
        :model-value="props.progressvalue"
        :height="24"
      >
        <template v-slot:default="{ value }">
          <strong class="text-white">{{ props.viewvalue }}</strong>
        </template>
      </v-progress-linear>
    </v-row>
    <v-divider
      :thickness="3"
      class="border-opacity-75"
      color="indigo-accent-4"
    ></v-divider>
  </v-sheet>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    prefield: string;
    color: string;
    progressvalue: any;
    viewvalue: any;
  }>(),
  {},
);
</script>
