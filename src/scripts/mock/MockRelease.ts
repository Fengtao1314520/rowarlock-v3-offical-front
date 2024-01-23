import {
  getRandomDateInThisMonth,
  randomIntFrom3To10,
} from "@/scripts/third/smallThird";
import {
  BasicInfos,
  FeatureType,
  IuDRelease,
  ReleaseContent,
  ReleaseType,
} from "@/scripts/cTypes/internal/IuDRelease.ts";
import {
  createUUID,
  getRandomInRange,
  randomBoolean,
} from "@/scripts/third/commonFunc.ts";
import { CuDRelease } from "@/scripts/cTypes/communicate/CuDRelease.ts";

/**
 * @description 创建随机的Release记录, 按年份创建
 * @constructor
 */
export function mockReleaseBaseYear(): Array<{ year: number; count: number }> {
  return [
    {
      year: 2023,
      count: 10,
    },
    {
      year: 2022,
      count: 10,
    },
  ];
}

/**
 * @description 创建一个随机的Release记录列表,只包含id和name(title)
 * @param year
 */
export function mockReleaseList(year: number): Array<any> {
  //随机数
  let numbers = randomIntFrom3To10();

  // 定义一个空数组
  let releaseList: Array<any> = [];
  for (let i = 0; i < numbers; i++) {
    // 塞入
    releaseList.push({ id: createUUID(), name: `${year}年第${i + 1}次发布` });
  }
  return releaseList;
}

export function mockRelease(id: string, name: string, year: number) {
  let oneitem: IuDRelease = createMockReleaseItem(name, id, year);
  // IcDRelease 转 CuDRelease
  let cudRelease: CuDRelease = {
    AssigneeUserId: id,
    CreateDateTime: oneitem.createDate,
    CreateUserId: id,
    Id: oneitem.taskId,
    ModifyDateTime: oneitem.modifyDate,
    ReleaseContent: JSON.stringify(oneitem),
    ReleaseDescription: oneitem.description,
    ReleaseName: name,
    Status: "completed",
  };

  return cudRelease;
}

/**
 * @description 创建一个随机的Release记录
 * @param name
 * @param id
 * @param year
 */
export function createMockReleaseItem(name: string, id: string, year: number) {
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
    taskId: id,
    title: name,
    basicInfos: basicTaskInfos,
    relatedConfig: relatedConfig,
    testEnv: testEnv,
    content: content,
  };

  return releaseTask;
}

/**
 * @description: 根据 year 数组，按照 year 分组
 * @param releaseTasks
 * @param releaseTasks
 */
export function groupReleaseTaskByYear(
  releaseTasks: Array<{ year: number; release: CuDRelease }>,
): Record<string, { year: string; items: Array<IuDRelease> }> {
  let tempresult: Record<string, { year: string; items: Array<IuDRelease> }> =
    {};
  for (let i = 0; i < releaseTasks.length; i++) {
    if (!tempresult[releaseTasks[i].year]) {
      tempresult[releaseTasks[i].year] = {
        year: releaseTasks[i].year.toString(),
        items: [],
      };
    }
    let year = tempresult[releaseTasks[i].year].year;
    //todo: 转换为IuDRelease
    let jsonObj: IuDRelease = JSON.parse(
      JSON.stringify(releaseTasks[i].release),
    );
    if (tempresult[year].items.length === 0) {
      tempresult[year].items.push(jsonObj);
    } else {
      tempresult[year].items.push(jsonObj);
    }
  }
  return tempresult;
}
