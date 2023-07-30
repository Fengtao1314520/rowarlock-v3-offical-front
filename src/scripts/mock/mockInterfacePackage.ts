import { createUUID, getRandomInRange } from "@/scripts/third/smallThird";
import { webInterfaceObj } from "@/ctypes/interfaceObj";
import { mockInterfaceObjs } from "@/scripts/mock/MockInterface";
import { InterfacePackage } from "@/ctypes/interfacePackage";

/**
 * 接口包列表，返回接口包列表
 * web
 */
export function mockWebInterfacePackages() {
  let webinterfacePackages: Array<InterfacePackage<webInterfaceObj>> = [];
  let totalnumber = getRandomInRange(12, 18);

  // web接口
  let webInterfaceObjArray: Array<webInterfaceObj> = mockInterfaceObjs();

  for (let i = 0; i < totalnumber; i++) {
    let tempInterfacePackages: InterfacePackage<webInterfaceObj> = {
      id: createUUID(),
      name: `接口包_${i}`,
      description: `接口包描述_${i}`,
      interfaces: webInterfaceObjArray,
    };
    webinterfacePackages.push(tempInterfacePackages);
  }
  // 返回值
  return webinterfacePackages;
}
