<template>
  <v-card flat>
    <release-nav
      :release-record="releaseRecord"
      @select-single-release-record="selectSingleReleaseRecord"
    />
    <release-view v-if="releaseTask" :release-task="releaseTask" />
  </v-card>
</template>

<script setup lang="ts">
import ReleaseNav from "@/components/release/ReleaseNav.vue";
import { MockReleaseList } from "@/scripts/mock/MockReleaseList";
import { ReleaseTask } from "@/ctypes/releaseTask";
import { ref } from "vue";
import ReleaseView from "@/components/release/ReleaseView.vue";

/// 释放记录
const releaseRecord: Array<{ year: number; releaseTask: ReleaseTask }> =
  MockReleaseList();

let releaseTask = ref({} as ReleaseTask);

function selectSingleReleaseRecord(item: {
  year: number;
  releaseTask: ReleaseTask;
}) {
  // 赋值
  releaseTask.value = item.releaseTask;
  // console.log(data.value.releaseTask);
}
</script>
