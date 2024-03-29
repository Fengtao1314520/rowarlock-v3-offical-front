import { IuDInterface } from "@/scripts/cTypes/internal/IuDInterface.ts";
import { mockInterfaceObjs } from "@/scripts/mock/mockInterface.ts";
import { IuDInterfacePackage } from "@/scripts/cTypes/internal/IuDInterfacePackage.ts";
import { createUUID, getRandomInRange } from "@/scripts/third/commonFunc.ts";

/**
 * 接口包列表，返回接口包列表
 * web
 */
export function mockWebInterfacePackages() {
  let webinterfacePackages: Array<IuDInterfacePackage<IuDInterface>> = [];
  let totalnumber = getRandomInRange(12, 18);
  // web接口
  let webInterfaceObjArray: Array<IuDInterface> = mockInterfaceObjs();
  // 循环生成接口包
  for (let i = 0; i < totalnumber; i++) {
    let tempInterfacePackages: IuDInterfacePackage<IuDInterface> = {
      id: createUUID(),
      name: `接口包_${i}`,
      description: `接口包描述_${i}`,
      interfaces: webInterfaceObjArray,
      localvariables: [],
      preinterfaces: [],
    };
    webinterfacePackages.push(tempInterfacePackages);
  }
  // 返回值
  return webinterfacePackages;
}
