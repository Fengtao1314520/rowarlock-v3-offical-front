<template>
  <v-sheet>
    <v-sheet class="ma-2 d-flex">
      <div class="text-body-2  mr-4 pt-2 font-weight-bold">{{ props.prefield }}</div>
      <v-autocomplete
        clearable
        hide-details="auto"
        density="compact"
        :items="values"
        item-title="name"
        item-value="id"
        v-model="selectedItem"
        variant="outlined"
      ></v-autocomplete>
    </v-sheet>
    <v-divider
      :thickness="2"
      class="border-opacity-75"
      color="indigo-accent-4"
    ></v-divider>
  </v-sheet>
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
