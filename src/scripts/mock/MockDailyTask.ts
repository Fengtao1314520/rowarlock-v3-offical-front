import { DailyTask } from "@/ctypes/internal/dailyTask.ts";
import { taskStatus, taskType } from "@/ctypes/cenum/taskType.ts";
import {
  getRandomDateInThisMonth,
  getRandomDateRange,
  randomBoolean,
  randomIntFrom3To10,
} from "@/scripts/third/smallThird";

/**
 * @description 随机生成一个日常任务
 * @param count 生成的任务数量
 */
export function generateRandomDailyTasks(count: number): DailyTask[] {
  // 持续时间
  let crossroad: number = 1;
  // 是一个还是连续的
  let single = randomBoolean();

  // 重新赋值时间
  if (!single) {
    crossroad = 1;
  } else {
    crossroad = randomIntFrom3To10();
  }
  let taskNames = [
    "学习 TypeScript",
    "阅读一篇英文文章",
    "锻炼 30 分钟",
    "写日报",
    "看一部电影",
  ];
  let taskDescriptions = [
    "学习 TypeScript 并完成一道编程练习",
    "阅读一篇英文文章并提炼出其中的核心内容",
    "进行 30 分钟的晨间运动或晚间拉伸",
    "总结今天工作的重点和难点，并记录感悟",
    "从豆瓣 Top 250 中选择一部电影观看",
  ];
  let taskTypes = Object.values(taskType);
  let taskStatuses = Object.values(taskStatus);
  //let taskResults = Object.values(taskResult);
  // 任务列表
  let tasks: DailyTask[] = [];

  // 生成任务
  for (let i = 0; i < count; i++) {
    let randomIndex = Math.floor(Math.random() * taskNames.length);

    let newTask: DailyTask = {
      taskDuration: crossroad,
      taskId: String(i),
      taskDate: new Date(),
      taskName: taskNames[randomIndex],
      taskType: taskTypes[Math.floor(Math.random() * taskTypes.length)],
      taskStatus: taskStatuses[Math.floor(Math.random() * taskStatuses.length)],
      taskDescription: taskDescriptions[randomIndex],
      //taskResult: taskResults[Math.floor(Math.random() * taskResults.length)],
    };

    if (crossroad === 1) {
      newTask.taskDate = getRandomDateInThisMonth();
    } else {
      newTask.taskDate = getRandomDateRange(crossroad);
    }
    tasks.push(newTask);
  }

  return tasks;
}
