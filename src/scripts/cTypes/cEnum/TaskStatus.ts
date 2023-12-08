/**
 * IuDTask 状态
 */
export enum TaskStatus {
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
