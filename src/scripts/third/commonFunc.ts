import { v4 as uuidv4 } from "uuid";

/**
 * @description: 获取当前日期
 * @constructor
 */
export function nowDateTime(predate?: Date): string {
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

/**
 * @description 生成一个UUID
 */
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

/**
 * 枚举值变为数组
 * @param {*} emun 枚举对象
 */
export function enumToArray(emun: any) {
  const all = [];
  for (const key in emun) {
    all.push(emun[key]);
  }
  return all;
}
