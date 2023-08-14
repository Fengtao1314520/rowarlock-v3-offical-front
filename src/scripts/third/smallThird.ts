import { v4 as uuidv4 } from "uuid";

export function createUUID(): string {
  return uuidv4();
}

/**
 * @description 随机取范围内值
 * @param min 最小值
 * @param max 最大值
 */
export function getRandomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @description 随机生成一个布尔值
 */
export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

/**
 * @description 随机生成一个3-10之间的整数
 */
export function randomIntFrom3To10(): number {
  const min = 3;
  const max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description 随机生成两个个199-299之间的整数
 */
export function generateRandom199To299(): [number, number] {
  const min = 199;
  const max = 299;
  const firstNum = Math.floor(Math.random() * (max - min + 1)) + min; // 生成第一个数
  const secondNum = Math.floor(Math.random() * (max - firstNum + 1)) + firstNum; // 生成第二个数
  return [firstNum, secondNum];
}

/**
 * @description 随机生成一个当月的日期
 */
export function getRandomDateInThisMonth(): Date {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const randomDay = Math.floor(Math.random() * daysInMonth) + 1;

  return new Date(year, month, randomDay);
}

/**
 * @description 随机生成一个日期范围
 * @param length 日期范围的长度，单位为天
 */
export function getRandomDateRange(length: number): [Date, Date] {
  const startDate = getRandomDateInThisMonth();
  const endDate = new Date(
    startDate.getTime() + (length - 1) * 24 * 60 * 60 * 1000,
  );

  return [startDate, endDate];
}

/**
 * @description 计算任务完成百分比
 * @param date1 任务开始日期
 * @param date2 任务结束日期
 * @param date3 当前日期
 * @param duration 任务持续天数
 */
export function getTimeDiffPercentage(
  date1: Date,
  date2: Date,
  date3: Date,
  duration: number,
): number {
  if (date3 < date1) {
    // 任务尚未开始
    return 0;
  } else if (date3 >= date2) {
    // 任务已经结束
    return 100;
  } else {
    // 计算完成百分比
    const diff = date3.getTime() - date1.getTime(); // 时间差，单位为毫秒
    const elapsedDays = Math.ceil(diff / (24 * 3600 * 1000)); // 已过天数，向上取整
    return Math.round((elapsedDays / duration) * 100); // 百分比，四舍五入保留整数
  }
}

/**
 * @description 格式化日期对象为字符串
 * @param date 日期对象
 */
export function formatDateToString2(date: Date): string {
  const year = date.getFullYear(); // 获取日期对象的年份
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 获取日期对象的月份，并按照两位数格式化
  const day = date.getDate().toString().padStart(2, "0"); // 获取日期对象的日期，并按照两位数格式化

  return `${year} 年 ${month} 月 ${day} 日`; // 将年、月、日拼接成格式化的日期字符串
}

/**
 * @description 获取当前年份以及往前两年
 */
export function getYearsAndBefore3(): number[] {
  const currentYear = new Date().getFullYear(); // 获取当前年份
  const years = [];
  for (let i = 0; i < 3; i++) {
    // 往前循环2年加上今年共计3年
    years.push(currentYear - i);
  }
  return years;
}

/**
 * 随机生成 JSON 对象和内容

 * @param depth 生成 JSON 的深度

 * @returns 生成的 JSON 对象

 */
export function generateRandomJSON(depth: number): any {
  if (depth <= 0) {
    // 如果深度为 0，则返回一个随机字符串作为内容
    return Math.random().toString(36).substring(7);
  } else {
    const jsonObject: any = {};
    const numKeys = Math.floor(Math.random() * 5) + 1; // 随机生成 1 到 5 个属性
    for (let i = 0; i < numKeys; i++) {
      const key = Math.random().toString(36).substring(7); // 随机生成属性名
      // 递归生成属性值
      jsonObject[key] = generateRandomJSON(depth - 1);
    }
    return jsonObject;
  }
}
