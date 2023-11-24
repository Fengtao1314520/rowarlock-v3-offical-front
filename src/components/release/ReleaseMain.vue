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
import { IuDRelease } from "@/ctypes/internal/IuDRelease.ts";
import { ref } from "vue";
import ReleaseView from "@/components/release/ReleaseView.vue";

/// 释放记录
const releaseRecord: Array<{ year: number; releaseTask: IuDRelease }> =
  MockReleaseList();

let releaseTask = ref({} as IuDRelease);

function selectSingleReleaseRecord(item: {
  year: number;
  releaseTask: IuDRelease;
}) {
  // 赋值
  releaseTask.value = item.releaseTask;
  // console.log(data.value.releaseTask);
}
</script>
