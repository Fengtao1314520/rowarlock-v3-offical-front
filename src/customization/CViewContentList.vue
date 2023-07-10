<template>
  <v-sheet>
    <v-sheet class="ma-2 d-flex">
      <v-row>
        <v-col>
          <div class="text-overline mr-4 pt-1">{{ prefield }}</div>
          <c-view-content-list-item icon="mdi-tag-multiple" :values="values" />
        </v-col>
      </v-row>
    </v-sheet>
    <v-divider
      :thickness="2"
      class="border-opacity-75"
      color="deep-purple-accent-3"
    ></v-divider>
  </v-sheet>
</template>

<script setup lang="ts">
import CViewContentListItem from "@/customization/CViewContentListItem.vue";

const props = defineProps<{
  prefield: string;
  values: string[];
}>();
</script>
