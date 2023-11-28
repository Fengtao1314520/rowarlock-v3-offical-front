import { v4 as uuidv4 } from "uuid";

/**
 * @description: 获取当前日期
 * @constructor
 */
export function NowDateTime(predate?: Date): string {
  let date: Date;

  if (predate !== undefined && predate !== null) {
    date = predate;
  } else {
    date = new Date();
  }
  let year = date.getFullYear().toString();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  let hour = date.getHours().toString();
  let minute = date.getMinutes().toString();
  let second = date.getSeconds().toString();
  let millisecond = date.getMilliseconds().toString();
  return (
    year +
    "-" +
    month.padStart(2, "0") +
    "-" +
    day.padStart(2, "0") +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second +
    "." +
    millisecond.padStart(3, "0")
  );
}

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
