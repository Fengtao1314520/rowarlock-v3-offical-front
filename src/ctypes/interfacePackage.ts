/**
 * 接口包
 * 泛型 T 为接口类型
 */
export interface InterfacePackage<T> {
  id: string;
  name: string;
  description: string;
  interfaces: Array<T>;
}
