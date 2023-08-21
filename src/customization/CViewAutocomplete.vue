<template>
  <div>
    <v-sheet class="ma-2 d-flex">
      <div class="text-body-2 pt-3 font-weight-bold">
        {{ props.prefield }}
      </div>
      <v-autocomplete
        v-model="selectedItem"
        :items="values"
        item-title="name"
        item-value="id"
        :clearable="true"
        hide-details="auto"
        :hide-no-data="true"
        density="compact"
        variant="outlined"
        class="customer-90"
      ></v-autocomplete>
    </v-sheet>
    <v-divider
      :thickness="2"
      class="border-opacity-75"
      color="indigo-accent-4"
    ></v-divider>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    prefield: string;
    values: any;
  }>(),
  {},
);

// emit
const emits = defineEmits(["returnSelectedValue"]);

// 选择的值
const selectedItem = ref(null);

// 监听选择的值
watch(
  selectedItem,
  (newVal) => {
    emits("returnSelectedValue", newVal);
  },
  { immediate: true },
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
