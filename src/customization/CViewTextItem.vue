<template>
  <v-sheet>
    <v-sheet class="ma-2 d-flex">
      <div class="text-body-2 pt-3 font-weight-bold">
        {{ props.prefield }}
      </div>
      <v-text-field
        v-if="!props.label"
        density="compact"
        hide-details="auto"
        :hide-no-data="true"
        :placeholder="props.prefield"
        variant="outlined"
        color="primary"
        v-model="props.values"
        :clearable="true"
        class="customer-90"
      ></v-text-field>
      <v-text-field
        v-else
        density="compact"
        hide-details="auto"
        :hide-no-data="true"
        :placeholder="props.prefield"
        :label="props.label"
        variant="outlined"
        color="primary"
        v-model="props.values"
        :clearable="true"
      ></v-text-field>
    </v-sheet>
    <v-divider
      v-if="props.color"
      :thickness="2"
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
  {},
);
</script>

<style scoped lang="scss">
.customer-90 {
  transform: scale(0.9);
}
.customer-95 {
  transform: scale(0.95);
}
</style>
