export function l18i_release(item: string): string {
  switch (item) {
    case "branchNumber":
      return "分支版本号:";
    case "isHotfix":
      return "是否热修复:";
    case "productName":
      return "产品名称:";
    case "releaseDate":
      return "发布日期:";
    case "releaseType":
      return "发布类型:";
    case "releaseVersion":
      return "发布版本号:";
    case "tagNumber":
      return "年度释放号:";
    case "tagType":
      return "分支类型:";
    default:
      return item;
  }
}

export function l18i_relatedConfig(items: Array<any>): Array<any> {
  let result: any[] = [];
  items.forEach((item, index) => {
    result.push({
      prefield: `关联配置_${index + 1}:`,
      label: item.key,
      values: item.value,
    });
  });
  return result;
}

export function l18i_content(items: Array<any>) {
  const groupedQueue = items.reduce((result, item) => {
    const { id, type, feature } = item;
    const combinedString = `${id} : ${feature}`;

    if (result[type]) {
      result[type].push(combinedString);
    } else {
      result[type] = [combinedString];
    }
    return result;
  }, {});

  return Object.entries(groupedQueue).map(([key, value]) => ({
    key,
    value,
  }));
}
