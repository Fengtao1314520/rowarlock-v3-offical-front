import { DailyTask } from "@/ctypes/dailyTask";
import { taskStatus, taskType } from "@/ctypes/taskType";

/**
 * @description: 根据 attributes 获取 DailyTask 数组
 * @param attributes
 */
export function mockGetDailyTask(attributes: any[] | undefined): DailyTask[] {
  let tasks: DailyTask[] = [];
  if (attributes) {
    let tempTasks = attributes.map((item) => {
      if (item.customData) {
        return item.customData.task;
      }
    });
    // 删除 undefined
    tasks = tempTasks.filter((item) => item !== undefined);
  }
  return tasks;
}

/**
 * @description: 根据 DailyTask 数组，按照taskType 分组
 * @param dailyTasks
 */
export function mockGroupDailyTask(dailyTasks: DailyTask[]) {
  return dailyTasks.reduce((groups, item) => {
    const key = item.taskType; // 以 taskType 作为分组依据
    if (!groups[key]) {
      groups[key] = {
        name: key,
        items: [],
      };
    }
    groups[key].items.push(item);

    return groups;
  }, {} as Record<string, { name: string; items: DailyTask[] }>);
}

/**
 * @description: 未分组添加额外属性
 * @param records 已分组的 DailyTask 数组
 */
export function mockGroupAddExtra(
  records: Record<string, { name: string; items: DailyTask[] }>
) {
  const result: Record<
    string,
    { name: string; items: DailyTask[]; typecolor: string }
  > = {};

  Object.values(records).forEach((group) => {
    const { name, items } = group;
    let singleResult = {
      ...group,
      typecolor: "",
    };
    singleResult.typecolor = mockTaskTypeColor(name as taskType);
    // 将单个group的结果存入result对象中
    result[name] = singleResult;
  });

  return result;
}

/**
 * @description: 根据 taskStatus 获取对应的 icon
 * @param tStatus taskStatus
 */
export function mockTaskResultIcon(tStatus: taskStatus): string {
  let icon = "";
  switch (tStatus) {
    case taskStatus.todo:
      icon = "mdi-bus-marker";
      break;
    case taskStatus.doing:
      icon = "mdi-run-fast";
      break;
    case taskStatus.done:
      icon = "mdi-cookie-check-outline";
      break;
    case taskStatus.block:
      icon = "mdi-bus-stop-uncovered";
      break;
    case taskStatus.cancel:
      icon = "mdi-pause-circle-outline";
      break;
  }

  return icon;
}

/**
 * @description: 根据 taskStatus 获取对应的 color
 * @param tStatus taskStatus
 */
export function mockTaskResultColor(tStatus: taskStatus): string {
  let color = "";
  switch (tStatus) {
    case taskStatus.todo:
      color = "purple-accent-4";
      break;
    case taskStatus.doing:
      color = "blue-accent-4";
      break;
    case taskStatus.done:
      color = "green-accent-4";
      break;
    case taskStatus.block:
      color = "red-accent-3";
      break;
    case taskStatus.cancel:
      color = "amber-accent-4";
      break;
  }

  return color;
}

/**
 * @description: 根据 taskType 获取对应的 title ZH
 * @param title taskType
 */
export function mockTransTitleZH(title: string): string {
  let result = "";
  switch (title) {
    case taskType.daily:
      result = "日常任务";
      break;
    case taskType.temporary:
      result = "临时任务";
      break;
    case taskType.longTerm:
      result = "长期任务";
      break;
    case taskType.shortTerm:
      result = "短期任务";
      break;
    case taskType.other:
      result = "其他任务";
      break;
  }
  return result;
}

/**
 * @description: 根据 taskType 获取对应的 color
 * @param tType taskType
 */
export function mockTaskTypeColor(tType: taskType): string {
  let color = "";
  switch (tType) {
    case taskType.daily:
      color = "blue-accent-4";
      break;
    case taskType.temporary:
      color = "pink-lighten-1";
      break;
    case taskType.longTerm:
      color = "green-accent-4";
      break;
    case taskType.shortTerm:
      color = "orange-darken-4";
      break;
    case taskType.other:
      color = "deep-purple-accent-4";
      break;
  }
  return color;
}
