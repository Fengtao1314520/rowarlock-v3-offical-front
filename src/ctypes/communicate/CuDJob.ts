export interface CuDJob {
  Id: string;
  Type: string;
  CreateUserId: string;
  AssigneeUserId: string;
  ClientId: string;
  Status: string;
  ExpandTime: number;
  ElapsedTime: number;
  StartTime: string;
  EndTime: string;
  JobContent: string;
  JobResult: string;
  JobResultDesc: string;
  JobResultCode: string;
  JobResultTime: string;
  FinialResult: string;
}
