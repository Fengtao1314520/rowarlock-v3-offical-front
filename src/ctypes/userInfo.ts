/**
 * @description 用户信息 类型
 * @interface UserInfo
 */
export type UserInfo = {
  userName: string;
  userRole: string;
  lastLogin: Date;
  assignedTask: number;
  completedTask: number;
  userPassword?: string;
  [key: string]: any;
};
