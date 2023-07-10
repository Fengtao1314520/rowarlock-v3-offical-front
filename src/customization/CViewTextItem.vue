<template>
  <v-sheet>
    <v-sheet class="ma-2 d-flex">
      <div class="text-overline mr-4 pt-1">{{ props.prefield }}</div>
      <v-text-field
        v-if="!props.label"
        density="compact"
        hide-details="auto"
        :placeholder="props.prefield"
        variant="outlined"
        v-model="props.values"
        clearable
      ></v-text-field>
      <v-text-field
        v-else
        density="compact"
        hide-details="auto"
        :placeholder="props.prefield"
        :label="props.label"
        variant="outlined"
        v-model="props.values"
        clearable
      ></v-text-field>
    </v-sheet>
    <v-divider
      v-if="props.color"
      :thickness="1.5"
      class="border-opacity-75"
      :color="props.color"
    ></v-divider>
  </v-sheet>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    color?: string;
    label?: string;
    prefield: string;
    values: any;
  }>(),
  {}
);
</script>
