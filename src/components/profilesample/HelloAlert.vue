<template>
  <v-card color="grey-lighten-4" variant="flat">
    <v-row align="end">
      <v-card-text>
        <v-row class="ma-2">
          <p class="text-primary text-h6">
            🎉 欢迎回来 {{ userInfos?.Unickname }}
          </p>
          <v-spacer />
          <v-avatar color="pink">
            <v-icon icon="mdi-charity" />
          </v-avatar>
        </v-row>
        <v-row class="ma-0">
          <v-col>
            <p class="text-overline">created</p>
            <v-card
              variant="flat"
              class="gradient-color text-h4 text-left text-white font-weight-bold"
              :style="{ '--startColor': '#00C853' }"
              >{{ userStatistics?.TotalCreateTask }}
            </v-card>
          </v-col>
          <v-col>
            <p class="text-overline">assigned</p>
            <v-card
              variant="flat"
              class="gradient-color text-h4 tex-left text-white font-weight-bold"
              :style="{ '--startColor': '#42A5F5' }"
            >
              {{ userStatistics?.TotalAssignedTask }}</v-card
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { mockUser } from "@/scripts/mock/mockUser.ts";
import { onMounted, ref } from "vue";
import { generateStatistics } from "@/scripts/mock/mockStatistics.ts";
import { HttpUserInfo } from "@/scripts/networks/communicate/httpUserInfo.ts";
import { HttpStatistics } from "@/scripts/networks/communicate/httpStatistics.ts";
import { IuDUser } from "@/scripts/cTypes/internal/IuDUser.ts";
import { CuDStatistics } from "@/scripts/cTypes/communicate/CuDStatistics.ts";

// 参数
let userInfos = ref<IuDUser>();
let userStatistics = ref<CuDStatistics>();

async function init() {
  // info: 异步获取用户信息
  let tempuserInfos = await HttpUserInfo.GetUserInfo(
    "c5dfead9-9bb1-4800-a00c-da71ccb5fe19",
  );
  if (tempuserInfos.data.rescode === 200) {
    userInfos.value = tempuserInfos.data.resdata[0];
  } else {
    userInfos.value = mockUser();
  }

  // info: 异步获取当前用户的统计信息
  let tempuserStatistics = await HttpStatistics.GetStatistics(
    "c5dfead9-9bb1-4800-a00c-da71ccb5fe19",
  );
  if (tempuserStatistics.data.rescode === 200) {
    userStatistics.value = tempuserStatistics.data.resdata;
  } else {
    userStatistics.value = generateStatistics();
  }
}

onMounted(async () => {
  await init();
  console.log(userInfos.value);
  console.log(userStatistics.value);
});
</script>

<style scoped lang="scss">
.gradient-color {
  background-image: linear-gradient(to right, var(--startColor), #ffffff);
}
</style>
