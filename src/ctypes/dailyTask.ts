import { taskStatus, taskType } from "@/ctypes/taskType";

/**
 * @description DailyTask
 * @description 日常任务 类型
 */
export type DailyTask = {
  taskId: string;
  taskDuration: number;
  taskDate: Date | [Date, Date];
  taskName: string;
  taskType: taskType | string;
  taskStatus: taskStatus | string;
  taskDescription: string;
  //taskResult: taskResult;
};
