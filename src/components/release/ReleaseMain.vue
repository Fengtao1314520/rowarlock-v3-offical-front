<template>
  <v-card variant="flat">
    <release-nav
      :release-record="releaseRecord"
      @select-single-release-record="selectSingleReleaseRecord"
    />
    <release-view v-if="selectedRelease" :release="selectedRelease" />
  </v-card>
</template>

<script setup lang="ts">
import ReleaseNav from "@/components/release/ReleaseNav.vue";
import { onMounted, ref } from "vue";
import ReleaseView from "@/components/release/ReleaseView.vue";
import { HttpRelease } from "@/scripts/networks/communicate/httpRelease.ts";
import { CuDRelease } from "@/scripts/cTypes/communicate/CuDRelease.ts";

/// 释放记录 列表
const releaseRecord = ref<Array<{ year: number; count: number }>>([]);

const selectedRelease = ref<CuDRelease>();

/**
 * @description 选择单个释放记录
 * @param item
 */
function selectSingleReleaseRecord(item: CuDRelease) {
  // 赋值
  selectedRelease.value = item;
}

async function init() {
  let userid = "c5dfead9-9bb1-4800-a00c-da71ccb5fe19";
  let params = {
    userid: userid,
    qtype: "year",
  };
  // 获取用户的task
  let tempReleases = await HttpRelease.GetReleaseYearListByUserId(
    userid,
    params,
  );

  if (tempReleases.data.rescode === 200) {
    releaseRecord.value = tempReleases.data.resdata;
  } else {
    // todo:改造
    // releaseRecord.value = mockRelease();
  }
}

// 初始化
onMounted(async () => {
  await init();
});
</script>
