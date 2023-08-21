import { defineStore } from "pinia";
import { ref } from "vue";
import { InterfacePackage } from "@/ctypes/interfacePackage.ts";

export const useWorkingInterfacePackageStore = defineStore(
  "workingInterfacePackage",
  () => {
    const workingpackage = ref();

    function changeWorkingPackage(newPackage: InterfacePackage<any>) {
      workingpackage.value = newPackage;
    }

    return { workingpackage, changeWorkingPackage };
  },
);
