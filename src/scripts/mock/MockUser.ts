import { IuDUser } from "@/ctypes/internal/IuDUser.ts";

import { createUUID, NowDateTime } from "@/scripts/third/commonFunc.ts";

/**
 * @description 模拟userdetail
 * @constructor
 */
export function MockUser(): IuDUser {
  let userInfo: IuDUser = {
    Id: createUUID(),
    Uemail: "fengtao@mail.com",
    Ulogintime: NowDateTime(),
    Uname: "abcdefg",
    Unickname: "Nate 冯",
    Upsd: "123456",
  };

  return userInfo;
}
