import { taskStatus, taskType } from "@/ctypes/cenum/taskType.ts";
import { getRandomDateRange } from "@/scripts/third/smallThird";
import { IuDTask } from "@/ctypes/internal/IuDTask.ts";
import {
  createUUID,
  getRandomInRange,
  NowDateTime,
  randomBoolean,
} from "@/scripts/third/commonFunc.ts";

/**
 * @description 随机生成一个日常任务
 * @param count 生成的任务数量
 */
export function generateRandomDailyTasks(count: number): IuDTask[] {
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

  // 任务列表
  let tasks: IuDTask[] = [];

  // 生成任务
  for (let i = 0; i < count; i++) {
    // 随机
    let randomIndex = Math.floor(Math.random() * taskNames.length);
    // 是一个还是连续的
    let issingle = randomBoolean();
    let startdt: string = "";
    let enddt: string = "";
    // 默认持续时间
    let expandTime: number = 1;
    let elapsedTime: number = 1;

    // 重新赋值时间
    if (issingle) {
      // 一天完成的任务
      let randomDate = getRandomDateRange(expandTime);
      startdt = NowDateTime(randomDate[0]);
      enddt = NowDateTime(randomDate[1]);
    } else {
      // 多日任务
      expandTime = getRandomInRange(3, 6);
      elapsedTime = getRandomInRange(1, expandTime - 1);
      let randomDate = getRandomDateRange(elapsedTime);
      startdt = NowDateTime(randomDate[0]);
      enddt = NowDateTime(randomDate[1]);
    }

    // 创建new task
    let newTask: IuDTask = {
      AssigneeUserId: "",
      CreateUserId: "",
      ElapsedTime: elapsedTime,
      ExpandTime: expandTime,
      Id: createUUID(),
      StartTime: startdt,
      EndTime: enddt,
      TaskContent: taskDescriptions[randomIndex],
      TaskName: taskNames[randomIndex],
      Status:
        Object.keys(taskStatus)[
          Math.floor(Math.random() * (Object.keys(taskStatus).length - 1) + 1)
        ],
      Type: Object.keys(taskType)[
        Math.floor(Math.random() * (Object.keys(taskType).length - 1) + 1)
      ],
    };
    tasks.push(newTask);
  }

  return tasks;
}
