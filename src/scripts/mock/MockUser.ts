import { UserInfo } from "@/ctypes/userInfo";
import { generateRandomInt } from "@/scripts/third/smallThird";

/**
 * @description MockUserInfo
 * @constructor
 */
export function MockUserInfo(): UserInfo {
  let userInfo: UserInfo = {
    assignedTask: 0,
    completedTask: 0,
    lastLogin: new Date(),
    userName: "Nate 冯",
    userRole: "admin",
  };
  //随机值
  let randomNumbers = generateRandomInt();
  userInfo.assignedTask = randomNumbers[1];
  userInfo.completedTask = randomNumbers[0];

  return userInfo;
}
