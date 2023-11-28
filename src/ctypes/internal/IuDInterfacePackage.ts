import { PackageLocalVariables } from "@/ctypes/internal/interfaceLocalVariables.ts";

/**
 * @description: 接口包信息
 */
export interface IuDInterfacePackage<T> {
  id: string;
  name: string;
  description: string;
  interfaces: Array<T>;
  preinterfaces?: Array<T>;
  localvariables?: Array<PackageLocalVariables>;
}
