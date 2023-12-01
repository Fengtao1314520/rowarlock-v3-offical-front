import {
  getRandomDateInThisMonth,
  getYearsAndBefore3,
  randomIntFrom3To10,
} from "@/scripts/third/smallThird";
import {
  BasicInfos,
  FeatureType,
  IuDRelease,
  ReleaseContent,
  ReleaseType,
} from "@/ctypes/internal/IuDRelease.ts";
import {
  createUUID,
  getRandomInRange,
  randomBoolean,
} from "@/scripts/third/commonFunc.ts";

/**
 * @description 创建随机的Release记录
 * @constructor
 */
export function MockRelease() {
  //随机数
  let numbers = randomIntFrom3To10();
  //年份
  let years = getYearsAndBefore3();

  // 定义一个空数组
  let releaseList: Array<{
    year: number;
    release: IuDRelease;
  }> = [];

  // 按{year: number;release: IuDRelease;}格式插入
  years.forEach((year) => {
    for (let i = 0; i < numbers; i++) {
      releaseList.push(createMockReleaseRecord(year));
    }
  });

  return releaseList;
}

/**
 * @description: 根据 year 数组，按照 year 分组
 * @param releaseTasks
 * @param releaseTasks
 */
export function mockGroupReleaseTask(
  releaseTasks: Array<{ year: number; release: IuDRelease }>,
) {
  return releaseTasks.reduce(
    (groups, item) => {
      const key = item.year; // 以 year 作为分组依据
      if (!groups[key]) {
        groups[key] = {
          year: key,
          items: [],
        };
      }
      groups[key].items.push(item);
      return groups;
    },
    {} as Record<
      string,
      { year: number; items: Array<{ year: number; release: IuDRelease }> }
    >,
  );
}

/**
 * 私有方法
 * 年
 * @param year
 */
function createMockReleaseRecord(year: number) {
  // 基本信息
  let basicTaskInfos: BasicInfos = {
    branchNumber: getRandomInRange(49999, 89999),
    isHotfix: randomBoolean(),
    productName: "RoWarlock",
    releaseDate: getRandomDateInThisMonth().toString(),
    releaseType: ReleaseType.Official,
    releaseVersion: `${year}-${getRandomInRange(1, 3)}
    -${getRandomInRange(1, 3)}
    -${getRandomInRange(6, 10)}
    .${getRandomInRange(1000, 3000)}`,
    tagNumber: randomIntFrom3To10(),
    tagType: "SVN",
  };

  // 关联配置
  let relatedConfig: { value: string; key: string }[] = [
    {
      key: "All Config Entry.pdf",
      value: "56445",
    },
  ];
  // 更新内容
  let content: Array<ReleaseContent> = [
    {
      id: "N-1004",
      type: FeatureType.New,
      feature: "息记录新增表情分类，查找会话表情更便捷",
    },
    {
      id: "N-1005",
      type: FeatureType.Improve,
      feature: "会话中的图片、视频等文件，可使用“多选”批量保存",
    },
    {
      id: "N-1006",
      type: FeatureType.Improve,
      feature: "远程协助可自适应屏幕大小，自如缩放，操作更便捷",
    },
    {
      id: "N-1007",
      type: FeatureType.Fix,
      feature: "GIF热图新增搜索功能，热图便捷搜，斗图趣无穷",
    },
  ];
  // 测试环境
  let testEnv: { value: string; key: string }[] = [
    {
      key: "Windows 10",
      value: "10.0.19044.2965",
    },
    {
      key: "Linux Redhat",
      value: "7.1.4 Rel",
    },
  ];

  // 释放任务
  let releaseTask: IuDRelease = {
    author: "Nate Ford",
    createDate: Date.now().toString(),
    description: "RoWarlock 最新释放",
    modifyDate: Date.now().toString(),
    taskId: createUUID(),
    title: "RoWarlock 释放",
    basicInfos: basicTaskInfos,
    relatedConfig: relatedConfig,
    testEnv: testEnv,
    content: content,
  };

  //console.log(releaseTask);
  return {
    year: year,
    release: releaseTask,
  };
}
