<template>
  <v-card color="grey-lighten-4" flat>
    <v-row align="end">
      <v-card-text>
        <v-row class="ma-2">
          <p class="text-primary text-h6">
            🎉 欢迎回来 {{ userInfos.userName }}!
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
              flat
              class="gradient-color text-h4 text-left text-white font-weight-bold"
              :style="{ '--startColor': '#00C853' }"
              >{{ userInfos.completedTask }}
            </v-card>
          </v-col>
          <v-col>
            <p class="text-overline">assigned</p>
            <v-card
              flat
              class="gradient-color text-h4 tex-left text-white font-weight-bold"
              :style="{ '--startColor': '#42A5F5' }"
            >
              {{ userInfos.assignedTask }}</v-card
            >
          </v-col>
        </v-row>
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { MockUserInfo } from "@/scripts/mock/MockUser";
import { ref } from "vue";
// TODO: 获取mock用户
let localUserInfos = MockUserInfo();
let userInfos = ref(localUserInfos);
</script>

<style scoped lang="scss">
.gradient-color {
  background-image: linear-gradient(to right, var(--startColor), #ffffff);
}
</style>
