<template>
  <v-card color="grey-lighten-4" variant="flat">
    <v-row align="end">
      <v-card-text>
        <v-row class="ma-2">
          <p class="text-primary text-h6">
            🎉 欢迎回来 {{ userInfos.Unickname }}!
          </p>
          <v-spacer />
          <v-avatar color="pink">
            <v-icon icon="mdi-charity" />
          </v-avatar>
        </v-row>
        <v-row class="ma-0">
          <v-col>
            <p class="text-overline">complete</p>
            <v-card
              variant="flat"
              class="gradient-color text-h4 text-left text-white font-weight-bold"
              :style="{ '--startColor': '#00C853' }"
              >{{ userStatistics.totalcreatetask }}
            </v-card>
          </v-col>
          <v-col>
            <p class="text-overline">assigned</p>
            <v-card
              variant="flat"
              class="gradient-color text-h4 tex-left text-white font-weight-bold"
              :style="{ '--startColor': '#42A5F5' }"
            >
              {{ userStatistics.totalassigneetask }}</v-card
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { MockUser } from "@/scripts/mock/MockUser.ts";
import { ref } from "vue";
import { generateStatistics } from "@/scripts/mock/MockStatistics.ts";
// TODO: 获取mock用户
let localUserInfos = MockUser();
let localuserStatistics = generateStatistics();
let userInfos = ref(localUserInfos);
let userStatistics = ref(localuserStatistics);
</script>

<style scoped lang="scss">
.gradient-color {
  background-image: linear-gradient(to right, var(--startColor), #ffffff);
}
</style>
