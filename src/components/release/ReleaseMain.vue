<template>
  <v-card variant="flat">
    <release-nav
      :release-record="releaseRecord"
      @select-single-release-record="selectSingleReleaseRecord"
    />
    <release-view v-if="release" :release="release" />
  </v-card>
</template>

<script setup lang="ts">
import ReleaseNav from "@/components/release/ReleaseNav.vue";
import { MockRelease } from "@/scripts/mock/MockRelease.ts";
import { IuDRelease } from "@/ctypes/internal/IuDRelease.ts";
import { ref } from "vue";
import ReleaseView from "@/components/release/ReleaseView.vue";

/// 释放记录
const releaseRecord: Array<{ year: number; release: IuDRelease }> =
  MockRelease();

let release = ref<IuDRelease>();

function selectSingleReleaseRecord(item: {
  year: number;
  release: IuDRelease;
}) {
  // 赋值
  release.value = item.release;
}
</script>
