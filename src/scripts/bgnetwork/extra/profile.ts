import { postFunction } from "@/scripts/bgnetwork/basic/netbasic.ts";
import { profilebase } from "@/scripts/bgnetwork/freezeurl.ts";

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return postFunction(profilebase.value, "", null);
}
