<template>
  <v-sheet border>
    <v-row class="ma-0 d-flex" v-for="(item, index) in values" :key="index">
      <v-divider
        v-if="index !== 0"
        :thickness="2"
        class="border-opacity-50 mx-4"
        color="blue-accent-4"
      ></v-divider>
      <v-col cols="1" class="pb-0">
        <v-icon color="amber-accent-4" :icon="icon" size="x-small"></v-icon>
      </v-col>
      <v-col class="pb-0">
        <div class="text-overline mt-n2">{{ item }}</div>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script setup lang="ts">
const props = defineProps<{
  values: string[];
  icon: string;
}>();
</script>
