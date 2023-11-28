/**
 * IuDTask Type
 */
export enum taskType {
  None = "None",
  Job = "Job",
  Temp = "Temp",
  Release = "Release",
  Daily = "Daily",
  Report = "Report",
  JobTest = "JobTest",
}

/**
 * IuDTask 状态
 */
export enum taskStatus {
  Active = "Active",
  Completed = "Completed",
  Canceled = "Canceled",
  Failed = "Failed",
  Paused = "Paused",
  Running = "Running",
  Scheduled = "Scheduled",
  Waiting = "Waiting",
  WaitingForActivation = "WaitingForActivation",
  WaitingForChildren = "WaitingForChildren",
  WaitingToRun = "WaitingToRun",
  Blocked = "Blocked",
  BlockedByParent = "BlockedByParent",
  Suspended = "Suspended",
}
