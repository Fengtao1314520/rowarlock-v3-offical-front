import { defineStore } from "pinia";
import { ref } from "vue";
import { IuDInterfacePackage } from "@/ctypes/internal/IuDInterfacePackage.ts";

export const useWorkingInterfacePackageStore = defineStore(
  "workingInterfacePackage",
  () => {
    const workingpackage = ref();

    function changeWorkingPackage(newPackage: IuDInterfacePackage<any>) {
      workingpackage.value = newPackage;
    }

    return { workingpackage, changeWorkingPackage };
  },
);
