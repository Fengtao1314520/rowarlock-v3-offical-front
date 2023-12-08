import { IuDUser } from "@/scripts/cTypes/internal/IuDUser.ts";

import { createUUID, nowDateTime } from "@/scripts/third/commonFunc.ts";

/**
 * @description 模拟userdetail
 * @constructor
 */
export function mockUser(): IuDUser {
  return {
    Id: createUUID(),
    Uemail: "fengtao@mail.com",
    Ulogintime: nowDateTime(),
    Uname: "abcdefg",
    Unickname: "Nate 冯",
    Upsd: "123456",
  };
}
