export interface CuDTask {
  Id: string;
  Type: string;
  CreateUserId: string;
  AssigneeUserId: string;
  TaskName: string;
  TaskContent: string;
  Status: string;
  ExpandTime: number;
  ElapsedTime: number;
  StartTime: string;
  EndTime: string;
}
