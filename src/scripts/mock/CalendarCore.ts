import { randomIntFrom2To6 } from "@/scripts/third/smallThird";
import { generateRandomDailyTasks } from "@/scripts/mock/MockDailyTask";
import { taskType } from "@/ctypes/taskType";
import { DailyTask } from "@/ctypes/dailyTask";

/**
 * @description: 根据 attributes 获取 DailyTask 数组
 */
export function mockAttributes(): any[] {
  let attributes: any[] = [];
  // 随机生成 2-6 个任务
  let taskNum = randomIntFrom2To6();
  // 生成 DailyTask 数组
  let allTasks: DailyTask[] = generateRandomDailyTasks(taskNum);
  // 生成 attributes
  allTasks.forEach((item) => {
    let attr = createMockAttribute(item);
    attributes.push(attr);
  });

  return attributes;
}

/**
 * @description 创建一个 mock attribute
 */
function createMockAttribute(dailTask: DailyTask): any {
  let dates: any;
  let highlight: any;
  // 给颜色赋值
  switch (dailTask.taskType) {
    case taskType.daily:
      highlight = {
        color: "indigo",
      };
      break;
    case taskType.longTerm:
      highlight = {
        color: "green",
      };
      break;
    case taskType.shortTerm:
      highlight = {
        color: "purple",
      };
      break;
    case taskType.temporary:
      highlight = {
        color: "blue",
      };
      break;
    case taskType.other:
      highlight = {
        color: "teal",
      };
      break;
    default:
      highlight = {
        color: "red",
        fillMode: "outline",
        contentClass: "italic",
      };
      break;
  }

  // 给日期赋值
  if (dailTask.taskDuration === 1) {
    dates = dailTask.taskDate;
  } else {
    dates = {
      start: (dailTask.taskDate as [Date, Date])[0],
      end: (dailTask.taskDate as [Date, Date])[1],
    };
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
