<template>
  <v-app>
    <app-bar />
    <app-nav />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppBar from "@/layout/share/AppBar.vue";
import AppNav from "@/layout/share/AppNav.vue";
</script>
