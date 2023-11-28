export interface CuDTask {
  Id: string;
  Type: string;
  CreateUserId: string;
  AssigneeUserId: string;
  TaskName: string;
  TaskContent: string;
  Status: string;
  // 预期耗时
  ExpandTime: number;
  // 实际耗时
  ElapsedTime: number;
  StartTime: string;
  EndTime: string;
}
