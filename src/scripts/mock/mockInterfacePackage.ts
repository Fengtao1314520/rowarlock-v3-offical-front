import { createUUID, getRandomInRange } from "@/scripts/third/smallThird";
import { webInterfaceObj } from "@/ctypes/internal/IuDInterface.ts";
import { mockInterfaceObjs } from "@/scripts/mock/MockInterface";
import { IuDInterfacePackage } from "@/ctypes/internal/IuDInterfacePackage.ts";

/**
 * 接口包列表，返回接口包列表
 * web
 */
export function mockWebInterfacePackages() {
  let webinterfacePackages: Array<IuDInterfacePackage<webInterfaceObj>> = [];
  let totalnumber = getRandomInRange(12, 18);
  // web接口
  let webInterfaceObjArray: Array<webInterfaceObj> = mockInterfaceObjs();
  // 循环生成接口包
  for (let i = 0; i < totalnumber; i++) {
    let tempInterfacePackages: IuDInterfacePackage<webInterfaceObj> = {
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
