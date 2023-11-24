import { IuDUser } from "@/ctypes/internal/IuDUser.ts";
import { generateRandom199To299 } from "@/scripts/third/smallThird";

/**
 * @description MockUserInfo
 * @constructor
 */
export function MockUserInfo(): IuDUser {
  let userInfo: IuDUser = {
    assignedTask: 0,
    completedTask: 0,
    lastLogin: new Date(),
    uname: "Nate 冯",
    userRole: "admin",
  };
  //随机值
  let randomNumbers = generateRandom199To299();
  userInfo.assignedTask = randomNumbers[1];
  userInfo.completedTask = randomNumbers[0];

  return userInfo;
}
