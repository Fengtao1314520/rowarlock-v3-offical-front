export interface UserInfo {
  userName: string;
  userRole: string;
  lastLogin: Date;
  assignedTask: number;
  completedTask: number;
  userPassword?: string;

  [key: string]: any;
}
