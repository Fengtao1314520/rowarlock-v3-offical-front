import { BasicKeyValue, TaskObject } from "@/ctypes/basicTask";

/**
 * @description 释放类型
 */
export enum ReleaseType {
  // 正式
  Official = "Official",
  // 测试
  Test = "Test",
  // 试用
  FieldTest = "FieldTest",
}

export enum FeatureType {
  // 新增
  New = "New",
  // 修改
  Improve = "Improve",
  // 修复
  Fix = "Fix",
}

/**
 * @description 释放任务对象的基本信息
 */
export interface BasicTaskInfos {
  // 产品名称
  productName: string;
  // 释放版本
  releaseVersion: string;
  // 释放日期
  releaseDate: string;
  // 释放年度标识数
  branchNumber: number;
  // 释放来源标识类型
  tagType: string;
  // 释放来源标识版本号
  tagNumber: number;
  // 释放类型
  releaseType: ReleaseType;
  // 是否为hotfix
  isHotfix: boolean;
}

/**
 * @description 释放任务内容
 */
export interface ReleaseTaskContent {
  id: string;
  type: FeatureType;
  feature: string;
}

/**
 * @description 释放任务对象
 */
export interface ReleaseTask extends TaskObject {
  // 任务修改时间
  modifyDate: string;
  // 基本信息
  basicInfos: BasicTaskInfos;
  // 关联配置与配置值
  relatedConfig: Array<BasicKeyValue>;
  // 任务内容
  content: Array<ReleaseTaskContent>;
  // 测试环境
  testEnv: Array<BasicKeyValue>;
}
