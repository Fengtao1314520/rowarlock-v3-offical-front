import { TaskType } from "@/scripts/cTypes/cEnum/TaskType.ts";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";

/**
 * @description 创建一个 mock attribute
 */
export function createMockAttribute(dailTask: IuDTask): any {
  let dates: any;
  let highlight: any;
  // 给颜色赋值
  switch (dailTask.Type) {
    case String(TaskType.None):
      highlight = {
        color: "gray",
      };
      break;
    case String(TaskType.Daily):
      highlight = {
        color: "blue",
      };
      break;
    case String(TaskType.Report):
      highlight = {
        color: "indigo",
      };
      break;
    case String(TaskType.JobTest):
      highlight = {
        color: "orange",
      };
      break;
    case String(TaskType.Job):
      highlight = {
        color: "red",
      };
      break;
    case String(TaskType.Temp):
      highlight = {
        color: "pink",
      };
      break;
    case String(TaskType.Release):
      highlight = {
        color: "purple",
      };
      break;
    default:
      highlight = {
        color: "green",
        fillMode: "outline",
        contentClass: "italic",
      };
      break;
  }
  // 给日期赋值
  if (dailTask.ExpandTime === 1) {
    dates = new Date(dailTask.StartTime);
  } else {
    dates = [
      {
        start: new Date(dailTask.StartTime),
        end: new Date(dailTask.EndTime),
      },
    ];
  }
  // 返回
  return {
    highlight: highlight,
    dates: dates,
    popover: true,
    customData: {
      task: dailTask,
    },
  };
}

/**
 * @description 计算任务完成百分比
 * MOCK
 * @param task IuDTask
 */
export function getMockTimeDiffPercentage(task: IuDTask): number {
  if (task.ElapsedTime <= 0) {
    // 任务尚未开始
    return 0;
  } else if (task.ElapsedTime === task.ExpandTime) {
    // 任务已经结束
    return 100;
  } else {
    // 计算完成百分比
    // INFO: 时间差，单位天
    return Math.round((task.ElapsedTime / task.ExpandTime) * 100); // 百分比，四舍五入保留整数
  }
}
