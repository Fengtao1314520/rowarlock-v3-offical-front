import { CuDTask } from "@/ctypes/communicate/CuDTask.ts";

/**
 * 任任何一个事务均可以称为task，包含待执行的job
 */
export interface IuDTask extends CuDTask {
  [key: string]: any;
}
