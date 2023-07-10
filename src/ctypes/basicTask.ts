/**
 * @description task对象
 * 对于系统内所有的任务、释放和其他以'任务'概念存在的个体，统称task
 */
export interface TaskObject {
  // 任务id
  taskId: string;
  // 任务创建时间
  createDate: string;
  // 作者
  author: string;
  // 任务标题
  title?: string;
  // 任务描述
  description?: string;
}

/**
 * @description 基本的键值对
 */
export interface BasicKeyValue {
  key: string;
  value: any;
}
