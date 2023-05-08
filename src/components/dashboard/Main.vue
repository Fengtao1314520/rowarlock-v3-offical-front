<template>
  <v-card flat>
    <v-navigation-drawer :rail="railnav" @click="railnav = false">
      <v-list>
        <v-list-item title="主页" prepend-icon="mdi-home-roof">
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="railnav = !railnav"
            >
            </v-btn>
          </template>
        </v-list-item>
        <v-divider />
        <v-list-item title="看板" prepend-icon="mdi-monitor-dashboard">
        </v-list-item>
        <v-list-item title="报告" prepend-icon="mdi-chart-donut-variant">
        </v-list-item>
        <v-list-item title="测试脚手架" prepend-icon="mdi-list-status">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat>
      <v-app-bar-title class="font-weight-bold">
        <v-icon color="grey-darken-2" left>mdi-home</v-icon>
        <span class="text-grey-darken-2 text-decoration-underline ml-4"
          >Home</span
        >
      </v-app-bar-title>
    </v-app-bar>

    <v-card color="primary">
      <v-card-title>测试</v-card-title>
    </v-card>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
const railnav = ref(false);
</script>
