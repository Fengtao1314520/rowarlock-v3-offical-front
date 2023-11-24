/**
 * IuDTask Type
 */
export enum taskType {
  None = 0,
  Job = 1,
  Temp = 2,
  Release = 3,
  Daily = 4,
  Report = 5,
  JobTest = 10,
}

/**
 * IuDTask 状态
 */
export enum taskStatus {
  Active = 0,
  Completed = 1,
  Canceled = 2,
  Failed = 3,
  Paused = 4,
  Running = 5,
  Scheduled = 6,
  Waiting = 7,
  WaitingForActivation = 8,
  WaitingForChildren = 9,
  WaitingToRun = 10,
  Blocked = 11,
  BlockedByParent = 12,
  Suspended = 13,
}
