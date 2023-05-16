/**
 * @description 随机生成一个布尔值
 */
export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

/**
 * @description 随机生成一个 2-6 之间的整数
 */
export function randomIntFrom2To6(): number {
  return Math.floor(Math.random() * 5) + 2;
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
    startDate.getTime() + (length - 1) * 24 * 60 * 60 * 1000
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
  duration: number
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
