import { taskStatus, taskType } from "@/ctypes/taskType";

export interface DailyTask {
  taskId: string;
  taskDuration: number;
  taskDate: Date | [Date, Date];
  taskName: string;
  taskType: taskType | string;
  taskStatus: taskStatus | string;
  taskDescription: string;
  //taskResult: taskResult;
}
