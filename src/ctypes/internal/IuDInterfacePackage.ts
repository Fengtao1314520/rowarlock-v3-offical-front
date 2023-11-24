import { PackageLocalVariables } from "@/ctypes/internal/interfaceLocalVariables.ts";
import { CuDInterfacePackage } from "@/ctypes/communicate/CuDInterfacePackage.ts";

export interface interfacePackageObj<T> {
  id: string;
  name: string;
  description: string;
  interfaces: Array<T>;
  preinterfaces?: Array<T>;
  localvariables?: Array<PackageLocalVariables>;
}

/**
 * 接口包
 * 泛型 T 为接口类型
 */
export interface IuDInterfacePackage extends CuDInterfacePackage {}
