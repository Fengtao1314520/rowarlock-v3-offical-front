import { defineStore } from "pinia";
import { ref } from "vue";
import { IuDInterfacePackage } from "@/scripts/cTypes/internal/IuDInterfacePackage.ts";

/**
 * @description: 工作中接口包
 */
export const useWorkingInterfacePackageStore = defineStore(
  "workingInterfacePackage",
  () => {
    const workingpackage = ref();

    /**
     * @description: 改变工作中接口包
     * @param newPackage
     */
    function changeWorkingPackage(newPackage: IuDInterfacePackage<any>) {
      workingpackage.value = newPackage;
    }

    // 返回
    return { workingpackage, changeWorkingPackage };
  },
);
