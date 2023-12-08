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

export function capitalizeFirstLetter(jsonObject: any) {
  return JSON.stringify(jsonObject).replace(
    /"([^"]*)":/g,
    function (match, key) {
      return '"' + key.charAt(0).toUpperCase() + key.slice(1) + ":";
    },
  );
}
