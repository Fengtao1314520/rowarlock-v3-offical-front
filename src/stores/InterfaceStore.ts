import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWorkingInterfacePackageStore = defineStore('workingInterfacePackage', () => {
    const workingpackage = ref()

    function changeWorkingPackage(newPackage) {
        workingpackage.value = newPackage
    }

    return {workingpackage, changeWorkingPackage}
})