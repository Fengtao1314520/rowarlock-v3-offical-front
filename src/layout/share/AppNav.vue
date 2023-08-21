<template>
  <v-navigation-drawer :rail="railNav" @click="railNav = false">
    <v-list>
      <v-list-item title="RoWarlock" prepend-icon="mdi-home-assistant">
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="railNav = !railNav"
          >
          </v-btn>
        </template>
      </v-list-item>
      <v-divider class="my-2" />
      <v-list-item
        class="rounded-e-lg"
        active-class="select-active"
        density="compact"
        v-for="(item, index) in navMenuList"
        :key="index"
        :title="item.title"
        :prepend-icon="item.icon"
        :to="item.to"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const railNav = ref(false);

// 菜单列表
const navMenuList = [
  {
    title: "主页",
    icon: "mdi-home-roof",
    to: "/main",
  },
  {
    title: "看板",
    icon: "mdi-monitor-dashboard",
    to: "/dashboard",
  },
  {
    title: "报告",
    icon: "mdi-chart-donut-variant",
    to: "/report",
  },
  {
    title: "释放管理",
    icon: "mdi-sun-wireless-outline",
    to: "/release",
  },
  {
    title: "测试脚手架",
    icon: "mdi-list-status",
    to: "/test",
  },
];
</script>
<style scoped lang="scss">
.select-active {
  background: linear-gradient(98deg, #536dfe, #304ffe);
  color: white !important;
}
</style>
