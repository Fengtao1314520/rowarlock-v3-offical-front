import { defineStore } from "pinia";
import { ref } from "vue";

export const useWorkingOneTestToolStore = defineStore(
  "workingOneTestToolStore",
  () => {
    const workingOneTestTool = ref();

    function changeWorkingOneTestTool(newVal: Array<any>) {
      workingOneTestTool.value = newVal;
    }

    return { workingOneTestTool, changeWorkingOneTestTool };
  },
);
