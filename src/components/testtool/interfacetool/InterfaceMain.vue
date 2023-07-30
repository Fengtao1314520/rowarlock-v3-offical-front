<template>
  <v-card variant="flat"> 测试 </v-card>
</template>

<script setup lang="ts">
import router from "@/router";

// 包id
const packageId = router.currentRoute.value.params.packageId;
</script>

<style scoped lang="scss"></style>
