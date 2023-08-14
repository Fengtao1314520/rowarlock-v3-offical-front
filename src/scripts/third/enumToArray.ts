/**
 * 枚举值变为数组
 * @param {*} emun 枚举对象
 */
export function EnumToArray(emun: any) {
  const all = [];
  for (const key in emun) {
    all.push(emun[key]);
  }
  return all;
}
