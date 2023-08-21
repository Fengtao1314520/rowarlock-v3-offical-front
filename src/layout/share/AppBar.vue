<template>
  <v-app-bar scroll-behavior="elevate">
    <v-btn class="ml-8" icon @click="() => $router.push('/')">
      <v-avatar>
        <v-img
          src="../../assets/logo/rowarlock-high-resolution-logo-color-on-transparent-background.png"
        >
        </v-img>
      </v-avatar>
    </v-btn>
    <v-app-bar-title>
      <p class="text-h6 font-italic text-blue-accent-4">RoWarlock</p>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
//
</script>
