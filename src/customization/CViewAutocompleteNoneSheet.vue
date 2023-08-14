<template>
  <v-row class="ma-2">
    <div class="text-body-1 mr-4 pt-4 font-weight-bold">
      {{ props.prefield }}
    </div>
    <v-col class="pb-0">
      <p class="text-body-1 font-weight-medium" @click="openPackageItem()">
        {{ inputSelectedItem }}
      </p>
      <v-divider
        v-if="props.color"
        :thickness="2"
        class="border-opacity-100"
        :color="props.color"
      ></v-divider>
    </v-col>
  </v-row>
  <v-dialog
    transition="dialog-top-transition"
    width="auto"
    v-model="dialogStatus"
  >
    <v-card>
      <v-toolbar color="primary" title="选择接口包"></v-toolbar>
      <v-card-text>
        <v-autocomplete
          label="选择接口包"
          density="comfortable"
          :items="values"
          item-title="name"
          item-value="id"
          v-model="selectedItem"
          variant="outlined"
        ></v-autocomplete>
      </v-card-text>
      <v-card-actions class="justify-end">
        <span class="pr-2 text-overline">关闭自动选择接口包</span>
        <v-btn variant="tonal" @click="closePackageItem()">关闭</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = withDefaults(
  defineProps<{
    prefield: string;
    values: any;
    color?: string;
  }>(),
  {},
);

const inputSelectedItem = ref("点击选择接口包");
// dialog 状态
const dialogStatus = ref(false);

// emit
const emits = defineEmits(["returnSelectedValue"]);

// 选择的值
const selectedItem = ref(null);

function openPackageItem() {
  dialogStatus.value = true;
}

function closePackageItem() {
  // inputSelectedItem.value = selectedItem.name;
  emits("returnSelectedValue", selectedItem.value);
  dialogStatus.value = false;
}
</script>
