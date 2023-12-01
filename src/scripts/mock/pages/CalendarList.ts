import { taskStatus, taskType } from "@/ctypes/cenum/taskType.ts";
import { IuDTask } from "@/ctypes/internal/IuDTask.ts";

/**
 * @description: 根据 DailyTask 数组，按照taskType 分组
 * @param dailyTasks
 */
export function mockGroupTaskByType(dailyTasks: IuDTask[]) {
  return dailyTasks.reduce(
    (groups, item) => {
      const key = item.Type; // 以 taskType 作为分组依据
      if (!groups[key]) {
        groups[key] = {
          name: key,
          items: [],
        };
      }
      groups[key].items.push(item);
      // 返回值
      return groups;
    },
    {} as Record<string, { name: string; items: IuDTask[] }>,
  );
}

/**
 * @description: 未分组添加额外属性
 * @param records 已分组的 DailyTask 数组
 */
export function mockGroupAddExtra(
  records: Record<string, { name: string; items: IuDTask[] }>,
) {
  let result: Record<
    string,
    { name: string; items: IuDTask[]; typeColor: string; typeIcon: string }
  > = {};

  Object.values(records).forEach((group) => {
    let { name, items } = group;
    let singleResult = {
      ...group,
      typeColor: "",
      typeIcon: "",
    };
    singleResult.typeColor = mockTaskTypeColor(name);
    singleResult.typeIcon = mockTaskTypeIcon(name);
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

  switch (tStatus as taskStatus) {
    case taskStatus.Active:
      icon = "mdi-airplane";
      break;
    case taskStatus.Completed:
      icon = "mdi-timer-sand-complete";
      break;
    case taskStatus.Running:
      icon = "mdi-run-fast";
      break;
    case taskStatus.Canceled:
      icon = "mdi-cancel";
      break;
    case taskStatus.Failed:
      icon = "mdi-clock-remove";
      break;
    case taskStatus.Paused:
      icon = "mdi-timer-sand-paused";
      break;
    case taskStatus.Scheduled:
      icon = "mdi-airplane-clock";
      break;
    case taskStatus.Waiting:
      icon = "md-clock-digital";
      break;
    case taskStatus.WaitingForActivation:
      icon = "mdi-fan-plus";
      break;
    case taskStatus.WaitingForChildren:
      icon = "mdi-fan-speed-3";
      break;
    case taskStatus.WaitingToRun:
      icon = "mdi-fan-clock";
      break;
    case taskStatus.Blocked:
      icon = "mdi-code-block-tags";
      break;
    case taskStatus.BlockedByParent:
      icon = "md-code-block-braces";
      break;
    case taskStatus.Suspended:
      icon = "mdi-candy-outline";
      break;
  }

  return icon;
}

/**
 * @description: 根据 taskType 获取对应的 title ZH
 * @param title taskType
 */
export function mockTransTitleZH(title: string): string {
  let result = "";
  switch (title) {
    case String(taskType.None):
      result = "普通任务";
      break;
    case String(taskType.Daily):
      result = "日常任务";
      break;
    case String(taskType.Report):
      result = "报告任务";
      break;
    case String(taskType.JobTest):
      result = "测试任务";
      break;
    case String(taskType.Job):
      result = "工作任务";
      break;
    case String(taskType.Temp):
      result = "临时任务";
      break;
    case String(taskType.Release):
      result = "释放任务";
      break;
  }
  return result;
}

/**
 * @description: 根据 taskType 获取对应的 color
 * @param tTypename taskType的名字
 */
export function mockTaskTypeColor(tTypename: string): string {
  let color = "";

  switch (tTypename) {
    case String(taskType.None):
      color = "grey-lighten-1";
      break;
    case String(taskType.Daily):
      color = "blue-accent-4";
      break;
    case String(taskType.Report):
      color = "indigo-accent-4";
      break;
    case String(taskType.JobTest):
      color = "orange-darken-4";
      break;
    case String(taskType.Job):
      color = "green-accent-4";
      break;
    case String(taskType.Temp):
      color = "pink-lighten-1";
      break;
    case String(taskType.Release):
      color = "deep-purple-accent-4";
      break;
  }

  return color;
}

/**
 * @description: 根据 taskType 获取对应的 color
 * @param tTypename taskType名字
 */
export function mockTaskTypeIcon(tTypename: string): string {
  let icon = "";
  switch (tTypename) {
    case String(taskType.None):
      icon = 'fa:fas fa-spinner"';
      break;
    case String(taskType.Daily):
      icon = "fa:fas fa-hippo";
      break;
    case String(taskType.Report):
      icon = "fa:fas fa-hotel";
      break;
    case String(taskType.JobTest):
      icon = "fa:fas fa-user-doctor";
      break;
    case String(taskType.Job):
      icon = "fa:fas fa-vial-virus";
      break;
    case String(taskType.Temp):
      icon = "fa:fas fa-campground";
      break;
    case String(taskType.Release):
      icon = "fa:fas fa-kaaba";
      break;
  }
  return icon;
}
