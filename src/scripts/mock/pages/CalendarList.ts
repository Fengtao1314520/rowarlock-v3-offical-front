import { TaskType } from "@/scripts/cTypes/cEnum/TaskType.ts";
import { IuDTask } from "@/scripts/cTypes/internal/IuDTask.ts";
import { TaskStatus } from "@/scripts/cTypes/cEnum/TaskStatus.ts";

/**
 * @description: 根据 DailyTask 数组，按照taskType 分组
 * @param dailyTasks
 */
export function mockGroupTaskByType(dailyTasks: IuDTask[]) {
  return dailyTasks.reduce(
    (groups, item) => {
      const key = item.Type; // 以 TaskType 作为分组依据
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
export function mockTaskResultIcon(tStatus: TaskStatus): string {
  let icon = "";

  switch (tStatus as TaskStatus) {
    case TaskStatus.Active:
      icon = "mdi-airplane";
      break;
    case TaskStatus.Completed:
      icon = "mdi-timer-sand-complete";
      break;
    case TaskStatus.Running:
      icon = "mdi-run-fast";
      break;
    case TaskStatus.Canceled:
      icon = "mdi-cancel";
      break;
    case TaskStatus.Failed:
      icon = "mdi-clock-remove";
      break;
    case TaskStatus.Paused:
      icon = "mdi-timer-sand-paused";
      break;
    case TaskStatus.Scheduled:
      icon = "mdi-airplane-clock";
      break;
    case TaskStatus.Waiting:
      icon = "md-clock-digital";
      break;
    case TaskStatus.WaitingForActivation:
      icon = "mdi-fan-plus";
      break;
    case TaskStatus.WaitingForChildren:
      icon = "mdi-fan-speed-3";
      break;
    case TaskStatus.WaitingToRun:
      icon = "mdi-fan-clock";
      break;
    case TaskStatus.Blocked:
      icon = "mdi-code-block-tags";
      break;
    case TaskStatus.BlockedByParent:
      icon = "md-code-block-braces";
      break;
    case TaskStatus.Suspended:
      icon = "mdi-candy-outline";
      break;
  }

  return icon;
}

/**
 * @description: 根据 TaskType 获取对应的 title ZH
 * @param title TaskType
 */
export function mockTransTitleZH(title: string): string {
  let result = "";
  switch (title) {
    case String(TaskType.None):
      result = "普通任务";
      break;
    case String(TaskType.Daily):
      result = "日常任务";
      break;
    case String(TaskType.Report):
      result = "报告任务";
      break;
    case String(TaskType.JobTest):
      result = "测试任务";
      break;
    case String(TaskType.Job):
      result = "工作任务";
      break;
    case String(TaskType.Temp):
      result = "临时任务";
      break;
    case String(TaskType.Release):
      result = "释放任务";
      break;
  }
  return result;
}

/**
 * @description: 根据 TaskType 获取对应的 color
 * @param tTypename taskType的名字
 */
export function mockTaskTypeColor(tTypename: string): string {
  let color = "";

  switch (tTypename) {
    case String(TaskType.None):
      color = "grey-lighten-1";
      break;
    case String(TaskType.Daily):
      color = "blue-accent-4";
      break;
    case String(TaskType.Report):
      color = "indigo-accent-4";
      break;
    case String(TaskType.JobTest):
      color = "orange-darken-4";
      break;
    case String(TaskType.Job):
      color = "green-accent-4";
      break;
    case String(TaskType.Temp):
      color = "pink-lighten-1";
      break;
    case String(TaskType.Release):
      color = "deep-purple-accent-4";
      break;
  }

  return color;
}

/**
 * @description: 根据 TaskType 获取对应的 color
 * @param tTypename taskType名字
 */
export function mockTaskTypeIcon(tTypename: string): string {
  let icon = "";
  switch (tTypename) {
    case String(TaskType.None):
      icon = 'fa:fas fa-spinner"';
      break;
    case String(TaskType.Daily):
      icon = "fa:fas fa-hippo";
      break;
    case String(TaskType.Report):
      icon = "fa:fas fa-hotel";
      break;
    case String(TaskType.JobTest):
      icon = "fa:fas fa-user-doctor";
      break;
    case String(TaskType.Job):
      icon = "fa:fas fa-vial-virus";
      break;
    case String(TaskType.Temp):
      icon = "fa:fas fa-campground";
      break;
    case String(TaskType.Release):
      icon = "fa:fas fa-kaaba";
      break;
  }
  return icon;
}
