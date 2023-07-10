<template>
  <v-sheet>
    <v-sheet class="ma-2" v-for="(item, index) in props.values" :key="index">
      <c-view-text-item :prefield="item.prefield" :values="item.values" />
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
import CViewTextItem from "@/customization/CViewTextItem.vue";

const props = defineProps<{
  values: Array<{
    label?: string;
    prefield: string;
    values: any;
  }>;
  color?: string;
}>();
</script>
