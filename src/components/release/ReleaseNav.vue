<template>
  <v-navigation-drawer
    :rail="railNav"
    @click="railNav = false"
    location="right"
  >
    <v-list-item title="释放记录" prepend-icon="mdi-clipboard-list-outline">
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="railNav = !railNav"
        >
        </v-btn>
      </template>
    </v-list-item>
    <v-divider />
    <v-list>
      <v-list-group
        class="rounded-e-xl"
        v-for="(item, index) in groupReleaseRecord"
        :key="index"
        append-icon="mdi-chevron-down"
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <template v-slot:prepend>
              <v-icon class="mr-0" color="deep-purple-accent-4"
                >mdi-sun-compass</v-icon
              >
            </template>
            <template v-slot:title>
              <v-sheet
                color="blue-accent-2"
                class="ml-2 text-h6 text-white rounded-e-xl"
              >
                <p class="font-weight-bold ml-2">
                  {{ item.year }}
                </p>
              </v-sheet>
            </template>
          </v-list-item>
        </template>
        <v-list>
          <v-list-item
            @click="selectSingleReleaseRecord(relItem)"
            class="py-0"
            v-for="(relItem, relIndex) in item.items"
            :key="relIndex"
          >
            <template v-slot:prepend>
              <v-icon class="mr-0" color="deep-purple-accent-4"
                >mdi-alpha-t-box</v-icon
              >
            </template>
            <template v-slot:title>
              <v-sheet
                color="blue-accent-2"
                class="ml-2 text-body-2 text-white"
              >
                <p class="font-weight-bold ml-2">
                  {{ relItem.release.title }}
                </p>
              </v-sheet>
            </template>
          </v-list-item>
        </v-list>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { IuDRelease } from "@/ctypes/internal/IuDRelease.ts";
import { mockGroupReleaseTask } from "@/scripts/mock/MockRelease.ts";
import { ref } from "vue";

const emit = defineEmits(["selectSingleReleaseRecord"]);
const props = defineProps({
  releaseRecord: Array<{ year: number; release: IuDRelease }>,
});
const railNav = ref<boolean>(false);

// 本地释放记录
let localReleaseRecord = props.releaseRecord as Array<{
  year: number;
  release: IuDRelease;
}>;
/**
 * 根据year分组的释放记录
 */
let groupReleaseRecord = mockGroupReleaseTask(localReleaseRecord);

/**
 * 选择单个释放记录
 * @param item
 */
function selectSingleReleaseRecord(item: {
  year: number;
  release: IuDRelease;
}) {
  // console.log(item);
  // 转入父组件
  emit("selectSingleReleaseRecord", item);
}
</script>

<style scoped lang="scss"></style>
