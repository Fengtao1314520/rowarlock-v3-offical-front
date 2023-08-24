import { PackageLocalVariables } from "@/ctypes/interfaceLocalVariables.ts";

/**
 * 接口包
 * 泛型 T 为接口类型
 */
export interface InterfacePackage<T> {
  id: string;
  name: string;
  description: string;
  interfaces: Array<T>;
  preinterfaces?: Array<T>;
  localvariables?: Array<PackageLocalVariables>;
}
