import { CuDTask } from "@/ctypes/communicate/CuDTask.ts";

/**
 * @description: 任务信息
 * 任意一个可被存储的操作均被视作为一个任务
 * 任务的类型由taskType决定
 */
export interface IuDTask extends CuDTask {
  [key: string]: any;
}
